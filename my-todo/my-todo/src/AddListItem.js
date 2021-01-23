import{ Component } from 'react';
import ListItems from './components/ListItems';
import AddItemsStyles from './AddListItemsStyle.module.css';

import React, { useState } from "react"

const ExampleComponent = (() => {
  const [counter, setCounter] = useState()

  function handelArrowBtn(event) {
      console.log(event.keyCode);
    if (event.keyCode === 40) { //down arrow button
      setCounter(counter - 1)
    } else if (event.keyCode === 38) { // up arrow button
      setCounter(counter + 1)
    }
  }
// function handelArrowBtn(event) {
//     // event.persist()
//     if (event.keyCode === 40) { 
//         setCounter(counter - 1)
//      } else if (event.keyCode === 38) {
//         setCounter(counter + 1)
//      }
//    }
  console.log(counter);
  return (
    <div>
      <input
        type="number"
        value={counter}
        onKeyDown={handelArrowBtn}
       />
    </div>
  )

// return (
//     <div>
//       <input
//         type="number"
//         value={counter}
//         onKeyDown={(e) => handelArrowBtn(e.keyCode)}
//       />
//     </div>
//   )
})

export default ExampleComponent

// class AddListItem extends Component {

//     static ItemsArray = new Array();
//     constructor(props) {
//         super(props);
//         this.state = {
//             items: [],
//             inputIsBlank: false,
//             currentItem: {
//                 text: '',
//                 key: ''
//             },
//         }

//         //1.Bind in Class constructor()
//         //2.Bind with in the Render
//         //3. Using arrow function syntax.
//         //4. Binding Class property as Arrow function in Render and Using arrow function syntax.

//         //Binding Event Handlers, this purley js not the react
//         this._addToDoItem =  this._addToDoItem.bind(this);    //1. This binding is necessary to make `this` work in the callback _addToDoItem(){} 

//     }



//     _onChangeHandleInput = (e) => {

//         // const car = {
//         //     brand: 'Ford',
//         //     model: 'Fiesta',
//         //     start: function() {
//         //     //   console.log(`Started ${this.brand} ${this.model}`)
//         //     },
//         //     stop: () => {
//         //         // console.log(this.addToDoItem.car.model)
//         //         //this is not bound to the object instance. It points to what this points to in the outer scope
//         //       console.log(`Stopped ${this.brand} ${this.model}`)
//         //     }
//         //   }
//         //   console.log(car.start());
//         //   console.log(car.stop());

//         let me = {
//             name: "Ashutosh Verma",
//             thisInArrow: () => {
//                 console.log("My name is " + this.name); // no 'this' binding here 
//             },
//             thisInRegular() {
//                 console.log("My name is " + this.name); // 'this' binding works here 
//             }
//         };
//         me.thisInArrow();
//         me.thisInRegular();
//         // console.log(e.target.value);
//         e.preventDefault();
//         // this.setState = {
//         //     currentItem: {
//         //         text: e.target.value,
//         //         key: Date.now()
//         //     }
//         // }

//         this.setState({
//             currentItem: {
//                 text: e.target.value,
//                 key: Date.now()
//             }
//         })

//     }

//     //METHOD WITH BIND
//     //1
//     //2. This syntax ensures `this` is bound within handleClick.
//     //3
//     _addToDoItem(e) {
//         e.preventDefault();

//         const newItem = this.state.currentItem;

//     console.log(this.state.items);
//     console.log(...this.state.items);
//         if (newItem.text !== '') {
//             const items = [...this.state.items, newItem];
//             console.log(newItem);
//             console.log(items);
//             // this.ItemsArray.push({newItem});
//             // console.log(this.ItemsArray);
//             this.setState({
//                 // items: this.state.currentItem.text,
//                 items: items,
//                 currentItem: {
//                     text: '',
//                     key: ''
//                 },
//                 inputIsBlank: false

//             })
//             // this.setState({
//             //     values: this.state.currentItem.text
//             // })
//         } else {
//             this.setState({
//                 inputIsBlank: true
//             })
//         }
//     }
    
//     //ADD TASK INTO TO LIST
//       //4
    // _addToDoItem = (e) => {
    //     e.preventDefault();

//     //     const newItem = this.state.currentItem;

//     // console.log(this.state.items);
//     // console.log(...this.state.items);
//     //     if (newItem.text !== '') {
//     //         const items = [...this.state.items, newItem];
//     //         console.log(newItem);
//     //         console.log(items);
//     //         // this.ItemsArray.push({newItem});
//     //         // console.log(this.ItemsArray);
//     //         this.setState({
//     //             // items: this.state.currentItem.text,
//     //             items: items,
//     //             currentItem: {
//     //                 text: '',
//     //                 key: ''
//     //             },
//     //             inputIsBlank: false

//     //         })
//     //         // this.setState({
//     //         //     values: this.state.currentItem.text
//     //         // })
//     //     } else {
//     //         this.setState({
//     //             inputIsBlank: true
//     //         })
//     //     }
//     // }

//     //DELETE THE TASK FROM TO DO LIST ITEMS
//     _deleteToDoItem = (itemKey) => {
//         console.log("He", itemKey);

//         const filteredItems = this.state.items.filter(item =>
//             item.key !== itemKey);
//         this.setState({
//             items: filteredItems
//         })
//     }

//     //UPDATE THE TASK FROM TO DO LIST ITEMS
//     _updateToDoItem = (inputValue, itemKey) => {
//         if (inputValue !== '') {
//             const items = this.state.items;
//             items.map(item => {
//                 if (item.key === itemKey) {
//                     console.log(item.key + "    " + itemKey)
//                     item.text = inputValue;
//                 }
//             })
//             this.setState({
//                 items: items
//             })
//         } 
//     }

//     //NOT THE FUNCTION CALL
//      deleteRow() {
//             console.log("deleteRow CALLERD");
//     }
//     render() {
//         console.log(this.state);
//         //Binding Event Handlers
//         // const element = <div tabIndex="0"></div>;
//         //WITH JSX YOU CAN PASS A FUNCTION AS THE EVENT HANDLEER RATHER THEN STRING // onClick={this._addToDoItem}
//         //WE WANT TO BE HANLER A FUNCTION  => this._addToDoItem  NOT THE FUNCTION CALL  =>  this._addToDoItem()
//         return (
//             <div className={AddItemsStyles.AddListItemWrapper}>
//                 <div className={AddItemsStyles.AddListItemInnerWrapper}>
//                     <h1>React To Do List</h1>
//                     <form>
//                         <input type="text" placeholder="Add task.." value={this.state.currentItem.text} onChange={(e) => this._onChangeHandleInput(e)} className={AddItemsStyles.AddToInput} />
//                         {/* <button className={AddItemsStyles.AddBtnStyle} onClick={this._addToDoItem}>Add the Task</button> */} {/*1* Bind in class constructor()/}
//                         {/* <button className={AddItemsStyles.AddBtnStyle} onClick={this._addToDoItem.bind(this)}>Add the Task</button> */}  {/*2* you can use class fields to correctly bind callbacks, binding in render method*/} 
                      
//                         {/* <button className={AddItemsStyles.AddBtnStyle} onClick={(e) => this._addToDoItem(e)}>Add the Task</button>  3* If you aren’t using class fields syntax, you can use an arrow function in the callback:, calling event handler and retruning, arrow function in render method */}
                        <button className={AddItemsStyles.AddBtnStyle} onClick={this._addToDoItem}>Add the Task</button>  {/*4* class property as Arrwo function */}
//                     </form>

//                     <button onClick={this.deleteRow()}>Delete Row</button>
// {/* Passing Arguments to Event Handlers

//                     <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>

//                     <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button> */}

//                     {this.state.inputIsBlank === true && <span className={AddItemsStyles.AddErrorMsg}>Required field!!</span>}
//                 </div>
//                 <ListItems items={this.state.items} deleteToListItem={this._deleteToDoItem} updateToListItem={this._updateToDoItem}></ListItems>
//             </div>
//         )
//     }


// }

// export default AddListItem;