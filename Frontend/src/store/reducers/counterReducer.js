
const initialCounter = {
    count: 0,
}

export const counterReducer = (state = initialCounter, {type})=>{
    switch(type){
        case 'inc':
        return {count: state.count + 1};
        case 'dec':
        return {count: state.count - 1};
        default:
            return state;
    }
}