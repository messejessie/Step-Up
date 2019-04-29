const mongoose = require("mongoose");
const db = require("../modules");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/rreactpostings"
);

const memberSeed = [{

    name: "Jessie",
    username: "messejessie",
    password: "spacex2019",
    email: "messejessie77@gmail.com",
    age: 29


}];