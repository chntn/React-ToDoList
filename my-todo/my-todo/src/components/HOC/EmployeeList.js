import React, { Component } from "react";
// import TableRow from "./TableRow";

class EmployeeList extends  Component {

    constructor (props){
        super(props);

        // this.state = {
        //     employeeList :[
        //         { "id": 1, "name": "Rama", "type": "Employee" },
        //         { "id": 2, "name": "Dhanshree", "type": "Employee" },
        //         { "id": 3, "name": "karan", "type": "Employee" },
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
                        <td>Name</td>
                        <td>Employee Type</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.data}

                    {/* {
                        this.props.data.map((employeeItems,employeeKey)=> {
                           return( <TableRow itemObject={employeeItems}  key={employeeKey} ></TableRow>)
                        })
                    } */}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default EmployeeList;