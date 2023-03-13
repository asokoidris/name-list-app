const express = require("express");
const router = express.Router();

const PageController = require("../controller/page-controller");

router.get("/", PageController.getNamesListController);

router.post("/add-names", PageController.postNamesListController);

router.post("/update", PageController.updateNameListController);

router.post("/delete", PageController.deleteNameListController);

module.exports = router;
