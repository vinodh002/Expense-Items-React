import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated title");
    console.log(title);
  };

  const [price, setPrice] = useState(props.price);
  const clickHandlerPrice = () => {
    setPrice("Updated price");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="title">{title}</div>
      <div className="price">{price}</div>
      {/* <button onClick={clickHandler}>Change</button>
      <button onClick={clickHandlerPrice}>Change</button> */}
    </Card>
  );
}

export default ExpenseItem;
