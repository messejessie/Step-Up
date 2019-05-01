    
const path = require("path");
const router = require("express").Router();
const apiMemberRoutes = require("./api/member")
const apiBlogRoutes = require("./api/blog")
// API Routes
router.use("/api/member", apiMemberRoutes);
router.use("/api/blog", apiBlogRoutes);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../step-up/build/index.html"));
});

module.exports = router;