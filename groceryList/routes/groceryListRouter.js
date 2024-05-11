const express = require('express')
const router = express.Router()

const {
    getAllGroceries,
    createGrocery,
    updateGrocery,
    deleteGrocery
} = require('../controller/groceryListController')


router.get('/', (req, res, next)=>{
    res.json({message: "Start making your grocery list!"})
})


router.get('/get-all-groceries', getAllGroceries)

router.post('/create-grocery', createGrocery)

router.put('/update-grocery-by-id/:id', updateGrocery)

router.delete('/delete-grocery-by-id/:id', deleteGrocery)


module.exports = router