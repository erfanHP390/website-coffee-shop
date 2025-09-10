const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false,
      });
      console.log("connect to DB is successfully :)");
    }
  } catch (err) {
    console.log("DB connection has error", err);
  }
};

export default connectToDB;
