const asyncWrapper = require("../middlewares/async_wrapper");

const getAllArticles = asyncWrapper(async (req, res, next) => {
  res.send("get all articles");
});

const getArticle = asyncWrapper(async (req, res, next) => {
  res.send("get single article");
});

const createArticle = asyncWrapper(async (req, res, next) => {
  res.send("create single article");
});

module.exports = { getAllArticles, createArticle, getArticle };
