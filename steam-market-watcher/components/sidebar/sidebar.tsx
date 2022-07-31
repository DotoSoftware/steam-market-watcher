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
          bg="rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(49, 54, 58, 1), rgba(43, 46, 52, 1)) repeat scroll 0 0"
          color="white"
        >
          <Link href="/game-1">
            <Flex>
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
          bg="rgba(0, 0, 0, 0) linear-gradient(to bottom, rgba(49, 54, 58, 1), rgba(43, 46, 52, 1)) repeat scroll 0 0"
          color="white"
        >
          <Link href="/game-2">
            <Flex>
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
