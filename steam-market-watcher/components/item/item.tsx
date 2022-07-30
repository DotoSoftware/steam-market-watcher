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
} from "@chakra-ui/react";

interface ItemProps {}

interface ItemState {}

class Item extends Component<ItemProps, ItemState> {
  state = {};
  render() {
    return (
      <div>
        <div>
          <div>
            <Image src=""></Image>
          </div>
          <div>
            <h1>Item Name</h1>
          </div>
        </div>
        <div>
          <Chart></Chart>
        </div>
        <div>
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
        </div>
      </div>
    );
  }
}

export default Item;
