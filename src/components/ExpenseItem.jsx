function ExpenseItem(props) {
  console.log(props);

  const handleDelete = () => {
    const updatedExpenses = props.expenses.filter(
      (expense) => expense.id !== props.id
    );

    props.setExpenses(updatedExpenses);
  };

  return (
    <li>
      <h3>{props.title}</h3>

      <p>Amount: ${props.amount}</p>

      <p>Category: {props.category}</p>

      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default ExpenseItem;