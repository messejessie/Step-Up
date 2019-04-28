const router = require("express").Router();
const blogController = require("../../controllers/blog");

// Matches with "/api/postings"
router.route("/blog")
  .get(blogController.findAll)
  .post(blogController.create);

// Matches with "/api/postings/:id"
router
  .route("blog/:id")
  .get(blogController.findById)
  .put(blogController.update)
  .delete(blogController.remove);

module.exports = router;