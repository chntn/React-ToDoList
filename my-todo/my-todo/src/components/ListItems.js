import React from 'react';
import ListItemsStyles from './ListItemsStyle.module.css';

// import { trash } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { trash, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import fontawesome from '@fortawesome/fontawesome'
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { trash } from "@fortawesome/free-solid-svg-icons";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
class ListItems extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        console.log(this.props.items);
        // const this.props = {props}
        return (
            <ul className={ListItemsStyles.ListItemsUL}>{
                this.props.items.map(item => {
                    return (<li key={item.key}>

                        <input type="text" id={item.key} value={item.text} className={ListItemsStyles.AddToInput} onChange={(e) => {

                            this.props.updateToListItem(e.target.value, item.key)
                        }} />
                        <span>
                            <FontAwesomeIcon aria-label={`Delete the item`} className={ListItemsStyles.ListRemoveIcon} icon={faCoffee}
                                onClick={() => {
                                    window.confirm('Are you sure you wish to delete this item?') && this.props.deleteToListItem(item.key)
                                }}
                            />
                        </span>
                    </li>)
                })}
            </ul>
            // <li>{this.props.items}</li>
        )

    }
}

export default ListItems;