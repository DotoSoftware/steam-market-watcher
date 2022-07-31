import { Box, Flex, FormControl, Input } from "@chakra-ui/react";
import * as React from "react";
import { Component } from "react";
import { SearchIcon } from "@chakra-ui/icons";

interface SearchSidebarProps {}

interface SearchSidebarState {}

class SearchSidebar extends Component<SearchSidebarProps, SearchSidebarState> {
  state = {};
  render() {
    return (
      <Box p={4}>
        <Flex>
          <FormControl>
            <Input type="text"></Input>
            <SearchIcon />
          </FormControl>
        </Flex>
      </Box>
    );
  }
}

export default SearchSidebar;
