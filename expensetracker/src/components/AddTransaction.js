import React, { useState } from 'react'

export default function AddTransaction({ id, addTransaction }) {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const onSubmit = (event) => {
        event.preventDefault()
        const newTransaction = {
            id: id,
            text: text,
            amount: parseFloat(amount)
        }
        addTransaction(newTransaction);
    }
    console.log(typeof(amount) ,"efhu");

    return (
        <div>
            <h3>Add Transactions</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label>Description</label>
                    <input value={text} onChange={(event) => setText(event.target.value)} placeholder='Enter Description...' type='text' />
                </div>
                <div className='form-control'>
                    <label>Amount</label>
                    <input value={amount} onChange={(event) => setAmount(event.target.value)} placeholder='Enter Amount...' type='number' />
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}
