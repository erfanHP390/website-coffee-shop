const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    countPeople: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const model =
  mongoose.models.Reservation || mongoose.model("Reservation", schema);
export default model;
