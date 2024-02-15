import { RouteObject } from "react-router-dom"
import { Flex } from "@chakra-ui/react";
import { Header } from "./components/header";
import { LoginForm } from "./components/login_form";
import { WellCome } from "./components/well_come";

const Page = () => {
  return <Flex direction="column" height="100%">
    <Header />
    <Flex
      alignItems="center" justifyContent="center"
      maxWidth={1200} marginX="auto"
      marginTop={30}
      boxShadow="md"
      borderRadius="lg"
      borderWidth={1}
      overflow="hidden"
    >
      <LoginForm />
      <WellCome />
    </Flex>
  </Flex>
}

export default {
  path: '/login',
  element: <Page />
} as RouteObject;
