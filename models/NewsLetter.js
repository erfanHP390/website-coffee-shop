const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    email: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.NewsLetter || mongoose.model("NewsLetter" , schema)
export default model