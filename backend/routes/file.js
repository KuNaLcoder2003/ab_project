const express = require('express');
const router = express.Router();
const { Users, Files } = require('../db');
const multer = require('multer')
const upload = multer({ storage: multer.memoryStorage() })
const xlxs = require('xlsx');
const { Groq } = require('groq-sdk');
const dotenv = require('dotenv')

dotenv.config()
// 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

const groq = new Groq({ apiKey: process.env.API_KEY })

function extractArraysFromResponse(response) {
    try {
      const matches = [...response.matchAll(/\[\s*{[\s\S]*?}\s*\]/g)];
    //   console.log(matches)s
    console.log(matches);
  
      if (matches.length < 2) throw new Error("Expected at least two arrays in the response");
      
  
      const inventoryStatus = eval("(" + matches[0][0] + ")");
      const futureSalesPredictions = eval("(" + matches[1][0] + ")");
    //   const reorderHistory = eval("(" + array[2][0] + ")")

  
      return { inventoryStatus, futureSalesPredictions  };
    } catch (err) {
      console.error("Failed to extract arrays:", err);
      return { inventoryStatus: [], futureSalesPredictions: [] };
    }
  }
  








router.post('/upload', upload.single('excel_file'), async (req, res) => {

    const PROMPT = `You are a bot that predicts the inventory sales for the next 3 months , 
    based on the data of the previous 3 months also predict 
    the required inventory to meet the sales number and make sure you : 
    use the data i provided , nothing else , give the predictions in a json format (i am using javascript) , 
    you do all the prediction work , just give the json data no extra things
    i want : 
    1. const inventoryStatus = [
        { id: 1, name: "PRODUCT_NAME", stock: VALUE , reorderPoint: VALUE, reorderQuantity: VALUE, predicted: VALUE, required: VALUE },
    ]; (give in this exact format , each object in array denotes individual product ,  make sure the reorder point is not same for all products that is use the reorder values from the provided data) 
    2. const futureSalesPredictions = [
        { month: 'MONTH', "Product_Name": value, "Product_Name": value, "Product_Name": value, "Product_Name": value, "Product_Name": value},
    ] (give in this exact format , each object in array denotes month ) 
     3. give all values calculated correctly and no floating point , 
     4. also for my ease please give : const reorderHistory = [{ month: 'MONTH', count: Value }] (use the reoreder values in the provided data , give for all months); 
     `
    const file = req.file;

    try {
        if (!file) {
            return res.status(400).json({ message: 'No file recieved', valid: false })
        }
        const buffer = file.buffer;

        // console.log(buffer)
        const w = xlxs.read(buffer);




        const data_1 = xlxs.utils.sheet_to_json(w.Sheets['Sheet for forecasting'])
        console.log(data_1)
        const reduced_arr = data_1.map((val, index) => {
            let obj = { id: index + 1, name: val.ID, category: val.Category }
            return obj
        })
        let historicalSales = [];
        let obj1 = { month: 'October' }
        let obj2 = { month: 'November' }
        let obj3 = { month: 'December' }
        for (let i = 0; i < data_1.length; i++) {
            if (obj1[data_1[i].ID]) {
                obj1[data_1[i].ID] += data_1[i]['Sales-October']
            } else {
                obj1[data_1[i].ID] = data_1[i]['Sales-October']
            }
            if (obj2[data_1[i].ID]) {
                obj2[data_1[i].ID] += data_1[i]['Sales-November']
            } else {
                obj2[data_1[i].ID] = data_1[i]['Sales-November']
            }
            if (obj3[data_1[i].ID]) {
                obj3[data_1[i].ID] += data_1[i]['Sales-December']
            } else {
                obj3[data_1[i].ID] = data_1[i]['Sales-December']
            }
        }
        // console.log(obj1)
        historicalSales= [obj1 , obj2 , obj3]
        console.log(reduced_arr)
        const completion = await groq.chat.completions
            .create({
                messages: [
                    {
                        role: "user",
                        content: `${PROMPT} 
                        product_1_data : ${JSON.stringify(data_1)}
                        `
                    },
                ],
                model: "llama-3.3-70b-versatile",
            })
        const response = completion.choices[0].message.content
        console.log(response);

        

        const {inventoryStatus , futureSalesPredictions } = extractArraysFromResponse(response);
        

        res.status(200).json({
            valid: true,
            products: reduced_arr,
            inventoryStatus: inventoryStatus,
            futureSales: futureSalesPredictions,
            historicalSales: historicalSales,
            // reorderHistory: reorderHistory
        })



    } catch (error) {
        console.log(error);
    }
})

module.exports = router;