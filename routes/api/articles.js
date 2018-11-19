const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll);

router.route("/add")
  .post(articlesController.create);

router
  .route("/remove/:id")
  .delete(articlesController.remove);

module.exports = router;
