import React from 'react';
import './NewExpense.css';
import Form from './Form';

let NewExpense = (props) =>
{
    const saveExpenseDataHandler = (enteredExpenseData) => {
        props.onAddExpense(enteredExpenseData);
        console.log(enteredExpenseData);
    }

    


    return(
        <div className='new-expense'>
            <Form onsaveExpenseData = { saveExpenseDataHandler }/>
        </div>
    );
}

export default NewExpense;
