const productsModel = require("../Models/products");
const formResponse = require("../Helpers/forms/formResponse");

const productsController = {
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