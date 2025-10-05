import { useState, useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  // Load from localStorage when page loads
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if (storedExpenses) setExpenses(storedExpenses);
  }, []);

  // Save to localStorage when expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  function addExpense(newExpense) {
    setExpenses((prev) => [...prev, { id: Date.now(), ...newExpense }]);
  }

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList items={expenses} />
    </div>
  );
}
