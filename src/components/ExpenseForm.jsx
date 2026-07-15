import { useState } from "react";

function ExpenseForm({ expenses, setExpenses }) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

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
    setCategory("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter expense title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button onClick={handleSubmit}>
        Add Expense
      </button>
    </div>
  );
}

export default ExpenseForm;