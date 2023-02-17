import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  function clickHandler(e) {
    const expenses = document.querySelector('.expenses');
    expenses.removeChild(e.target.parentElement);
    console.log(e);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler} className='expense-item__price'> Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;
