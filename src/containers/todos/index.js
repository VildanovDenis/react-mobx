import React from 'react';
import { observer } from 'mobx-react';

@observer
class ToDos extends React.PureComponent {
    render() {
        const { store } = this.props;
        return(
            <div className='todos wrapper'>
                <ul>
                    {store.map(item => <li key={item.id}>{item.content}</li>)}
                </ul>
            </div>
        )
    }
}

export default ToDos;