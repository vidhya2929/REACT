import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ items }) {
  if (items.length === 0) {
    return <p >No expenses found. Add some!</p>;
  }

  return (
    <ul>
      {items.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
}
