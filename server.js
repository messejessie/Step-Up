const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const apiMemberRoutes = require('./routes/api/member');
const apiBlogRoutes = require('./routes/api/blog');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/StepUp", { useNewUrlParser: true , useCreateIndex: true });

let databaseUrl = 'mongodb://localhost/StepUp'
// Serve up static assets (usually on heroku)
if (process.env.MONGODB_URI === "production") {
  app.use(express.static("step-up/build"));
} else{
  mongoose.connect(databaseUrl);
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/member", apiMemberRoutes);
app.use("/api/blog", apiBlogRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./step-up/build/index.html"));
});


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
