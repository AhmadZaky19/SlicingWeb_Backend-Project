const historiesModel = require("../Models/histories");
const formResponse = require("../Helpers/forms/formResponse");

const historiesController = {
  getAllHistories: (_, res) => {
    historiesModel
      .getHistory()
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = historiesController;