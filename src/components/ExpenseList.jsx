import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  return (
    <div>
      <h2>Expenses</h2>

      <ul>
        {expenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            category={expense.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;