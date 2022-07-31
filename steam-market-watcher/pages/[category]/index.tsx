import { Container, Flex, Heading, Spacer } from "@chakra-ui/react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import ListItems from "../../components/list-items/listItems";
import SearchSidebar from "../../components/search-sidebar/searchSidebar";

function Category() {
  return (
    <Container centerContent maxW="container.xl">
      <Header />
      <Spacer p={5} />
      <Heading as="h1">Welcome</Heading>
      <Spacer p={5} />
      <Flex width="full" h="80vh">
        <ListItems items={[]} />
        <Spacer />
        <SearchSidebar />
      </Flex>
      <Footer />
    </Container>
  );
}

export default Category;
