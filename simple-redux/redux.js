const redux = require('redux')

const INITIAL_VALUE = {
    counter: 0
}

const reducer = (store = INITIAL_VALUE, action) => {
    let newValue = store;
    if (action.type === 'IINCREAMENT') {
        newValue = { counter: store.counter + 1} 
    } else if (action.type === 'DECREAMENT') {
        newValue = { counter: store.counter - 1} 
    } else if (action.type === 'ADDITION') {
        newValue = { counter: store.counter + action.payload.number} 
    }
    return newValue
}

const store = redux.createStore(reducer)

const subscriber = () => {
    const state = store.getState();
    console.log(state)
}

store.subscribe(subscriber)

store.dispatch({ type: 'IINCREAMENT' })
store.dispatch({ type: 'DECREAMENT' })
store.dispatch({ type: 'IINCREAMENT' })
store.dispatch({ type: 'ADDITION', payload: { number: 7}})
store.dispatch({ type: 'DECREAMENT' })
store.dispatch({ type: 'IINCREAMENT' })
