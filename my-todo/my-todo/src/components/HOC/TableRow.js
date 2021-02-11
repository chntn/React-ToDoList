import React, { Component } from 'react';

class TableRow extends Component {

    render() {

    // console.log(this.props);
        return (
            <tr>
                <td>{this.props.itemObject.id}</td>
                <td>{this.props.itemObject.name}</td>
                <td>{this.props.itemObject.type}</td>
            </tr>

        );
    }

}

export default TableRow;