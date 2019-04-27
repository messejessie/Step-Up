const router = require("express").Router();
const memberRoutes = require("./member");

// Book routes
router.use("/member", memberRoutes);

module.exports = router;
