import React from 'react';
import { Flex, Heading } from "@chakra-ui/react"
import { Images } from '@/assets/images';

export const Header: React.FC<any> = () => {
  return <Flex padding={2} gap={2} alignItems="center">
    <img src={Images.Logo} width="50"></img>
    <Heading as="h5" size="md">Relation C</Heading>
  </Flex>
}
