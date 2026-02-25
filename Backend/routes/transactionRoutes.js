const express = require("express");
const router = express.Router();

const {
  getTransaction,
  addTransaction,
  deleteTransaction
} = require("../controllers/transactionController");

router.get("/transactions", getTransaction);
router.post("/transactions", addTransaction);
router.delete("/transactions/:id", deleteTransaction);

module.exports = router;