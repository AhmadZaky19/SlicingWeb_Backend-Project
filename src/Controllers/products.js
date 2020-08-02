const productsModel = require("../Models/products");
const formResponse = require("../Helpers/forms/formResponse");

const productsController = {
  // ALL
  getAllProducts: (_, res) => {
    productsModel
      .getAllProducts()
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  // BY CATEGORY
  getProductByCategory: (req, res) => {
    productsModel
      .getProductByCategory(req.params.id_category)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  // BY PRICE
  getProductByPrice: (req, res) => {
    productsModel
      .getProductByPrice(req.params.price_product)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  // BY NEWEST
  getProductByCreatedAt: (req, res) => {
    productsModel
      .getProductByCreatedAt(req.params.created_at)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  // ADD
  postNewProduct: (req, res) => {
    productsModel
      .postNewProduct(req.body)
      .then((data) => {
        const responseData = {
          ...req.body,
          id_product: data.insertId,
          created_at: Date.now(),
        };
        console.log(responseData);
        formResponse.success(res, responseData);
      })
      .catch((err) => {
        console.log(err);
        formResponse.error(res, err);
      });
  },
  // UPDATE
  updateProduct: (req, res) => {
    productsModel
      .updateProduct(req.body)
      .then((data) => {
        const responseData = {
          ...req.body,
        };
        formResponse.success(res, responseData);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  // DELETE
  deleteProduct: (req, res) => {
    productsModel
      .deleteProduct(req.params.id)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  // SEARCH
  searchProduct: (req, res) => {
    productsModel
      .searchProduct(req.params.product)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = productsController;