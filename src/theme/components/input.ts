import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { theme } from "@chakra-ui/react";

export const underline = defineStyle({
  field: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#999999',
    borderRadius: 0,
    _focus: {
      borderBottomColor: 'black',
    }
  }
})

export const Input = defineStyleConfig({
  variants: {
    underline
  }
})
