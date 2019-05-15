const dotenv = require('dotenv').config()
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const apiMemberRoutes = require('./routes/api/member');
const apiBlogRoutes = require('./routes/api/blog');
const mongoose = require('mongoose');
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("step-up/build"));
}

app.use(bodyParser.urlencoded({
  extend: false
}));

app.use(express.static('public'));

let databaseUrl = 'mongodb://localhost/StepUp';

if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI)
} else {
  monogoose.connect(databaseUrl, { useNewUrlParser: true , useCreateIndex: true });

}

let db = mongoose.connection;

db.on('error', function(err){
  console.log('Mongoose Error: ', err);
});

db.once('open', function(){
  console.log('Mongoose connection successful.');
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/member", apiMemberRoutes);
app.use("/api/blog", apiBlogRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./step-up/build/index.html"));
});


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
