import React from 'react';
import { observable, computed, configure, action, decorate } from 'mobx';

import Counter from './containers/counter';
import Nickname from './containers/nickname';
import ToDos from './containers/todos';
import Table from './containers/table';

import './App.css';

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

class Store {
  devList = [
    {
      name: 'Denis',
      sp: 8
    },
    {
      name: 'Alex',
      sp: 10
    },
    {
      name: 'Anatoliy',
      sp: 11
    }
  ];
  filter = '';

  get totalSum() {
    return this.devList.reduce((acc, { sp }, _) => acc += sp, 0);
  };

  get topPerfomer() {
    const maxSpDeveloper = this.devList.reduce((acc, item, _) => {
      return acc.sp < item.sp ? acc = item : acc;
    }, {
      name: '',
      sp: 0
    });

    return maxSpDeveloper.name
    // const maxSp = Math.max(...this.devList.map(({ sp }) => sp));
    // return this.devList.find(({ sp, name }) => {
    //   if (maxSp === sp) {
    //     return name
    //   } else {
    //     return ''
    //   }
    // });
  };

  get filteredDevelopers() {
    const matchesFilter = new RegExp(this.filter, 'i');
    return this.devList.filter(({ name }) => !this.filter || matchesFilter.test(name));
  }

  clearList() {
    this.devList = [];
  };

  addDeveloper(developer) {
    this.devList.push(developer);
  };

  updateFilter(value) {
    this.filter = value
  }
}

decorate(Store, {
  devList: observable,
  filter: observable,
  totalSum: computed,
  topPerfomer: computed,
  filteredDevelopers: computed,
  clearList: action,
  addDeveloper: action,
  updateFilter: action
});
// nickNameState.increment = function() {
//   this.age++
// };
// nickNameState.decrement = function() {
//   this.age--
// };

const devStore = new Store();

function App() {
  return (
    <div className="App">
      <Counter store={counterState} />
      <Nickname store={nickNameState}/>
      <ToDos store={todos} />
      <Table store={devStore} />
    </div>
  );
}

export default App;
