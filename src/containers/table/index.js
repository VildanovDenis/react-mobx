import React from 'react';
import { observer } from 'mobx-react';

@observer
class Table extends React.PureComponent {

    onAddDeveloperClick = () => {
        const name = prompt('Введите имя разработчика');
        const sp = prompt('Введите количество выполненных задач');
        const developer = {
            name,
            sp
        };
        console.log(developer);
        this.props.store.addDeveloper(developer);
    };

    clearTable = () => {
        this.props.store.clearList();
    }

    onFilterChange = ({ target: { value } }) => {
        this.props.store.updateFilter(value);
    }

    render() {
        const { store } = this.props;

        return (
            <div className='wrapper'>
                <button type='button' onClick={this.onAddDeveloperClick}>
                    add developer
                </button>
                <button type='button' onClick={this.clearTable}>
                    clear table
                </button>
                <input type='text' value={store.filter} onChange={this.onFilterChange} />
                <table>
                    <thead>
                        <tr>
                            <th>
                                Name:
                            </th>
                            <th>
                                Story point:
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            store.filteredDevelopers.map(dev => (
                                <tr>
                                    <td>{dev.name}</td>
                                    <td>{dev.sp}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                Team SP
                            </td>
                            <td>
                                {store.totalSum}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                TOP PERFORMER
                            </td>
                            <td>
                                {store.topPerfomer}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default Table;