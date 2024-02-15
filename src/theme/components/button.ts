import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solid = defineStyle({
  backgroundColor: "#0C21C1",
  borderRadius: 50,
  opacity: 0.9,
  color: 'white',
  fontWeight: 500,
  _hover: {
    opacity: 1,
    backgroundColor: "#0C21C2",
  }
})

export const Button = defineStyleConfig({
  variants: {
    solid
  }
})
