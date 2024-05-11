const shoppingList = require('../model/groceryList')

async function getAllGroceries(req, res, next){
    try {
        let foundAllGroceries = await shoppingList.find({})
        res.json({message: 'success', payload: foundAllGroceries})
    } catch (error) {
        res.json({message: error, error})
    }
}


async function createGrocery(req, res, next){
    try {
        const grocery = req.body.grocery
        let newGrocery = new shoppingList({
            grocery: grocery
        })
        let addedGrocery = await newGrocery.save()
        res.json({message: "success", payload: addedGrocery})
    } catch (error) {
        res.json({message: 'error', error: error.message})
    }
}

async function updateGrocery(req, res, next){
    try {
        let updatedProduct = await shoppingList.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json({message: 'success', payload: updatedProduct})
    } catch (error) {
        res.json({message: 'error', error: error.message})
    }
}


async function deleteGrocery(req, res, next){
    try {
        let deletedProduct = await shoppingList.findByIdAndDelete(req.params.id)
        res.json({message: 'Successfully deleted product', payload: deletedProduct})
    } catch (error) {
        res.json({message: 'error', error: error.message})
    }
}


module.exports = {
    getAllGroceries,
    createGrocery,
    updateGrocery,
    deleteGrocery
}