import { Flex, Img, Text } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Flex mt="5">
      <Img src="./images/Logoproject.svg" w="90px" />
      <Text ml="2" fontSize="2xl" fontWeight="bold" mt="-1">Projetar <Text mt="-2" fontSize="md">Casas.</Text></Text>
    </Flex>
  );
}