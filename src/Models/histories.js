const db = require("../Configs/dbMySql");

const historiesModel = {
  getHistory: () => {
    const queryString = "SELECT history.id_history, product.name_product, ordered_lastMonth, ordered_thisMonth FROM history JOIN product ON history.id_product = product.id_product ";
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
};

module.exports = historiesModel;