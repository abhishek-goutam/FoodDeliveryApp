const DishesModel = require('../Model/Dishes')

const getDishes = async (req,res)=>{

    const dishes = await DishesModel.find();
    // console.log("dishes",dishes)
    return res.status(200).send(dishes)
}

module.exports = {getDishes};