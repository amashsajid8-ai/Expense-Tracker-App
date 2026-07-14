function ExpenseItem({ title, amount, category }) {
  return (
    <li>
      <h3>{title}</h3>
      <p>Amount: ${amount}</p>
      <p>Category: {category}</p>
    </li>
  );
}

export default ExpenseItem;