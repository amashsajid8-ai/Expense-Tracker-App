import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {

  const expenses = [
    {
      title: "Groceries",
      amount: 50,
      category: "Food",
    },
    {
      title: "Transport",
      amount: 20,
      category: "Travel",
    },
    {
      title: "Books",
      amount: 35,
      category: "Education",
    },
  ];

  return (
    <div className="container">
      <Header />
      <ExpenseForm />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;