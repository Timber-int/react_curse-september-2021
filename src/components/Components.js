import React, {useReducer} from 'react';

import css from './Components.module.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1': {
            return {...state, count1: state.count1 + 1}
        }
        case 'increment2': {
            return {...state, count2: state.count2 + 1}
        }
        case 'increment3': {
            return {...state, count3: state.count3 + 1}
        }
        case 'decrement1': {
            return {...state, count1: state.count1 - 1}
        }
        case 'decrement2': {
            return {...state, count2: state.count2 - 1}
        }
        case 'decrement3': {
            return {...state, count3: state.count3 - 1}
        }
        case 'reset1': {
            return {...state, count1: action.payload}
        }
        case 'reset2': {
            return {...state, count2: action.payload}
        }
        case 'reset3': {
            return {...state, count3: action.payload}
        }
        default :
            throw new Error('Unknown action!');
    }
}

const Components = () => {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    return (
        <div className={css.container}>
            <div className={css.box}>
                <center><h4>{state.count1}</h4></center>
                <button style={{background: "green"}} onClick={() => dispatch({type: 'increment1'})}>Increment</button>
                <button style={{background: "red"}} onClick={() => dispatch({type: 'decrement1'})}>Decrement</button>
                <button style={{background: "orange"}} onClick={() => dispatch({type: 'reset1', payload: 0})}>Reset
                </button>
            </div>

            <div className={css.box}>
                <center><h4>{state.count2}</h4></center>
                <button style={{background: "green"}} onClick={() => dispatch({type: 'increment2'})}>Increment</button>
                <button style={{background: "red"}} onClick={() => dispatch({type: 'decrement2'})}>Decrement</button>
                <button style={{background: "orange"}} onClick={() => dispatch({type: 'reset2', payload: 1})}>Reset
                </button>
            </div>

            <div className={css.box}>
                <center><h4>{state.count3}</h4></center>
                <button style={{background: "green"}} onClick={() => dispatch({type: 'increment3'})}>Increment</button>
                <button style={{background: "red"}} onClick={() => dispatch({type: 'decrement3'})}>Decrement</button>
                <button style={{background: "orange"}} onClick={() => dispatch({type: 'reset3', payload: 3})}>Reset
                </button>
            </div>

        </div>
    );
};

export {Components};