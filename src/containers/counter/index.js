import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

@observer
class Counter extends React.PureComponent {
    handleIncrement = () => this.props.store.increment();
    handleDecrement = () => this.props.store.decrement();

    render() {
        return (
            <div className='counter'>
                <h2>{this.props.store.count}</h2>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
            </div>
        )
    }
}

export default Counter;