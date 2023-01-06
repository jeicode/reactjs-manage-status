import React from 'react';
import CheckForm from './components/home/CheckForm';
import ConfirmationDelete from './components/home/ConfirmationDelete';
import Delete from './components/home/Delete';
import useHandleStates from './hooks/useHandleStates';


function UseReducer() {

  const {state, onCheck, onWrite, onReset, onDelete} = useHandleStates()
  
  if (!state.deleted && !state.confirmed) {
    return <CheckForm onCheck={onCheck} state={state} onWrite={onWrite}/>
  } 
  
  else if (state.confirmed && !state.deleted) {
    return <ConfirmationDelete onDelete={onDelete} onReset={onReset}/>
  } 
  
  return <Delete onReset={onReset} />

}


export { UseReducer };
