import { useState } from "react";

function ExpenseForm({ expenses, setExpenses }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const handleSubmit = () => {
    if (
      title.trim() === "" ||
      amount.trim() === "" ||
      category.trim() === ""
    ) {
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount,
      category,
    };

    setExpenses([...expenses, newExpense]);

    setTitle("");
    setAmount("");
    setCategory("Food");
  };

  return (
    <div className="expense-form-card">
      <h2>Add New Expense</h2>

      <div className="expense-form">
        <input
          type="text"
          placeholder="Expense Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Education</option>
        </select>

        <button className="add-btn" onClick={handleSubmit}>
          + Add Expense
        </button>
      </div>
    </div>
  );
}

export default ExpenseForm;