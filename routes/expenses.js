import express from "express";
import Expense from "../models/Expense.js";

const router = express.Router();

// GET all expenses
router.get("/", async (req, res) => {
  const expenses = await Expense.find().sort({ createdAt: -1 });
  res.json(expenses);
});

// CREATE expense
router.post("/", async (req, res) => {
  const expense = await Expense.create(req.body);
  res.json(expense);
});

// UPDATE expense
router.put("/:id", async (req, res) => {
  const updated = await Expense.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE expense
router.delete("/:id", async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Expense deleted" });
});

export default router;
