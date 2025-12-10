import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description: { 
        type: String, 
        default: '',
    },
    completed: { 
        type: Boolean, 
        default: false 
    },
    category: {
        type: String,
        enum: ["personal", "work", "study", "other"], 
        default: "personal"
    }
}, {
    timestamps: true,
})

export const Todo = mongoose.model('Todo', TodoSchema);