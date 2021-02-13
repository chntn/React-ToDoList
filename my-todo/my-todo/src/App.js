// import logo from './logo.svg';
import "./App.css";
// import UserList from './components/HOC/UserList';
// import EmployeeList from './components/HOC/EmployeeList';
// import HOCComponenet from './components/HOC/HOC';
// import AddListItem from './AddListItem';
// import ExampleComponent from './components/ParentComponent';

import React, { useState, useEffect } from 'react';
// import CounterComp from './components/Hooks/useState';
// import HookCounterTwo from './components/Hooks/useStateTwo';
// import IntervalClassCounter from './components/Hooks/useStateThree';
// import ParentComponenet from './components/ParentComponent';
// import DataFetching from './components/Hooks/DataFetching';

import ComponentC from "./components/Context/ComponentC";

export const UserContext = React.createContext();
export const LastNameContext = React.createContext();

function App() {
  // const [count, setCount] = useState(0);
  // let initialCount = 0;

  // const [count, setCount] = useState(initialCount);

  // // Similar to componentDidMount and componentDidUpdate:

  // // if(count!==''){
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });
  // // }

  // const userListArray = [
  //   { "id": 1, "name": "Chintan", "type": "User" },
  //   { "id": 2, "name": "Nayan", "type": "User" },
  //   { "id": 3, "name": "Ranjit", "type": "User" },
  // ]

  // const employeeListArray = [
  //   { "id": 1, "name": "Rama", "type": "Employee" },
  //   { "id": 2, "name": "Dhanshree", "type": "Employee" },
  //   { "id": 3, "name": "karan", "type": "Employee" },
  // ]

  // const UserListHOC = HOCComponenet(UserList, userListArray, "UserList Componenet");
  // const EmployeeListHOC = HOCComponenet(EmployeeList, employeeListArray, "EmployeeList Componenet");

  return (
    <div className="App">
      <div>
        {/* <p>You clicked {count} times</p><br />
        Count: {count}
        <br />
        <button onClick={() => setCount(count + 1)}>
          Click me
      </button> */}
        {/* <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button> */}
      </div>

      {/* <HookCounterTwo></HookCounterTwo> */}
      {/* <IntervalClassCounter></IntervalClassCounter> */}
      {/* <CounterComp initialCount={count} ></CounterComp> */}
      {/* <AddListItem/> */}

      {/* <UserList></UserList> */}
      {/* <EmployeeList></EmployeeList> */}
      {/* <UserListHOC></UserListHOC> */}
      {/* <EmployeeListHOC></EmployeeListHOC> */}
      {/* <ExampleComponent /> */}

      {/* <ParentComponenet></ParentComponenet> */}
      {/* <DataFetching></DataFetching> */}

      <UserContext.Provider value={"Chintan"}>
        <LastNameContext.Provider value={"Upadhayay"}>
          <ComponentC />
        </LastNameContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
