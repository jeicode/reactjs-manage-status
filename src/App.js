import React from 'react';
import { UseState } from './UseState.js';
import { UseReducer } from './UseReducer';
import { ClassState } from './ClassState.js';

import './App.css';

function App() {
  return (
    <div className="App">
      {/* <UseState name="Use State" /> */}
      <hr></hr>
      <UseReducer/>
      <hr></hr>
      {/* <ClassState name='Use Class State'/> */}
    </div>
  );
}

export default App;
