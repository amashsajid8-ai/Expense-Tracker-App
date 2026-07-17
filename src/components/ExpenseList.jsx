import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, setExpenses }) {
  return (
    <div className="expense-list-card">
      <h2>Your Expenses</h2>

      <div className="expense-list">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            category={expense.category}
            expenses={expenses}
            setExpenses={setExpenses}
          />
        ))}
      </div>
    </div>
  );
}

export default ExpenseList;