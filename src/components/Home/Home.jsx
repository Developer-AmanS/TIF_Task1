import React from "react";
import "./Home.css";

import { Box, Image, Button, Heading, Text } from "@chakra-ui/react";
import Logo from "../../assets/foodtruck.png";
import Pizza from "../../assets/pizza.png";
import vector from "../../assets/Vector 1.png";

const Home = () => {
  return (
    <Box 
      position={{base:"relative"}}
      w="100%"
      minH="804px"
      display={"flex"}
      flexDirection={{ base: "column", md: "row" }}
      justifyContent={{ md: "space-between" }}
      
    >
      <Box 

        position={{base:"absolute",md:"relative"}}
        bottom={{base:'40%',md:"none"}}
        
        display={{ md: "flex" }}
        placeItems={{ base: "flex-end", md: "flex-start" }}
        w={{ base: "100%", md: "50%" }}
        flexDirection="column"
      >
        <Box display={{ base: "none", md: "block" }} mt="33px" ml="100px">
          <Image src={Logo} alt="logo" />
        </Box>

        <Box   
        
        height={{md:'420px'}}
        left={{base:"50%",md:0}}
        top={{base:"50%",md:0}}
        transform={{base:"translate(-50%,0)",md:"none"}}   
        position={{ base: "absolute", md: "initial" }}
        
        w={{ base: "70%", md: "345px" }}
        ml={{ md: "100px" }}
        mt={{ md: "111px" }}
        textAlign={{base:"center",md:"left"}}
        >
          <Heading
            textAlign={{ base: "center", md: "left" }}
            fontWeight="700"
            lineHeight={{ base: "46px", md: "69px" }}
            fontSize={{ base: "38px", md: "62px" }}
            className="heading_home"
            style={{ fontFamily: "var(--title-font)" }}
          >
            Discover the <span>Best</span> Food and Drinks
          </Heading>
          <Text
            w={{ base: "90%", md: "100%" }}
            textAlign={{base:"center",md:'left'}}
            style={{ fontFamily: "var(--body-font)" }}
            fontWeight="400"
            fontSize={{ base: "11px", md: "16px" }}
            className="p_home"
          >
            Naturally made Healthcare Products for the better care & support of
            your body.
          </Text>

          <Button
          
            variant="solid"
            fontSize={{ md: "18px", base: "12px" }}
            width={{ base: "120px", md: "190px" }}
            borderRadius={{ sm: "30px" }}
            p={{ sm: "12px 30px", md: "14px 34px" }}
            height={{ base: "40px", md: "63px" }}
            style={{
              backgroundColor: "var(--button-color)",
              fontFamily: "var(--body-font)",
            }}
            color="#fff"
            className="button home_button"
          >
            Explore Now!
          </Button>
        </Box>
      </Box>
      
      
      
      
      <Box  

        top={{ base: "0" }}
        w={{ base: "100%", md: "50%" }}
        position={{ base: "absolute", md: "relative" }}
      >
        <Box
          position={"absolute"}
          zIndex="5"
          mt={{ base: "18px", md: "33px" }}
          mr={{ base: "-10px" }}
          right="41px"
        >
          <Button
            style={{ fontFamily: "var(--title-font)", fontWeight: "600" }}
            w={{ base: "89px", md: "122px" }}
            h={{ base: "31px", md: "42px" }}
            borderRadius={{ base: "27px", md: "21px" }}
            variant="outline"
            fontSize={{ base: "11px", md: "16px" }}

            color={"#fff"}
          >
            Get In Touch
          </Button>
        </Box>
        <Box
          h={"426px"}
          width={{ base: "100%", md: "100%" }}
          position="relative"
        >
          <Image top="-0.1%" right="0" position="absolute" src={vector} />
          <Image src={Pizza} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
