const initialValue = {
    amount : 0,
}

export const BankReducer = (state = initialValue, {type,payload}) =>{
    switch(type){
        case 'deposit':
        return {amount : state.amount + payload};
        case 'withdraw':
        return {amount : state.amount - payload};
        case 'checkBalance':
        return state;
        default: 
        return state;
    }
}