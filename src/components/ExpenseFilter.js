import React, { useState } from "react";
import "./ExpenseFilter.css";

function ExpenseFilter(props) {
  const changeFilteredValueHandler = (e) => {
    props.onFilterChange(e.target.value);
  };

  return (
    <div className="ExpenseFilter">
      <select value={props.filterValue} onChange={changeFilteredValueHandler}>
        <option type="2021">2021</option>
        <option type="2020">2020</option>
        <option type="2019">2019</option>
        <option type="2018">2018</option>
      </select>
    </div>
  );
}
export default ExpenseFilter;
