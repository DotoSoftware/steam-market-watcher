import type { NextPage } from "next";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ListItems from "../components/list-items/listItems";
import Sidebar from "../components/sidebar/sidebar";
import { Container, Flex, Heading, Spacer } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Container centerContent maxW="container.xl">
      <Header />
      <Spacer p={5} />
      <Heading as="h1">Welcome</Heading>
      <Spacer p={5} />
      <Flex width="full" h="80vh">
        <ListItems items={[1, 2, 3]} />
        <Spacer />
        <Sidebar />
      </Flex>
      <Footer />
    </Container>
  );
};

export default Home;
