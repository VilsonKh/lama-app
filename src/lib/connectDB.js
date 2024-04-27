const mongoose = require("mongoose");

const connection = {};

export const connectToDb = async () => {
  try {
    if(connection.isConnected){
      console.log("ALREADY CONNECTED TO DB");
      return
    }
    const db =  await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
   console.log(error)
   throw new Error(error)
  }
}