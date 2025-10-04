import { useState, useEffect } from "react";
export default function Expense(){
  const[expenses, setExpenses] = useState([]);


  useEffect(() =>{
    const storedExpenses = JSON.parse(localStorage.getItem("expenses"));
    if(storedExpenses) setExpenses(storedExpenses)
  },[]);

  useEffect(() => {
    localStorage.setItem("expenses",JSON.stringify(expenses));
  },[expenses]);

  function addExpense(newExpense){
    setExpenses((prev) => [...prev, {id:Date.now(),...newExpense}]);
  }

  return(
    <div>
      <h1>Expense Tracker</h1>
    </div>
  )
}