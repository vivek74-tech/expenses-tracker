import mongoose from "mongoose";

const expansesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: [
      "Food",
      "Travel",
      "Shopping",
      "Bills",
      "Education",
      "Entertainment",
      "Other"
    ],
    required: true
  },
  type: {
    type: String,
    enum:["Income", "Expense"],
    required: true
  },
  date: {
    type:Date,
    required:true
  },
  description: {
    type: String,
    required: true

  }

}, { timestamps: true });

export  const Expanses = await mongoose.model("Expanses", expansesSchema);