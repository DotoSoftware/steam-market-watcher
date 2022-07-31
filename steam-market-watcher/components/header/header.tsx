import * as React from "react";
import { Component } from "react";
import { Image, Flex, Spacer } from "@chakra-ui/react";
import Navigation from "../nav/navigation";

interface HeaderProps {}

interface HeaderState {}

class Header extends Component<HeaderProps, HeaderState> {
  state = {};
  render() {
    return (
      <Flex width="full" justifyContent="space-between">
        <Image src="/logo_steam.svg" alt=""></Image>
        <Spacer />
        <Navigation />
      </Flex>
    );
  }
}

export default Header;
