
import React, { useState } from "react";

import DashBoard from "../components/DashBoard";
// import { X } from "lucide-react";


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

export const UploadPage = () => {
  const [files, setFiles] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(localStorage.getItem('uploaded') || false);
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
  const [inventoryStatus, setInventoryStatus] = useState(JSON.parse(localStorage.getItem('inventory')) || []);
  const [futureSales, setFutureSales] = useState(JSON.parse(localStorage.getItem('futuresales')) || []);
  const [historicalSales, setHistoricalSales] = useState(JSON.parse(localStorage.getItem('history')) || []);

  const handleFiles = (e) => {
    const file = e.target.files[0];
    setFiles(file)
  };



  const handleSubmit = (e) => {
    e.preventDefault()
    const formdata = new FormData();
    formdata.append('excel_file', files)
    setUploading(true)

    fetch('https://ab-project.onrender.com/api/v1/file/upload', {
      method: 'POST',
      body: formdata
    }).then(async (response) => {
      const data = await response.json();
      if (data.valid) {

        setProducts(data.products);
        setHistoricalSales(data.historicalSales);
        setInventoryStatus(data.inventoryStatus);
        setFutureSales(data.futureSales);
        setUploading(false)
        setUploaded(true);
        localStorage.setItem('uploaded', true);
        localStorage.setItem('products', JSON.stringify(data.products))
        localStorage.setItem('inventory', JSON.stringify(data.inventoryStatus))
        localStorage.setItem('futuresales', JSON.stringify(data.futureSales))
        localStorage.setItem('history', JSON.stringify(data.historicalSales))
      }
    })

  }





  return (
    <>
      {
        uploaded ? <DashBoard historicalSales={historicalSales} futureSales={futureSales} products={products} inventoryStatus={inventoryStatus} setUploaded={setUploaded} /> : (
          <form className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-bold mb-4 text-center">Upload</h2>
            <div className="border-2 border-dashed border-purple-400 p-6 rounded-lg flex flex-col items-center justify-center text-center">
              <input
                type="file"
                onChange={handleFiles}
                className="hidden"
                id="file-input"
              />
              <label htmlFor="file-input" className="cursor-pointer text-purple-500">
                Drag & drop files or <span className="underline">Browse</span>
              </label>
              <p className="text-sm text-gray-500 mt-2">
                Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT , excel
              </p>

            </div>

            <button
              onClick={handleSubmit}

              disabled={uploading || files.length === 0}
              className="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 disabled:opacity-50"
            >
              {uploading ? "Uploading..." : "UPLOAD FILE"}
            </button>




          </form>
        )
      }
    </>
  );
};

