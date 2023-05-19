import Expenses from "./Component/Expenses/Expenses";
import React, { useState } from "react";
import NewExpense from "./Component/NewExpense/NewExpense";

let DUMMY_EXPENSE = [
    {
        id : "e1",
        title : "School fee",
        amount : "300",
        date : new Date(2021,5,12)
    },
    {
        id : "e1",
        title : "Food",
        amount : "300",
        date : new Date(2021,8,12)
    }

    
    
];




let App = ()=>{

    const [expenses , setExpenses] = useState(DUMMY_EXPENSE);



    
    const addExpenseHandler = (enteredExpenseData) =>{
        const updatedExpense = [enteredExpenseData, ...expenses]
        setExpenses(updatedExpense)
        console.log(enteredExpenseData);
    }

    return(
    <div>
        <NewExpense onAddExpense = { addExpenseHandler }></NewExpense>
        <Expenses expenses={expenses}/>
        
    </div>);
    
}
export default App;