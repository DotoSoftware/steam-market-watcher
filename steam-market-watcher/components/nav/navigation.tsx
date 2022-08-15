import {
  Link,
  Flex,
  useColorMode,
  useColorModeValue,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import * as React from "react";

import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Navigation() {
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon);
  const { toggleColorMode: toggleMode } = useColorMode();
  return (
    <Flex align="center" justify="space-between" p={5}>
      <Flex>
        <HStack spacing="5" ms={5} display={{ base: "none", md: "flex" }}>
          <Link href="/">Home</Link>
        </HStack>
        <HStack spacing="5" ms={5} display={{ base: "none", md: "flex" }}>
          <Link href="/about">About</Link>
        </HStack>
        <HStack spacing="5" ms={5} display={{ base: "none", md: "flex" }}>
          <Link href="/contact">Contact</Link>
        </HStack>
        <HStack spacing="5" ms={5}>
          <IconButton
            size="md"
            fontSize="lg"
            aria-label={`Switch to ${text} mode`}
            ml={{ base: "0", md: "3" }}
            onClick={toggleMode}
            icon={<SwitchIcon />}
          />
        </HStack>
      </Flex>
    </Flex>
  );
}

export default Navigation;
