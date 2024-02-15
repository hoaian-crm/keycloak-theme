import { Icons } from '@/assets/icons'
import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react"
import { useKeycloak } from '@react-keycloak/web'
import { useState } from 'react'

export const LoginForm = () => {

  const [formValue, setFormValue] = useState({
    username: "",
    password: ""
  })

  const { keycloak } = useKeycloak();

  const onChange = (e: any) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  }

  return <Box flex={1} padding={5} height="100%">
    <Heading as="h4" size="lg" fontSize={24}>Sign In</Heading>
    <Text marginTop={2}>If you don't have an account register</Text>
    <Text marginTop={2}>You can <Text as="span" variant="link">Register here!</Text></Text>

    <form onChange={onChange} onSubmit={(e) => {
      keycloak.login()
        .then(response => console.log(response))
        .catch(error => console.error(error))
      e.preventDefault()
    }}>
      <FormControl marginTop={10}>
        <Text variant="formLabel">
          User Name
        </Text>
        <InputGroup>
          <InputLeftElement><Icons.User /></InputLeftElement>
          <Input
            placeholder="Enter your email address" variant="underline"
            name="username"
            isRequired
          />
        </InputGroup>
      </FormControl>

      <FormControl marginTop={5}>
        <FormLabel>
          <Text variant="formLabel">
            Password
          </Text>
        </FormLabel>
        <InputGroup>
          <InputLeftElement><Icons.Password /></InputLeftElement>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password" variant="underline"
            isRequired
          />
        </InputGroup>
      </FormControl>

      <Flex marginTop="5" justifyContent="space-between">
        <Checkbox>
          <Text fontSize="14">
            Remember me
          </Text>
        </Checkbox>
        <Text fontSize="14" variant="link">Forgot Password ?</Text>
      </Flex>

      <Flex direction="column" marginTop="10" alignItems="center">
        <Button
          type="submit" width="100%" size="md"
        >Login</Button>
        <Text variant="secondary" marginY="5">or continue with</Text>
        <Flex gap={5}>
          <Icons.Facebook />
          <Icons.Apple />
          <Icons.Google />
        </Flex>
      </Flex>

    </form>

  </Box>
}
