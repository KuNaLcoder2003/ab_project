const express = require('express');
const cors = require('cors');
const mainRouter = require('./routes/index');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/v1' , mainRouter);
app.listen(3000 , ()=>{
    console.log('App started')
})

app.use((err, req, res, next) => {
    console.error(err.stack); // or just `err` if it's not a stack trace
    res.status(500).send('Something broke!');
});