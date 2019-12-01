import React from 'react';
import { observable } from 'mobx';

import Counter from './containers/counter';

import './App.css';

const counterState = observable({
  count: 0
});
  
counterState.increment = function() {
  this.count++
};
counterState.decrement = function() {
  this.count--
}

function App() {
  return (
    <div className="App">
      <Counter store={counterState} />
    </div>
  );
}

export default App;
