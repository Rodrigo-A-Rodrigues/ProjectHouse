import { Box, Flex, List, ListIcon, ListItem, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import * as fa from "react-icons/fa";

import Headling from "../Text";
import styles from './styles.module.scss';

export default function Footer() {
  return(
    <Box bg="black" color="white" w="100vw">
      <SimpleGrid columns={4} mx="auto" py="20" px="32" pb="10">
        <Box>
          <Headling align="left" mb="2rem">Produtos</Headling>
          <List spacing={5}>
            <ListItem>
              <ListIcon as={fa.FaRegQuestionCircle} color="green.500" />
              Dúvidas Gerais
            </ListItem>
            <ListItem>
              <ListIcon as={fa.FaRegMoneyBillAlt} color="green.500" />
              Preços
            </ListItem>
            <ListItem>
              <ListIcon as={fa.FaWrench} color="green.500" />
              Projetos sob medida
            </ListItem>
            <ListItem>
              <ListIcon as={fa.FaProjectDiagram} color="green.500" />
              Plantas baixas
            </ListItem>
          </List>
        </Box>
        <Box>
          <Headling align="left" mb="2rem">Company</Headling>
          <List spacing={5}>
            <ListItem>
              <ListIcon as={fa.FaBook} color="green.500" />
              Sobre nós
            </ListItem>
            <ListItem>
              <ListIcon as={fa.FaPhone} color="green.500" />
              Contato
            </ListItem>
          </List>
        </Box>
        <Box>
          <Headling align="left" mb="2rem">Legal</Headling>
          <List spacing={5}>
            <ListItem>
              <ListIcon as={fa.FaPaperclip} color="green.500" />
              Termos de Serviços
            </ListItem>
            <ListItem>
              <ListIcon as={fa.FaFingerprint} color="green.500" />
              Política de privacidade
            </ListItem>
            <ListItem>
              <ListIcon as={fa.FaCookie} color="green.500" />
              Política de Cookies
            </ListItem>
          </List>
        </Box>
        <Box>
          <Headling align="left" mb="2rem">Acompanhe</Headling>
          <List spacing={5}>
            <ListItem>
              <ListIcon as={fa.FaFacebookF} color="green.500" />
              Facebook
            </ListItem>
            <ListItem>
              <ListIcon as={fa.FaYoutube} color="green.500" />
              YouTube
            </ListItem>
            <ListItem>
              <ListIcon as={fa.FaInstagram} color="green.500" />
              Instagram
            </ListItem>
            <ListItem>
              <ListIcon as={fa.FaPinterest} color="green.500" />
              Pinterest
            </ListItem>
          </List>
        </Box>
      </SimpleGrid>
      <Box align="center">
        <Flex>
          <Box flex="1" bg="green.500" h="2px" mt="5" />
          <img src="./images/Logoproject.svg" className={styles.FooterLog}/>
          <Box flex="1" bg="green.500" h="2px" mt="5" />
        </Flex>
        <Text pb="10" color="gray.500">© 2021 Projetar Casas. All rights reserved.</Text>
      </Box>
    </Box>
  );
}