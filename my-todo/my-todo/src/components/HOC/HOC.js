
import React, { Component } from 'react';
import TableRowItem from "./TableRow";

const HOCComponenet = (WrappedComponent, data, heading) => {
    return class extends Component {

        constructor(props) {
            super(props);
            this.state = {
                data: data,
                heading: heading
            }
        }

        // componentDidUpdate(prevProps) {
        //     console.log('Current props: ', this.props);
        //     console.log('Previous props: ', prevProps);
        //   }

        tableRow = () => {
                    return (this.state.data.map((objectItems, objectKey) => {
                        return (<TableRowItem itemObject={objectItems} key={objectKey} ></TableRowItem>)
                    })
            );
        }

        render() {
            return (<WrappedComponent data={this.tableRow()} heading={this.state.heading}   />);
        }
    }
}

export default HOCComponenet