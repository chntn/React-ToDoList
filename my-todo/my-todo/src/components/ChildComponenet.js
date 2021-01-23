import React, { Component } from 'react';

class ChildComponenet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'Chintan C'
          }
        console.log('ChildComponenet constructor');

    }

    static getDerivedStateFromProps(props, state) {
        console.log('ChildComponenet getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log("ChildComponenet componentDidMount");
    }

    shouldComponentUpdate() {
        console.log('ChildComponenet shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('ChildComponenet getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("ChildComponenet componentDidUpdate");
    }

    render() {

        console.log('ChildComponenet render');
        return (
            <div>
                <h2>Child Componenet {this.state.name}</h2>
            </div>
        );
    }
}

export default ChildComponenet;