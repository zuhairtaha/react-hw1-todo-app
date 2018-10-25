import mongoose from "mongoose"

// create categories schema and model
const Category = mongoose
    .model('category', new mongoose.Schema({
        title: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 200
        },
        description: {
            type: String,
            maxlength: 500
        }
    }, {
        timestamps: true
    }))

export default Category