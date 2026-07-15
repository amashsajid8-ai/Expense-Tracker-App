import { useState } from "react";
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