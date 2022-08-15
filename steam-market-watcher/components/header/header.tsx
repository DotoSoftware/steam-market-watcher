import * as React from "react";
import { Component } from "react";
import { Image, Flex, Spacer, Link } from "@chakra-ui/react";
import Navigation from "../nav/navigation";

interface HeaderProps {}

interface HeaderState {}

class Header extends Component<HeaderProps, HeaderState> {
  state = {};
  render() {
    return (
      <Flex width="full" justifyContent="space-between" alignItems="center">
        <Flex align="center" pt={5}>
          <Link href="/">
            <Image
              src="/s-market-watcher-logo.png"
              alt="s-market-watcher-logo"
              display={{ base: "none", md: "block" }}
            />
          </Link>
        </Flex>
        <Spacer />
        <Navigation />
      </Flex>
    );
  }
}

export default Header;
