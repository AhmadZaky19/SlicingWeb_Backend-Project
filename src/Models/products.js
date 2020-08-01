const db = require("../Configs/dbMySql");

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
  getProductByCreatedAt: () => {
    return new Promise((resolve, reject) => {
      const queryString =
        "SELECT product.id_product, product.name_prod   uct, category.name_category, product.price_product, product.img_product, product.created_at FROM product JOIN category ON product.id_category = category.id_category ORDER BY product.created_at ";
      db.query(queryString, (err, data) => {
        if (!err) {
          resolve(data);
        } else {
          reject(err);
        }
      });
    });
  },
  postNewProduct: (body) => {
    const {
        name_product, id_category, price_product, img_product, created_At 
    } = body;
    const queryString =
      "INSERT INTO product SET name_product =?, id_category =?, price_product =?, img_product =?, created_at =?";
    return new Promise((resolve, reject) => {
      db.query(
        queryString,
        [name_product, id_category, price_product, img_product, created_At],
        (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  updateProduct: (body) => {
    const {
        id_product, name_product, id_category, price_product, img_product, created_At,
    } = body;
    const queryString =
      "UPDATE product SET name_product=?, category_id=?, price_product=?, img_product=?, created_At=? WHERE id_product=?";
    return new Promise((resolve, reject) => {
      db.query(
        queryString,
        [name_product, id_category, price_product, img_product, created_At, id_product],
        (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err);
          }
        }
      );
    });
  },
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
      "SELECT product.id_product, product.name_prod   uct, category.name_category, product.price_product, product.img_product, product.created_at FROM product JOIN category ON product.id_category = category.id_category WHERE product.name_product=?";
    return new Promise((resolve, reject) => {
      db.query(queryString, [product], (err, data) => {
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