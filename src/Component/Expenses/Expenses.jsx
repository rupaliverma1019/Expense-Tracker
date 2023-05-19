import React  from "react";
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from "../UI/Card";


let Expenses = (props) => {
    return(
        <Card className='expenses'>
            {
                props.expenses.map(expense => (
                    <ExpenseItem
                    
                        date = {expense.date}
                        title = {expense.title}
                        amount = {expense.amount}
        />
        
                 ) )
            }

        
        </Card>
    );
}
export default Expenses;