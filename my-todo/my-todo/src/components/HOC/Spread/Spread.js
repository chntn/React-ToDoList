import React, { Component } from 'react';

class Spread extends Component {
    render() {

        const props = {firstName: 'Ben', lastName: 'Hector'};


        return (
            <div>
                    <Greeting {...props}></Greeting>
            </div>
        );
    }
}

export default Spread;


function App1() {
    return <Greeting firstName="Ben" lastName="Hector" />;
  }