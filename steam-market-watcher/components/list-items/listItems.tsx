import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import * as React from "react";
import { Component } from "react";
import Item from "../item/item";

interface ListItemsProps {
  items: any[];
}

interface ListItemsState {}

class ListItems extends Component<ListItemsProps, ListItemsState> {
  state = {};
  render() {
    const { items } = this.props;
    return (
      <Box minW="80%" p={4}>
        {items.map((item, index) => (
          <Item number={item} key={index} />
        ))}
      </Box>
    );
  }
}

export default ListItems;
