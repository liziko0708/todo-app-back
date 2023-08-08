import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema({
  id: {
    type: Schema.Types.Number,
    required: true,
  },
  name: {
    type: Schema.Types.String,
    required: true,
  },
});

const tasks = mongoose.model("todo", taskSchema);

export default tasks;
