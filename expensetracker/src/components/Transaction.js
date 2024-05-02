import React from 'react'

export default function Transaction({transaction,deleteTransaction}) {
    let sign = transaction.amount >= 0 ? "+": "-";
  return (
    <div>
        <li className={transaction.amount >= 0 ? "plus": "minus"}>
            {transaction.text}
        <span>
            {sign}${Math.abs(transaction.amount)}
        </span>
        <button className='delete-btn' onClick={()=> deleteTransaction(transaction.id)}>X</button>
        </li>
    </div>
  )
}
