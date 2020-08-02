const db = require("../Configs/dbMySql");

// ALL
const productsModel = {
  getAllProducts: () => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT product.id_product, product.name_product, category.name_category, product.price_product, product.img_product, product.created_at FROM product JOIN category ON product.id_category = category.id_category ORDER BY product.name_product ASC";
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  // SORT BY CATEGORY 
  getProductByCategory: () => {
    const queryString =
      "SELECT product.id_product, product.name_product, category.name_category, product.price_product, product.img_product, product.created_at FROM product JOIN category ON product.id_category = category.id_category ORDER BY product.id_category";
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
  // SORT BY PRICE
  getProductByPrice: () => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT product.id_product, product.name_product, category.name_category, product.price_product, product.img_product, product.created_at FROM product JOIN category ON product.id_category = category.id_category ORDER BY product.price_product";
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  // SORT BY NEWEST
  getProductByCreatedAt: () => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT product.id_product, product.name_product, category.name_category, product.price_product, product.img_product, product.created_at FROM product JOIN category ON product.id_category = category.id_category ORDER BY product.created_at";
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
    const {name_product, id_category, price_product, img_product } = body;
    const queryString =
      "INSERT INTO product SET name_product =?, id_category =?, price_product =?, img_product =?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [name_product, id_category, price_product, img_product], (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  // UPDATE
  updateProduct: (body) => {
    const {id_product, name_product, id_category, price_product, img_product} = body;
    const queryString =
      "UPDATE product SET name_product=?, id_category=?, price_product=?, img_product=? WHERE id_product=?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [name_product, id_category, price_product, img_product, id_product], (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  // DELETE
  deleteProduct: (id) => {
    const queryString = "DELETE FROM `product` WHERE id_product = ?";
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
  searchProduct: (product) => {
    const queryString =
      `SELECT product.id_product, product.name_product, category.name_category, product.price_product, product.img_product, product.created_at FROM product JOIN category ON product.id_category = category.id_category WHERE product.name_product LIKE '%${product}%'`;
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