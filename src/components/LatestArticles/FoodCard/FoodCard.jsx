import React from "react";
import "./FoodCard.css";

import { Box, Image, Heading, Text,Button } from "@chakra-ui/react";

const FoodCard = ({ title, id, img, description }) => {
  return (
    <Box
      p={{ base: "0 20px", md: "20px" }}
      borderRadius={{ base: "27px", md: "21px" }}
      className="card"
      display="flex"
      alignItems="center"
      h={{base:"484px",md:"554px"}}
      w={{ base: "271px", md: "381px" }}
      flexDirection="column"
      justifyContent={{ base: "space-evenly", md: "space-around" }}
    >
      <Box borderRadius={{ base: "27px", md: "21px" }}>
        <Image w={{ base: "204px", md: "326px" }} src={img} />
      </Box>
      
      <Box textAlign={{base:'center',md:"left"}}>
        <Heading style={{fontFamily:"var(--subtitle-font)"}} mb={{base:'20px', md:'0'}} className="heading" fontSize={{ base: "16px", md: "21px" }}>
          {title}
        </Heading>
        
        <Text 
        lineHeight="27px"
        overflowY="hidden"
          height={{md:"81px"}}
          w={{ base: "213px", md: "295px" }}
          textAlign={"left"}
          fontSize={{ base: "12px", md: "15px" }}
          className="p_fc"
          fontWeight="400"
        >
          {description}
        </Text>
        <br />
        <Button
        
        variant="outline"
          w={{ base: "118px", md: "132px" }}
          h={{ base: "26px", md: "42px" }}
          fontSize={{ base: "11px", md: "16px" }}
          
          border={{
            base: "2px solid rgba(66, 73, 97, 1)",
            md: "1px solid rgba(66, 73, 97, 1)",
          }}
          borderRadius={{md:"21px"}}
          className="card_button"
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default FoodCard;
