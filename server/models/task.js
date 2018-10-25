import mongoose from "mongoose"

// create tasks schema and model
const Task = mongoose
  .model('task', new mongoose.Schema({
    _id: String,
    categoryid: String,
    description: {
      type: String,
      trim: true,
      required: true,
      minlength: [2, 'description should be at least 2 characters'],
      maxlength: 200
    },
    deadline: {
      type: Date,
      required: true
    },
    done: {
      type: Boolean,
      default: false
    },
    important: {
      type: Boolean,
      default: false
    },
  }, {
    timestamps: true
  }))
export default Task