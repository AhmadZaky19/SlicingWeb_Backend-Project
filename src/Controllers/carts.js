const cartsModel = require("../Models/carts");
const formResponse = require("../Helpers/Forms/formResponse");

const cartsController = {
  postAllCarts: (req, res) => {
    cartsModel
      .postCarts(req.body)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(err, data);
      });
  },
  getAllCarts: (_, res) => {
    cartsModel
      .getAllCarts()
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(err, data);
      });
  },
  getSumCarts: (_, res) => {
    cartsModel
      .getSumCarts()
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(err, data);
      });
  },
  getCartById: (req, res) => {
    cartsModel
      .getCartById(req.params.id)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(err, data);
      });
  },
  deleteCartById: (req, res) => {
    cartsModel
      .deleteCartById(req.params.id)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(err, data);
      });
  },
  deleteAllCart: (_, res) => {
    cartsModel
      .deleteAllCart()
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(err, data);
      });
  },
  updateCart: (req, res) => {
    cartsModel
      .updateCart(req.body)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(err, data);
      });
  },
};

module.exports = cartsController;
