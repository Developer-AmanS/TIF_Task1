import React from "react";
import "./Footer.css"
import Logo from "../../assets/foodtruck.png";
import {  FiInstagram } from "react-icons/fi";
import {BsTwitter} from 'react-icons/bs';
import {FaFacebookF} from "react-icons/fa";
import { Box,Image ,Flex,Heading,Text} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      p={{ base: "20px ", md: 0 }}
      w="100%"
      height={{ base: "460px", md: "362px" }}
      bgColor="#f8f8f8"
      position="relative"
    >
      <Box
        marginTop={"20px"}
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        width="100%"
        height="100%"
        alignItems="center"
        gap={4}
        justifyContent="space-evenly"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={"center"}
          w={{ md: "15%" }}
          h={{ md: "60%" }}
        >
          <Image
            w={{ base: "75px", md: "161px" }}
            h={{ base: "58px", md: "125px" }}
            src={Logo}
          />
        </Box>

        <Box
          display={{ md: "flex" }}
          flexDirection="column"
          justifyContent="center"
          w={{ base: "80%", md: "14%" }}
          h={{ md: "60%" }}
        >
          <Heading
            mb={"10px"}
            className="heading-footer"
            fontSize={{ base: "16px", md: "18px" }}
            style={{ fontFamily: "var(--title-font)" }}
            fontWeight="600"
          >
            Contact Us
          </Heading>

          <Text
            mb={"10px"}
            className="text-footer"
            fontSize={{ base: "11px", md: "14px" }}
          >
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
            Market, XYZ-343434
          </Text>

          <Text
            mb={"10px"}
            fontSize={{ base: "11px", md: "14px" }}
            className="text-footer"
          >
            example2020@gmail.com
          </Text>

          <Text
            mb={"10px"}
            fontSize={{ base: "11px", md: "14px" }}
            className="text-footer"
          >
            (904) 443-0343
          </Text>
        </Box>

        <Box
          display={{ md: "flex" }}
          flexDirection="column"
          p={{ md: "0 0 0 85px  " }}
          justifyContent="center"
          w={{ base: "80%", md: "15%" }}
          h={{ md: "60%" }}
        >
          <Heading
            mb={"10px"}
            className="heading-footer"
            fontSize={{ base: "16px", md: "18px" }}
            style={{ fontFamily: "var(--title-font)" }}
            fontWeight="600"
          >
            More
          </Heading>

          <ul>
            <li>About Us</li>
            <li>Products</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </Box>

        <Box
          position="relative"
          display={{ md: "flex" }}
          alignItems="center"
          flexDirection="column"
          gap={1}
          w={{ base: "50%", md: "18%" }}
          h="60%"
        >
          <Heading
            mt={{ md: "11%" }}
            display={{ base: "none", md: "block" }}
            className="heading-footer"
            fontSize={{ base: "16px", md: "19px" }}
            style={{ fontFamily: "var(--title-font)" }}
            fontWeight="600"
          >
            Social Links
          </Heading>

          <Flex
            placeContent={{ base: "center", md: "initial" }}
            justify={{ md: "flex-start" }}
            gap={{ base: 4, md: 8 }}
            mt={{ base: "9px", md: "1rem" }}
          >
            <FiInstagram className="icons" />
            <BsTwitter className="icons" />
            <FaFacebookF className="icons" />
          </Flex>

          <Text
         
            position="absolute"

            bottom={{ base: "100%", md: "16%" }}
            left={{ base: "18%", md: '0' }}
            className="subtext"
          >
            © 2022 Food Truck Example
          </Text>
        </Box>
      </Box>
    </Box>

    // <Box bgColor="green" w="100%" h="362px" display="flex">
    //   <Box a bgColor={"grey"} w="80%"  display="flex">
    //     <Box w="15%">
    //       <Image src={Logo} />
    //     </Box>
    //     <Box w="15%" >
    //       <h3>Contact Us</h3>
    //       <Text>
    //         Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM
    //         Market, XYZ-343434
    //       </p>
    //       <p>example2020@gmail.com</p>
    //       <p>(904) 443-0343</p>
    //     </Box>
    //     <Box w='15%' gap={10}>
    //       {" "}
    //       <h3>More</h3>
    //       <p>About Us</p>
    //       <p>Products</p>
    //       <p>Career</p>
    //       <p>Contact Us</p>
    //     </Box>
    //     <Box>
    //       <h3>Social Links</h3>
    //     </Box>
    //   </Box>
    // </Box>
  );

};

export default Footer;
