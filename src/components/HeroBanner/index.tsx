import { Box, Img } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

export default function HeroBanner() {
  return (
    <Box w="100vw">
      <Carousel itemsToShow={1} isRTL={false}>
          <Item><img src="./images/banner.jpg" /></Item>
          <Item><img src="./images/bannerX2.png" /></Item>
          <Item><img src="./images/bannerX3.jpg" /></Item>
          <Item><Img src="./images/bannerX4.jpg" objectFit="contain" /></Item>
        </Carousel>
    </Box>
  )
}