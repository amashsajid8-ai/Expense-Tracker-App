function ExpenseItem(props) {
  const handleDelete = () => {
    const updatedExpenses = props.expenses.filter(
      (expense) => expense.id !== props.id
    );

    props.setExpenses(updatedExpenses);
  };

  return (
    <div className="expense-card">
      <div className="expense-info">
        <h3>{props.title}</h3>
        <p>{props.category}</p>
      </div>

      <div className="expense-right">
        <h3>Rs {props.amount}</h3>

        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;