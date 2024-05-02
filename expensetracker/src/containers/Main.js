import React, { Component } from 'react'
import { connect } from 'react-redux'
import Balance from '../components/Balance'
import AddTransaction from '../components/AddTransaction';
import { addTransaction } from '../redux/action';
import TransactionsList from '../components/TransactionsList';

export class Main extends Component {
  render() {
    const {transactions, addTransaction, deleteTransaction} = this.props;

    return (
      <div className='container'>
        <Balance transactions={transactions}/>
        <TransactionsList transactions={transactions} deleteTransaction={(id)=> deleteTransaction(id)}/>
        <AddTransaction 
            addTransaction={(transaction)=> addTransaction(transaction)} 
            id={transactions[0]? transactions[0].id + 1: 1}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    transactions: state.transactions
})

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
