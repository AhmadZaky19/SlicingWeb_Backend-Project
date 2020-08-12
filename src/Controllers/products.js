const productsModel = require("../Models/products");
const formResponse = require("../Helpers/Forms/formResponse");

const productsController = {
  // ALL
  getAllProducts: (_, res) => {
    productsModel
      .getAllProducts()
      .then((data) => {
        formResponse.success(res, data, 200);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
  // SORT PRODUCT BY
  sortProductBy: (req, res) => {
    productsModel
      .sortProductBy(req.query)
      .then((data) => {
        formResponse.success(res, data, 200);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
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
        formResponse.success(res, responseData, 201);
      })
      .catch((err) => {
        console.log(err);
        formResponse.error(res, err, 500);
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
        formResponse.success(res, responseData, data, 201);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
  // DELETE
  deleteProduct: (req, res) => {
    productsModel
      .deleteProduct(req.params.id)
      .then((data) => {
        const responseData = {
          id: data.insertId,
          ...req.body,
          msg: `delete product with id: ${req.params.id} was successful`,
        };
        formResponse.success(res, responseData, data, 200);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
  // SEARCH
  searchProduct: (req, res) => {
    productsModel
      .searchProduct(req.query.name_product)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = productsController;
