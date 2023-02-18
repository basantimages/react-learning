import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map((e) => {
        // console.log(e.title);
        return <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.date} />;
      })}
    </Card>
  );
};

export default Expenses;
