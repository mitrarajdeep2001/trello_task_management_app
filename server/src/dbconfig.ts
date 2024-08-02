import mongoose from "mongoose";

const connectToDB = async () => {
    const email = encodeURIComponent("rajdeepmitra8");
    const password = encodeURIComponent("DRAGONhunt@62");

  try {
    await mongoose.connect(
      `mongodb+srv://${email}:${password}@cluster0.6vmr85a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB");
  }
};

export default connectToDB;