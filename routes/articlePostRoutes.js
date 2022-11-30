const express = require("express");
const router = express.Router();

const {
  getAllArticles,
  createArticle,
  getArticle,
} = require("../controllers/postControllers");

router.route("/").get(getAllArticles).post(createArticle);
router.route("/:id").get(getArticle);

module.exports = router;
