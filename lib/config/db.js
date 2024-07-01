import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://hirakaveesha:19Apc3964@cluster0.od8xsno.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log("DB Connected")
}
