const mongoose = require("mongoose");
require("./Product");

const schema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
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
