const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const apiMemberRoutes = require('./routes/api/member');
const apiBlogRoutes = require('./routes/api/blog');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/StepUp", { useNewUrlParser: true , useCreateIndex: true });
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.json());
app.use("/api/member", apiMemberRoutes);
app.use("/api/blog", apiBlogRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./step-up/public/index.html"));
});


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
