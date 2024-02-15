import { router } from "./pages"
import { RouterProvider } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import { theme } from "./theme";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloack from "./constants/keycloack";

function App() {

  return (
    <ChakraProvider theme={theme}>
      <ReactKeycloakProvider authClient={keycloack}>
        <RouterProvider router={router} />
      </ReactKeycloakProvider>
    </ChakraProvider>
  )
}

export default App
