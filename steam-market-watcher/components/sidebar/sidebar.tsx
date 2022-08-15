import React, { Component } from "react";
import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
interface Props {}

interface State {}

class Sidebar extends Component<Props, State> {
  render() {
    return (
      <Box minW="20%">
        <Box
          mt={4}
          p={2}
          pl={5}
          bg="rgba(0, 0, 0, 0) linear-gradient(to bottom, rgb(56 97 128), rgb(204 204 204)) repeat scroll 0 0"
          color="white"
          borderRadius={30}
          
          boxShadow="0px 2px 3px 1px #344d61"
        >
          <Link href="/game-1"  >
            <Flex alignItems="center">
              <Box>
                <Image src="/csgo.jpg" alt=""></Image>
              </Box>
              <Text ml={2}>Csgo</Text>
            </Flex>
          </Link>
        </Box>
        <Box
          mt={4}
          p={2}
          pl={5}
          bg="rgba(0, 0, 0, 0) linear-gradient(to bottom, rgb(56 97 128), rgb(204 204 204)) repeat scroll 0 0"
          color="white"
          borderRadius={30}
          
          boxShadow="0px 2px 3px 1px #344d61"
        >
          <Link href="/game-2">
            <Flex  alignItems="center">
              <Box>
                <Image src="/dota.jpg" alt=""></Image>
              </Box>
              <Text ml={2}>Dota</Text>
            </Flex>
          </Link>
        </Box>
      </Box>
    );
  }
}

export default Sidebar;
