
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter'
import privacySlice from './privacy'

const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer
    }
})


export default counterStore



/*
const counterReducer = (store = INITIAL_VALUE, action) => {
    let newStore = store
    if (action.type === "INCREAMENT") {
        newStore = { ...store, counter: store.counter + 1 }
    } else if (action.type === "DECREAMENT") {
        newStore = { ...store, counter: store.counter - 1 }
    } else if (action.type === "ADD") {
        newStore = { ...store, counter: store.counter + Number(action.payload.num) }
    } else if (action.type === "SUBTRACT") {
        newStore = { ...store, counter: store.counter - Number(action.payload.num) }
    } else if (action.type === "PRIVACY_TOGGLE") {
        newStore = { ...store, privacy: !store.privacy }
    }
    return newStore
}
*/