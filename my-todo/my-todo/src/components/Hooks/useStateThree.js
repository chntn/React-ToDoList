import React, { useState } from 'react'

function HookCounterThree() {


  const [itemName, setItemName] = useState("");

  const [password, setPassword] = useState("");

  const [items, setItems] = useState([]);

  const _addToDoItem = (e) => {
    e.preventDefault();

    setItems([
      ...items,
      {
        id: items.length,
        name: itemName,
        password: password
      }

    ]);

    //CLEAR THE SAVE VALUE
    setItemName("");
    setPassword("");
  }

	
    return (
		<form>
			 <br />
      User Typed Input name : {itemName}
      <br/>
      User Typed Password : {password}
      <form>

        <label>

          <br />
          Username:
          <input
            name="item"
            type="text"
            value={itemName}
            onChange={e => setItemName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
        <input
            value={password}
            onChange={event => setPassword(event.target.value)}
            name="password"
            type="password"
          />
        </label>
        <button onClick={(e) => _addToDoItem(e)}>Add the Task</button>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name} -{item.password}</li>
        ))}
      </ul>

		</form>
	)
}

export default HookCounterThree