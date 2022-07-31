import { Box, Flex, Image, Link } from "@chakra-ui/react";
import React, { Component } from "react";

interface ItemProps {
  number: Number;
}

interface ItemState {}

class Item extends Component<ItemProps, ItemState> {
  state = {};
  render() {
    const { number = 21 } = this.props;
    return (
      <Link href="/game-1/item-1">
        <Flex
          w="full"
          pt={2}
          pb={2}
          pe={4}
          alignItems="center"
          justifyContent="space-between"
          bg="rgba(0, 0, 0, 0.2)"
        >
          <Flex>
            <Box border="1px solid #3A3A3A" bg="#333333">
              <Image src="/case1.png" alt="case1"></Image>
            </Box>
            <Box pl={4}>
              <span>Item 1</span>
              <br />
              <span>CSGO</span>
            </Box>
          </Flex>
          <Box>
            <span>20.04$</span>
          </Box>
        </Flex>
      </Link>
    );
  }
}

export default Item;
