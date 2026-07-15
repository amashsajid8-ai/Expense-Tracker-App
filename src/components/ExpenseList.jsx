import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, setExpenses }) {
  return (
    <div>
      <h2>Expenses</h2>

      <ul>
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
      </ul>
    </div>
  );
}

export default ExpenseList;