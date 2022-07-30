
import * as React from 'react';
import { Component } from 'react';

interface ListItemsProps {
    
}
 
interface ListItemsState {
    
}
 
class ListItems extends Component<ListItemsProps, ListItemsState> {
    state = {  }
    render() { 
        return ( <div>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>

        </div> );
    }
}
 
export default ListItems;