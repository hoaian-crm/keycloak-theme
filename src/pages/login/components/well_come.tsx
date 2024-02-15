import { Images } from "@/assets/images"
import { Box, Heading, Text } from "@chakra-ui/react"

export const WellCome = () => {
  return <Box bg="#000842" flex={1} padding={2} height="100%">
    <img src={Images.LoginCover} />
    <Heading color="white" as="h4" fontSize="24" marginTop="20">Sign in to development</Heading>
    <Text color="white" fontWeight="600" fontSize="14">Power by Relation C</Text>
  </Box>
}
