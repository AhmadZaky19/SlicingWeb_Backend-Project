const productsModel = require("../Models/products");
const formResponse = require("../Helpers/forms/formResponse");

const productsController = {
  getAllProducts: (_, res) => {
    productsModel
      .getAllProducts()
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  getProductByCategory: (req, res) => {
    productsModel
      .getProductByCategory()
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  getProductByPrice: (req, res) => {
    productsModel
      .getProductByPrice()
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  getProductByCreatedAt: (req, res) => {
    productsModel
      .getProductByCreatedAt()
      .then((data) => {
        formResponse.succes(res, data);
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
        };
        formResponse.succes(res, responseData);
      })
      .catch((err) => {
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
        formResponse.succes(res, responseData);
      })
      .catch((err) => {
        formResponse.error(res_err);
      });
  },
  deleteProduct: (req, res) => {
    productsModel
      .deleteProduct(req.params.id)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  searchProduct: (req, res) => {
    productsModel
      .searchProduct(req.params.product)
      .then((data) => {
        formResponse.succes(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = productsController;