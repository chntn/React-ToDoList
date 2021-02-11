// import logo from './logo.svg';
import './App.css';
import UserList from './components/HOC/UserList';
import EmployeeList from './components/HOC/EmployeeList';
import HOCComponenet from './components/HOC/HOC';
// import AddListItem from './AddListItem';
// import ExampleComponent from './components/ParentComponent';

function App() {

  const userListArray = [
    { "id": 1, "name": "Chintan", "type": "User" },
    { "id": 2, "name": "Nayan", "type": "User" },
    { "id": 3, "name": "Ranjit", "type": "User" },
  ]


  const employeeListArray = [
    { "id": 1, "name": "Rama", "type": "Employee" },
    { "id": 2, "name": "Dhanshree", "type": "Employee" },
    { "id": 3, "name": "karan", "type": "Employee" },
  ]


  const UserListHOC = HOCComponenet(UserList, userListArray, "UserList Componenet");
  const EmployeeListHOC = HOCComponenet(EmployeeList, employeeListArray, "EmployeeList Componenet");

  return (
    <div className="App">
      {/* <AddListItem/> */}

      {/* <UserList></UserList> */}
      {/* <EmployeeList></EmployeeList> */}
      <UserListHOC></UserListHOC>
      <EmployeeListHOC></EmployeeListHOC>
      {/* <ExampleComponent /> */}
    </div>
  );
}

export default App;
