const mongoose = require('mongoose')

const app = require('./app')

const port = 3000

mongoose   
    .connect('mongodb://localhost:27017/groceryListBackEnd')
    .then(()=>{
        app.listen(port, ()=>{
            console.log(`Server connected on ${port}`)
            console.log('MongoDB Connected')
        })
    })
    .catch((error) => {
        console.log(error)
    })