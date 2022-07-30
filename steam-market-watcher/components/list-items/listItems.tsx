import { Link } from "@chakra-ui/react";
import * as React from "react";
import { Component } from "react";

interface ListItemsProps {}

interface ListItemsState {}

class ListItems extends Component<ListItemsProps, ListItemsState> {
  state = {};
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link href="/game-1/item-1">Item 1</Link>
          </li>
          <li>
            <Link href="/game-2/item-2">Item 2</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ListItems;
