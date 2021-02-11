import React, { Component } from 'react';
// import TableRow from './TableRow';

class UserList extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     userListArray: [
        //         { "id": 1, "name": "Chintan", "type": "User" },
        //         { "id": 2, "name": "Nayan", "type": "User" },
        //         { "id": 3, "name": "Ranjit", "type": "User" },
        //     ]
        // }
    }


    render() {
        return (
            <div>
                 {this.props.heading}
                <table style={{margin: "0 auto", border: "1px solid"}}>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>User Name</td>
                            <td>Type</td>
                        </tr>
                    </thead>
                    <tbody>

                        {this.props.data}
                        {/* {
                            this.props.data.map((userItems, userKey) => {
                                return (
                                    <TableRow itemObject={userItems} key={userKey} ></TableRow>
                                )
                            })
                        } */}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default UserList;