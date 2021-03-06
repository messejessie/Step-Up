const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        trim: true,
        required: "Username is Required."
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required.",
        validate: [
            function (input) {
                return input.length >= 6;
            },
            "Password should be longer."
        ]
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address."]
    },
    age: Number,
    blog: {
        type: Schema.Types.ObjectId,
        ref: "blogs"
    }

});

const Member = mongoose.model("member", memberSchema);

module.exports = Member;
