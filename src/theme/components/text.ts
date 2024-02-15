import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const link = defineStyle({
  color: '#0C21C1',
  fontWeight: 700
})

const secondary = defineStyle({
  color: "#B5B5B5"
})

const formLabel = defineStyle({
  color: '#999999',
  fontWeight: '600',
  fontSize: 14
})

export const Text = defineStyleConfig({
  variants: {
    link,
    secondary,
    formLabel
  }
})
