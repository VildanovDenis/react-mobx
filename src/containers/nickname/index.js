import React from 'react';
import { observer } from 'mobx-react';

@observer
class Nickname extends React.PureComponent {
    handleIncrement = () => this.props.store.increment();
    handleDecrement = () => this.props.store.decrement();

    render() {
        const { store } = this.props;
        return(
            <div className='wrapper nickname'>
                <h2>{store.age}</h2>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrement}>-</button>
                <h3>{store.nickName}</h3>
            </div>
        )
    }
};

export default Nickname;