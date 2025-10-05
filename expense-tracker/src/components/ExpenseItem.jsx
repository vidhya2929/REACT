export default function ExpenseItem({ expense }) {
  return (
    <li>
      <div>
        <h3>{expense.name}</h3>
        <p>{expense.date}</p>
      </div>
      <span>₹{expense.amount}</span>
    </li>
  );
}
