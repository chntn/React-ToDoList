import logo from './logo.svg';
import './App.css';
// import AddListItem from './AddListItem';
import ExampleComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <AddListItem/> */}
      <ExampleComponent></ExampleComponent>
    </div>
  );
}

export default App;
