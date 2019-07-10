const router = require("express").Router();
const blogController = require("../../controllers/blog");

// Matches with "/api/postings"
router.route("/")
  .get(blogController.findAll)
  .post(blogController.create);

// Matches with "/api/postings/:id"
router
  .route("/:id")
  .get(blogController.findById)
  .post(blogController.create)
 // .post(blogController.update)
  .delete(blogController.remove)
  

  router
  .route("/populatemember/:id")
  .get(blogController.getPopulateBlog)

module.exports = router;