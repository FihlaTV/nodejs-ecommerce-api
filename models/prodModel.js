const mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

const productSchema = mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    name: {
      type: String,
      unique: true,
      required: true
    },
    price: {
      type: Number,
      required: true,
    },
    productImage: {
      type: String,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    createdAt: {
      type: Date,
      required: false,
    },
    updatedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true } //to include createdAt and updatedAt
);
productSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Product", productSchema);
