
import React, { Component } from "react";
import { Link } from "@chakra-ui/react";
interface Props {}

interface State {}

class Sidebar extends Component<Props, State> {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link href="/game-1"> game 1</Link>
          </li>
          <li>
            <Link href="/game-2">game 2</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
