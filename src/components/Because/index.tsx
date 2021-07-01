import { Box, Button, Flex, Img, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import React from "react";
import Headling from "../Text";


export default function Because() {
  return (
    <Flex py="20" position="relative" justify="space-around">
      <Box>
        <Img src="/products/banner.png" w="500px" />
      </Box>
      <Box zIndex="banner">
        <Headling mb="4" align="center">Como Funciona nossos projetos?</Headling>
        <Tabs align="end" variant="enclosed">
          <TabList>
            <Tab>Planta Baixa</Tab>
            <Tab>Projeto 3D</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Text maxW="400px" mb="10">
                A planta humanizada é como uma tradução da planta baixa para o cliente. O que muda é o layout! O termo planta 
                humanizada é praticamente usado no Brasil para oferecer clareza na linguagem visual utilizada no projeto arquitetônico 
                envolvendo o cliente na didática de um modelo de uma planta de fácil entendimento. É um esboço arquitetônico do 
                desenvolvimento de um projeto de construção que aproxima a comunicação com o cliente. Na prática da arquitetura, 
                a planta humanizada reflete o desenho técnico e as diversas etapas físicas do que foi projetado com riqueza de 
                detalhes incluindo mobiliário, paisagismo, efeitos de luz e sombra. É tornar real cada dimensão e proporção do projeto.
              </Text>
              <Button bg="teal.500" size="lg">Leia Mais+</Button>
            </TabPanel>
            <TabPanel>
              <Text maxW="400px" mb="10">
                Este software permite criar cenas animadas, fazer uma caminhada virtual dentro dos ambientes, adicionar efeitos visuais 
                como luminosidade — para estudos de posição do sol —, móveis, plantas, pessoas e outros componentes que já vem na vasta 
                galeria de recursos do programa.
              </Text>
              <Button bg="teal.500" size="lg">Leia Mais+</Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
}