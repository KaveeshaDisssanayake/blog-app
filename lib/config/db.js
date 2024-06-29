import mongoose from "mongoose";

  export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://kaveeshahiran99:19Apc3964@cluster0.e4awobu.mongodb.net/blog-app')

    console.log("DB Connected");
}