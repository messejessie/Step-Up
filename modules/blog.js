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
    affirmations: {
        type: String,
        trim: true 
    },
    memberid:{ 
        type: Schema.Types.ObjectId,
        ref:"member"
    }

});

const Blog = mongoose.model("blogs",blogSchema);

module.exports = Blog;
