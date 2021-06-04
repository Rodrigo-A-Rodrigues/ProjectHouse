import { Badge, Box, Icon, Image, SimpleGrid } from "@chakra-ui/react";
import { FaBath, FaBed, FaCar, FaHome } from 'react-icons/fa'
import React from "react";

export default function Exemple() {
  const property = {
    imageUrl: "https://bit.ly/2Z4KKcF",
    imageAlt: "Rear view of modern home with pool",
    pool: "12x30",
    garage: 2,
    beds: 3,
    baths: 2,
    title: "Modern home",
  }

  return(
    <Box 
      maxW="sm" 
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      _hover={{
        boxShadow:"dark-lg", 
        rounded:"md", 
        bg:"white"
      }}
    >
      <Image src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline" mb="1">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            ml="2"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title}
          </Box>
        </Box>
        <SimpleGrid columns={4}>
          <Box><Icon as={FaHome} /></Box>
          <Box><Icon as={FaBed} /></Box>
          <Box><Icon as={FaBath} /></Box>
          <Box><Icon as={FaCar} /></Box>

          <Box>{property.pool}</Box>
          <Box>{property.beds}</Box>
          <Box>{property.baths}</Box>
          <Box>{property.garage}</Box>

        </SimpleGrid>
      </Box>
    </Box>
  )
}