import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config({
  path: "./env"
})

connectDB();




/*
import express from "express"
const app=express();

// can just connect db in one line , but doing it while using a function is a better approach as this action is asynchronous.

;(async ()=> {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error) => {
      console.log("ERROR: ",error);
      throw error
    })

    app.listen(process.env.PORT,() => {
      console.log(`App is listening on port ${process.env.PORT}`);
    })
  } catch (error) {
    console.error("ERROR: ",error)
    throw error
  }
}) ()

*/