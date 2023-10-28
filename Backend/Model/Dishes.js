const mongoose = require("mongoose");

const DishesModel = mongoose.model("dishes", {
  itemId: { type: String, required: true },
  name: { type: String, required: true },
  imgSrc: { type: String, required: true },  
  price: { type: Number, required: true },
  //   category: { type: String, required: true },
  //   quantity: { type: Number, required: true },
});

module.exports = DishesModel;
