import React, { useState } from 'react';
import './styles.css';

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

    function resetList() {
        setAmounts([]);
        setDescriptions([]);
    }

    return (
        <div className="Container">
            <h1>Expense Tracker App</h1>
            <hr />
            <div className="Results">
                <p><strong><span>Balance</span></strong><br /><hr /><span>${-getBalance() + getExpenses()}</span></p>
                <p><strong><span>Expense</span></strong><br /><hr /><span>${-getExpenses()}</span></p>
            </div>
            <hr />
            <p>Transactions List</p>
            <hr />
            <ul>
                {descriptions.map((des, id) => {
                    return <div>
                        <li key={id}>
                            <span>{des}</span>
                            <span>{amounts[id]}</span>
                        </li>
                        <hr />
                    </div>
                })}
            </ul>
            <form name="expenseForm" onSubmit={handleSubmit}>
                <label>
                    Enter the Description
                    </label>
                <input type="text" onChange={(e) => { setDesc(e.target.value) }} placeholder="e.g. Eggs" required></input>
                <label>Enter the amount</label>
                <input type="number" onChange={(e) => setAmount(e.target.value)} placeholder="0" required></input>
                <input type="submit" value="Add Transaction" className="Buttons"></input>
                <input type="button" value="Reset List" className="Buttons" onClick={() => resetList()}></input>
            </form>
        </div>
    )
}