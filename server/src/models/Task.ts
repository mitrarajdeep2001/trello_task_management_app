import mongoose, { Document, Schema } from "mongoose";

// Define the Task interface
interface ITask extends Document {
  title: string;
  description?: string;
  status: string;
  priority?: "Low" | "Medium" | "Urgent";
  deadline?: Date;
}

// Define the Task schema
const taskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, required: true },
  priority: { type: String, enum: ["Low", "Medium", "Urgent"] },
  deadline: { type: Date },
});

// Create the Task model
const Task = mongoose.model<ITask>("Task", taskSchema);

export default Task;
