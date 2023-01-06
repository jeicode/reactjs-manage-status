import React from 'react'

import { CONSTANTS } from '../config'
const initialState = {
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
};
const actionTypes = {
    confirm: 'CONFIRM',
    delete: 'DELETE',
    error: 'ERROR',
    write: 'WRITE',
    reset: 'RESET',
    check: 'CHECK'
};

const reducerObject = (state, payload = undefined) => ({
    [actionTypes.confirm]: {
        ...state,
        error: false,
        loading: false,
        confirmed: true,
    },
    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false,
    },
    [actionTypes.write]: {
        ...state,
        value: payload
    },
    [actionTypes.check]: {
        ...state,
        loading: true,
    },
    [actionTypes.delete]: {
        ...state,
        deleted: true,
    },
    [actionTypes.reset]: {
        ...state,
        confirmed: false,
        deleted: false,
        value: '',
    },
});


const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type]; // new state component
    } else {
        return state;
    }
};

export default function useHandleStates() {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    console.log("entrooo")
    const onConfirm = () => dispatch({ type: actionTypes.confirm });
    const onError = () => dispatch({ type: actionTypes.error });
    const onCheck = () => dispatch({ type: actionTypes.check });
    const onDelete = () => dispatch({ type: actionTypes.delete });
    const onReset = () => dispatch({ type: actionTypes.reset });
    const onWrite = (value) => dispatch({ type: actionTypes.write, payload: value })
    
    React.useEffect(() => {
        if (state.loading) {
            setTimeout(() => {
                if (state.value === CONSTANTS.SECURITY_CODE) onConfirm();
                else onError();

            }, 1000);
        }

    }, [state.loading, onConfirm ]);


    return {
        onConfirm, onError,
        onCheck, onDelete,
        onReset, state, onWrite
    }

}
