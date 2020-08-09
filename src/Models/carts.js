const db = require("../Configs/dbMySql");

const cartsModel = {
  postCarts: (body) => {
    const { id_product, quantity, total_price } = body;
    const queryString =
      "INSERT INTO cart SET product_id=?, qty=?, total_price=?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [id_product, quantity, total_price], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getAllCarts: () => {
    const queryString =
      "SELECT cart.id_cart, product.name_product, product.price_product, cart.quantity, cart.total_price, product.img_product FROM product JOIN cart ON cart.id_product=product.id_product ORDER BY id_cart";
    return new Promise((resolve, reject) => {
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getSumCarts: () => {
    const queryString = "SELECT SUM(total_price) as total FROM cart";
    return new Promise((resolve, reject) => {
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  getCartById: (id) => {
    const queryString = "SELECT * FROM cart WHERE id_product=?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  deleteCartById: (id) => {
    const queryString = "DELETE FROM cart WHERE id_product=?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [id], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  deleteAllCart: () => {
    const queryString = "DELETE FROM cart";
    return new Promise((resolve, reject) => {
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  updateCart: (body) => {
    const { qty, total_price, id_cart } = body;
    const queryString = "UPDATE cart SET quantity=?, total_price=? WHERE id_cart=?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [qty, total_price, id_cart], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = cartsModel;