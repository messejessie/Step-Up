const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    rating: Number,
    gratitude: {
        type: String,
        trim: true
    },
    freeform: {
        type: String,
        trim: true
    },
    goals: { 
        type: String,
        trim: true 
    },
    affermations: {
        type: String,
        trim: true 
    }
});

const Blog = mongoose.model("blog",blogSchema);

module.exports = Blog;
