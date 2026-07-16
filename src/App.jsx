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


  return (
    <div className="container">
      <Header />

      <ExpenseForm
  expenses={expenses}
  setExpenses={setExpenses}
/>

      <ExpenseList
  expenses={expenses}
  setExpenses={setExpenses}
/>
    </div>
  );
}

export default App;

