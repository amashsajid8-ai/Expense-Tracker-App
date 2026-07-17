import { useState, useEffect } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {

  const [expenses, setExpenses] = useState([
    
    
    {
      id: 1,
      title: "Groceries",
      amount: 50,
      category: "Food",
    },
    {
      id: 2,
      title: "Transport",
      amount: 20,
      category: "Travel",
    },
    {
      id: 3,
      title: "Books",
      amount: 35,
      category: "Education",
    },
  ]);
  const [filter, setFilter] = useState("All");
  useEffect(() => {
  const savedExpenses = localStorage.getItem("expenses");

  if (savedExpenses) {
    setExpenses(JSON.parse(savedExpenses));
  }
}, []);
useEffect(() => {
  console.log("Saving...", expenses);

  localStorage.setItem("expenses", JSON.stringify(expenses));
}, [expenses]);
const totalExpenses = expenses.reduce(
  (total, expense) => total + Number(expense.amount),
  0
);
const filteredExpenses =
  filter === "All"
    ? expenses
    : expenses.filter((expense) => expense.category === filter);


  return (
  <div className="app">
    <div className="container">
      <Header />

      <div className="top-bar">
        <div className="total-box">
          <h3>Total Expenses</h3>
          <p>Rs {totalExpenses}</p>
        </div>

        <div className="filter-box">
          <label>Filter</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Education">Education</option>
          </select>
        </div>
      </div>

      <ExpenseForm
        expenses={expenses}
        setExpenses={setExpenses}
      />

      <ExpenseList
        expenses={filteredExpenses}
        setExpenses={setExpenses}
      />
    </div>
  </div>
);
}

export default App;

