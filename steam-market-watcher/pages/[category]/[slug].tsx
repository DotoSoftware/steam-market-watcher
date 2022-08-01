import { Container, Flex, Heading, Spacer } from "@chakra-ui/react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Item from "../../components/item-details/itemDetail";

function Content() {
  return (
    <Container centerContent maxW="container.xl">
      <Header />
      <Spacer p={5} />
      <Heading as="h1">Welcome</Heading>
      <Spacer p={5} />
      <Flex width="full">
        <Item />
      </Flex>
      <Spacer p={5} />
      <Footer />
    </Container>
  );
}

export default Content;
