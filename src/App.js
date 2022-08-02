import { useState } from "react";
import "./App.css";
// import ExpenseForm from "./components/ExpenseForm";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpenses";
import ExpenseFilter from "./components/ExpenseFilter";

const sampleExpenses = [
  {
    date: new Date(2019, 12, 5),
    price: 234,
    title: "Book",
  },
  {
    date: new Date(2020, 12, 5),
    price: 234,
    title: "Pen",
  },
  {
    date: new Date(2018, 12, 5),
    price: 234,
    title: "Pencil",
  },
  {
    date: new Date(2018, 11, 5),
    price: 234,
    title: "Pencil",
  },
  {
    date: new Date(2018, 11, 5),
    price: 234,
    title: "Pencil",
  },
  {
    date: new Date(2021, 12, 5),
    price: 234,
    title: "Rubber",
  },
];

function App() {
  const [expenses, setExpenses] = useState(sampleExpenses);
  const formSubmitHandler = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const [filteredValue, setFilterdValue] = useState(2018);
  const onChangeFilterHandler = (filteredValue) => {
    console.log(filteredValue);
    setFilterdValue(filteredValue);
  };

  return (
    <div>
      <NewExpenses onFormSubmit={formSubmitHandler} />
      <ExpenseFilter
        onFilterChange={onChangeFilterHandler}
        filterValue={filteredValue}
      />

      <Expenses expenses={expenses} filteredYear={filteredValue} />
    </div>
  );
}

export default App;
