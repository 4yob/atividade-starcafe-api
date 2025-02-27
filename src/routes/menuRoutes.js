const express = require("express");
const router = express.Router();
const menuController = require("../controllers/menuController.js");

router.get("/menu", menuController.getAllItems);
router.post("/menu", menuController.addItem);

module.exports = router;