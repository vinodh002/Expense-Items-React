import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  // const [inputs, setInputs] = useState({
  //   title: "",
  //   price: "",
  //   date: "",
  // });
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    // setInputs({
    //   ...inputs,
    //   title: event.target.value,
    // });
    // setInputs((prev) => {
    //   return {
    //     ...prev,
    //     title: event.target.value,
    //   };
    // });
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
    // setInputs({
    //   ...inputs,
    //   price: event.target.value,
    // });

    // setInputs((prev) => {
    //   return {
    //     ...prev,
    //     price: event.target.value,
    //   };
    // });
  };
  const dateChangeHandler = (event) => {
    setDate(new Date(event.target.value));
    // setInputs({
    //   ...inputs,
    //   date: event.target.value,
    // });

    // setInputs((prev) => {
    //   return {
    //     ...prev,
    //     date: event.target.value,
    //   };
    // });
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const newExpense = {
      title: title,
      price: price,
      date: date,
    };

    props.formSubmitHandler(newExpense);
    console.log(newExpense);
    setTitle("");
    setPrice("");
    setDate("");
    // setInputs({
    //   title: "",
    //   price: "",
    //   date: "",
    // });
  };
  return (
    <form className="expense-form" onSubmit={formSubmitHandler}>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={titleChangeHandler}
      />
      <input
        type="number"
        value={price}
        placeholder="Enter price"
        onChange={priceChangeHandler}
      />
      <input type="date" onChange={dateChangeHandler} value={date} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
