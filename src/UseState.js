import React from 'react';
import CheckForm from './components/home/CheckForm';
import ConfirmationDelete from './components/home/ConfirmationDelete';
import Delete from './components/home/Delete';

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    });
  };

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
    });
  };

  const onWrite = (newValue) => {
    setState({
      ...state,
      value: newValue,
    });
  }

  const onCheck = (e) => {
    e.preventDefault();
    setState({
      ...state,
      loading: true,
    });
  };

  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
    });
  };

  const onReset = () => {
    setState({
      ...state,
      confirmed: false,
      deleted: false,
      value: '',
    });
  };

  React.useEffect(() => {
    if (state.loading) {
      setTimeout(() => {
        if (state.value === SECURITY_CODE) onConfirm();
        else onError();
      }, 1500);
    }

  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <CheckForm state={state} name={name}
        onCheck={onCheck}
        onWrite={onWrite} />
    );
  }
  else if (state.confirmed && !state.deleted) return <ConfirmationDelete onDelete={onDelete} onReset={onReset}/>

  else return <Delete onReset={onReset} />;
  
}

export { UseState };
