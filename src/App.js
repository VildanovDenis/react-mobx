import React from 'react';
import { observable, computed, extendObservable, configure, action } from 'mobx';

import Counter from './containers/counter';
import Nickname from './containers/nickname';

import './App.css';
import ToDos from './containers/todos';

configure({ enforceActions: 'observed' });
/**
 * Simple counter store
 */
const counterState = observable({
  count: 0,  
  increment () {
    this.count++
  },
  decrement() {
    this.count--
  },
}, {
  increment: action('Counter plus one'),
  decrement: action('Counter minus one'),
});

/**
 * Simple user nickname store with using observable object
 */
const nickNameState = observable({
  firstName: 'Denis',
  age: 25,

  get nickName() {
    console.log('generate usernickname');
    return `${this.firstName}${this.age}`
  },
  
  increment() {
    this.age++
  },

  decrement() {
    this.age--
  }
}, {
  increment: action('Update user age ++'),
  decrement: action('Update user age --')
});

const todos = observable([
  {
    content: 'learn react',
    id: 1
  },
  {
    content: 'learn redux',
    id: 2
  },
  {
    content: 'learn mobx',
    id: 3
  }
])

// nickNameState.increment = function() {
//   this.age++
// };
// nickNameState.decrement = function() {
//   this.age--
// };

function App() {
  return (
    <div className="App">
      <Counter store={counterState} />
      <Nickname store={nickNameState}/>
      <ToDos store={todos} />
    </div>
  );
}

export default App;
