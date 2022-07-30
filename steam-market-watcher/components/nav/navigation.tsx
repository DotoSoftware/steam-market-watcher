import * as React from 'react';
import { Component } from 'react';

interface NavigationProps {
    
}
 
interface NavigationState {
    
}
 
class Navigation extends Component<NavigationProps, NavigationState> {
    state = {  }
    render() { 
        return (<nav>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </nav> );
    }
}
 
export default Navigation;