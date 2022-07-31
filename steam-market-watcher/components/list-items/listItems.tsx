import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import * as React from "react";
import { Component } from "react";

interface ListItemsProps {}

interface ListItemsState {}

class ListItems extends Component<ListItemsProps, ListItemsState> {
  state = {};
  render() {
    return (
      <Box minW="80%" p={4}>
        <Link href="/game-1/item-1">
          <Flex
            w="full"
            pt={2}
            pb={2}
            pe={4}
            alignItems="center"
            justifyContent="space-between"
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
      </Box>
    );
  }
}

export default ListItems;
