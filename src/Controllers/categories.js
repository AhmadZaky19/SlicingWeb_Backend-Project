const categoriesModel = require("../Models/categories");

const categoriesController = {
  getAllCategories: (_, res) => {
    categoriesModel
      .getCategory()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  },
};

module.exports = categoriesController;