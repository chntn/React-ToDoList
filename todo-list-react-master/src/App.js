import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './list-items'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      },
      count:null
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
  }


  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  }
  incrementCount() {
    // Note: this will *not* work as intended.
    // this.setState({count: this.state.count + 1});

    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {count: state.count + 1}
    });
    console.log(this.state.count);
  }
  

  updateCount() {
    // this.setState({count: this.state.count + 1});
    // this.setState((prevState, props) => {
    //   return { count: prevState.count + 1 }
    // });
  }
  handleSomething() {
    // Let's say `this.state.count` starts at 0.
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  
    // When React re-renders the component, `this.state.count` will be 1, but you expected 3.
  
    // This is because `incrementCount()` function above reads from `this.state.count`,
    // but React doesn't update `this.state.count` until the component is re-rendered.
    // So `incrementCount()` ends up reading `this.state.count` as 0 every time, and sets it to 1.
  
    // The fix is described below!
  }
  componentDidMount(){
    this.handleSomething();
   
  }
  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    this.setState({
      items: filteredItems
    })

  }


  setUpdate(text, key) {
    console.log("items:" + this.state.items);
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        console.log(item.key + "    " + key)
        item.text = text;
      }
    })
    this.setState({
      items: items
    })


  }
  render() {
    console.log(this.state.count);
    return (
      <div className="App">
        <header>
          <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter task" value={this.state.currentItem.text} onChange={this.handleInput}></input>
            <button type="submit">Add</button>
          </form>
          <p> asd{this.state.items.text}</p>
          <button
              onClick={() => this.updateCount()}
            >
              Clicked {this.state.count} times
            </button>
          <ListItems items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate} />

        </header>
      </div>
    );
  }
}


export default App;