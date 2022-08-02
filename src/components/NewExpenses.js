import { useState } from "react";
import Card from "./Card";
import ExpenseForm from "./ExpenseForm";
import Expenses from "./Expenses";

function NewExpenses(props) {
  const onFormSubmitHandler = (expense) => {
    props.onFormSubmit(expense)
  };

  return (
    <Card>
      <ExpenseForm formSubmitHandler={onFormSubmitHandler} />
    </Card>
  );
}

export default NewExpenses;
