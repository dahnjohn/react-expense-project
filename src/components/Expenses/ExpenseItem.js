import React, {useState} from "react";

import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const[title, setTitle] = useState(props.title);
 
const clickHandler = () => {
  setTitle('Updated!');
  //console.log('Clicked!!');
}
  return (
    <ul>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">P {props.amount}</div>
      </div>
      <button onClick={clickHandler} >Change title</button>
    </Card>
    </ul>
  );
}

export default ExpenseItem;
