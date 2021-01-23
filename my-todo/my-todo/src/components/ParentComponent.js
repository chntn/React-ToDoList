import React, { Component } from 'react';

import ChildComponenetData from "./ChildComponenet";

class ParentComponenet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Chintan P'
        }

        console.log('ParentComponenet constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('ParentComponenet getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log("ParentComponenet componentDidMount");
    }

    shouldComponentUpdate() {
        console.log('ParentComponenet shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('ParentComponenet getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("ParentComponenet componentDidUpdate");
    }

    changeState = () => {
        this.setState({
            name: 'Chintan Change P'
        })
    }

    render() {

        console.log('ParentComponenet render');

        return (    
            <>
                <h1>Parent Component {this.state.name}</h1> <br/>
                <button onClick={this.changeState}>Change state</button>
                <ChildComponenetData></ChildComponenetData>
            </>

        )
    }

}

export default ParentComponenet;