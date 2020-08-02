const express = require("express");

const historiesController = require("../Controllers/histories");

const historiesRouter = express();

historiesRouter.use("/histories", historiesController.getAllHistories);

module.exports = historiesRouter;