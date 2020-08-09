const historiesModel = require("../Models/histories");
const formResponse = require("../Helpers/Forms/formResponse");

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
  postHistories: (req, res) => {
    historysModel
      .postHistories(req.body)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
};

module.exports = historiesController;