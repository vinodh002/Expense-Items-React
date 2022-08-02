import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() == props.filteredYear
  );
  return (
    <Card className="expenses">
      {filteredExpenses.map((expense, i) => (
        <ExpenseItem
          key={i}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
}
export default Expenses;
