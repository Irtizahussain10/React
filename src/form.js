import React, { useState } from 'react';
 
export default function Form() {

    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [descriptions, setDescriptions] = useState([]);
    const [amounts, setAmounts] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        event.target.reset();
        setDescriptions(descriptions.concat(desc));
        setAmounts(amounts.concat(Number(amount)));
    }
 
    function getBalance() {
        let balance = 0;
        for (let i = 0; i < amounts.length; i++) {
            if (amounts[i] > 0) {
                balance = balance + Number(amounts[i]);
            }
        }
        return balance
    }

    function getExpenses() {
        let expenses = 0;
        for (let i = 0; i < amounts.length; i++) {
            if (amounts[i] < 0) {
                expenses = expenses + Number(amounts[i]);
            }
        }
        return expenses
    }

    function resetList(){
        setAmounts([]);
        setDescriptions([]);
    }
 
    return (
        <div>
            <h1>Expense Tracker App</h1>
            <h3><span>Balance</span><span>${-getBalance() + getExpenses()}</span></h3>
            <h3><span>Expense</span><span>${-getExpenses()}</span></h3>
            <form name="expenseForm" onSubmit={handleSubmit}>
                <label>
                    Enter the Description
                    <br />
                    <input type="text" onChange={(e) => { setDesc(e.target.value) }} placeholder="e.g. Eggs" required></input>
                </label>
                <br />
                <label>Enter the amount
                    <br />
                    <input type="number" onChange={(e) => setAmount(e.target.value)} placeholder="0" required></input>
                </label>
                <br />
                <input type="submit" value="Add Transaction"></input>
            </form>
            <button onClick={()=>resetList()}>Reset List</button>
             <ul>
                {descriptions.map((des, id) => {
                    return <li key={id}>
                        <span>{des}</span>
                        <span>{amounts[id]}</span>
                    </li>
                })}
            </ul>
        </div>
    )
}