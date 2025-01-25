import { combineReducers, createStore } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { BankReducer } from "./reducers/BankReducer";

// const persistConfig = {
//     key: 'root',
//     storage,
// }

const rootReducer = combineReducers({
    counter: counterReducer,
    bank : BankReducer,
})


// const persistedReducer = persistReducer(persistConfig, rootReducer)


export let store = createStore(rootReducer)
// export let persistor = persistStore(store)

