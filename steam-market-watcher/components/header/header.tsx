import * as React from "react";
import { Component } from "react";
import { Image, Flex, Spacer, Link, Box } from "@chakra-ui/react";
import Navigation from "../nav/navigation";

interface HeaderProps {}

interface HeaderState {}

class Header extends Component<HeaderProps, HeaderState> {
  state = {};
  render() {
    return (
      <Flex width="full" justifyContent="space-between" alignItems="center">
        <Box>
          <Link>
            <Image src="/logo_steam.svg" alt=""></Image>
          </Link>
        </Box>
        <Spacer />
        <Navigation />
      </Flex>
    );
  }
}

export default Header;
