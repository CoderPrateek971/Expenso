const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

const {
  getTransaction,
  addTransaction,
  deleteTransaction
} = require("../controllers/transactionController");

router.get("/transactions", auth,  getTransaction);
router.post("/transactions", auth,  addTransaction);
router.delete("/transactions/:id", auth,  deleteTransaction);

module.exports = router;