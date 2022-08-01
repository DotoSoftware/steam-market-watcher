import * as React from "react";
import { Component } from "react";
import Chart from "../chart/chart";
import {
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Heading,
  List,
  ListItem,
  ListIcon,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

interface ItemProps {}

interface ItemState {}

class Item extends Component<ItemProps, ItemState> {
  state = {};
  render() {
    return (
      <Box w="full">
        <Flex justifyContent="space-between" w="full">
          <Box>
            <Image src="/case-main.png" alt=""></Image>
          </Box>
          <Box>
            <Heading as="h1">Recoil Case</Heading>
            <Heading as="h3"></Heading>
            <Box>
              <List spacing={3}>
                <ListItem>
                  <CheckIcon />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                </ListItem>
                <ListItem>
                  <CheckIcon />
                  Assumenda, quia temporibus eveniet a libero incidunt suscipit
                </ListItem>
                <ListItem>
                  <CheckIcon />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
                <ListItem>
                  <CheckIcon />
                  Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                </ListItem>
              </List>
            </Box>
          </Box>
        </Flex>
        <Spacer p={5} />
        <Box>
          <Chart></Chart>
        </Box>
        <Spacer p={5} />
        <Box>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>
                Metric is updated based on manual trigger
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Price</Th>
                  <Th>Event</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>2022-20-02</Td>
                  <Td>20.04$</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>2022-20-10</Td>
                  <Td>18.04$</Td>
                  <Td>The International 11</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    );
  }
}

export default Item;
