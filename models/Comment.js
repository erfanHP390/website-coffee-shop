const mongoose = require("mongoose");
require("./Product");

const schema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      default: 5,
    },
    isAccept: {
      type: Boolean,
      default: false,
    },
    productID: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);

const model = mongoose.models.Comment || mongoose.model("Comment", schema);

export default model;
