import Head from "next/head";
import * as React from "react";
import { Component } from "react";
import { Image } from "@chakra-ui/react";
import Navigation from "../nav/navigation";

interface HeaderProps {}

interface HeaderState {}

class Header extends Component<HeaderProps, HeaderState> {
  state = {};
  render() {
    return (
      <div>
        <div>
          <Image src="/favicon.ico"></Image>
        </div>
        <Navigation />
      </div>
    );
  }
}

export default Header;