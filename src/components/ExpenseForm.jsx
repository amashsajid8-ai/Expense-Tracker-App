function ExpenseForm() {
  return (
    <div>
      <input type="text" placeholder="Enter expense title" />
      <input type="number" placeholder="Enter amount" />
      <input type="text" placeholder="Enter category" />
      <button>Add Expense</button>
    </div>
  );
}

export default ExpenseForm;