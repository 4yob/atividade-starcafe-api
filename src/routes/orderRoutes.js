const express = require("express");
const router = express.Router();
const orderListController = require("../controllers/orderListController.js");

router.get("/orders", orderListController.getAllOrders);
router.get("/orders/:id", orderListController.getOrderById);
router.post("/orders", orderListController.addOrder);
router.delete("/orders/:id", orderListController.deleteOrder);

module.exports = router;