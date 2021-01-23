import React from 'react';
import './list-items.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move';

function ListItems(props) {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input type="text" id={item.key} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)
                }} />
                <span>

                    <FontAwesomeIcon onClick={() => {
                                props.deleteItem(item.key)
                            }} className="faicons" icon="trash" />
                </span>
            </p>

        </div>
    })
    return <div>
        {/* <FlipMove duration={300} easing="ease-in-out"> */}
        {listItems}
        {/* </FlipMove> */}

    </div>;
}

export default ListItems;