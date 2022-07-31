import { Link, Flex, Box } from "@chakra-ui/react";
import * as React from "react";
import { Component } from "react";

interface NavigationProps {}

interface NavigationState {}

class Navigation extends Component<NavigationProps, NavigationState> {
  state = {};
  render() {
    return (
      <Flex align="center" justify="space-between" p={5}>
        <Flex>
          <Box p={10}>
            <Link href="/">Home</Link>
          </Box>
          <Box p={10}>
            <Link href="/about">About</Link>
          </Box>
          <Box p={10}>
            <Link href="/contact">Contact</Link>
          </Box>
        </Flex>
      </Flex>
    );
  }
}

export default Navigation;
