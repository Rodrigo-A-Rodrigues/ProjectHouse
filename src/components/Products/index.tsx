import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Headling from "../Text";
import Exemple from "./exemplo";

export default function ProductsExampler() {
  return (
    <Box mt="20" align="center">
      <Headling mb="2rem">Plantas em Destaque</Headling>

      <SimpleGrid columns={3} gap={5}>
        <Exemple />
        <Exemple />
        <Exemple />
        <Exemple />
        <Exemple />
        <Exemple />
      </SimpleGrid>

      <Button size="lg" bg="cyan.500" mt="5">Ver Mais+</Button>
    </Box> 
  );
}