const db = require("../Configs/dbMySql");

// ALL
const productsModel = {
  getAllProducts: () => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT product.id_product, product.name_product, category.name_category, product.price_product, product.img_product, product.created_at FROM product JOIN category ON product.id_category = category.id_category";
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  // SORT PRODUCT BY
  sortProductBy: (query) => {
    const sortBy = query.by;
    const sortOrder = query.order;
    return new Promise((resolve, reject) => {
      const queryString = `SELECT product.id_product, product.name_product, category.name_category, product.price_product, product.img_product, product.created_at FROM product JOIN category ON product.id_category = category.id_category ORDER BY product.${sortBy} ${sortOrder}`;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  //  INSERT
  postNewProduct: (body) => {
    const queryString = "INSERT INTO product SET ?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [body], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  // UPDATE
  updateProduct: (body) => {
    const { id_product } = body;
    return new Promise((resolve, reject) => {
      const queryString = `UPDATE product SET ? WHERE product.id_product=${id_product}`;
      db.query(queryString, [body], (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  // DELETE
  deleteProduct: (id) => {
    return new Promise((resolve, reject) => {
    const queryString = `DELETE FROM product WHERE id_product = ${id}`;
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  // SEARCH
  searchProduct: (product) => {
    const queryString = `SELECT product.id_product, product.name_product, category.name_category, product.price_product, product.img_product, product.created_at FROM product JOIN category ON product.id_category = category.id_category WHERE product.name_product LIKE "%${product}%"`;
    return new Promise((resolve, reject) => {
      db.query(queryString, (err, data) => {
        if (!err) {
          if (data.length !== 0) {
            resolve(data);
          }
          reject("Data not found !");
        } else {
          reject(err);
        }
      });
    });
  },
};

module.exports = productsModel;
