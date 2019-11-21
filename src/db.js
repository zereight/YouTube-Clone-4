import dotenv from "dotenv";

import mongoose from "mongoose";

dotenv.config();

console.log(process.env.MONGO_URL);

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

const hanldeOpen = () => {
  console.log("✅ Connected to DB");
};
const handleError = (error) => {
  console.log(`Error on DB, ${error}`);
}

db.once("open", hanldeOpen);
db.on("error", handleError);