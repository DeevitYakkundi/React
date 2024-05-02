import { ADD_TRANSACTION, DELETE_TRANSACTION, deleteTransaction } from "./action"

const initialState = {
    transactions: []
}

const expenseTrackerReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
        case DELETE_TRANSACTION:
            return{
                ...state,
                transactions:state.transactions.filter((transaction)=> transaction.id !== action.payload),
                deleteTransaction: (id) => dispatchEvent(deleteTransaction(id))
            }
        default:return state;
    }
};
export default expenseTrackerReducer