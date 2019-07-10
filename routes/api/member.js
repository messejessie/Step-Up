const router = require("express").Router();
const memberController = require("../../controllers/member");

// Matches with "/api/member"
router.route("/")
  .get(memberController.findAll)
  //.post(memberController.create)
  .post(memberController.findOne)
  //.post(memberController.create);

// Matches with "/api/member/:id"
router
  .route("/:id")
  //.get(memberController.findById)
  //.put(memberController.update)
  .post(memberController.create)
  .delete(memberController.remove);

  router.route("/populatedmember")
  .get(memberController.getMemberPopulateBlogs);;
  module.exports = router;
