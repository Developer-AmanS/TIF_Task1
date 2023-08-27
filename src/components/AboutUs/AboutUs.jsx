import React from "react";
import "./AboutUs.css"
import { Image, Box,Heading,Text,Button} from "@chakra-ui/react";
import AboutImg from "../../assets/girl.png";

const AboutUs = () => {
  return (
    <Box w="100%" h={{sm:"516px" , md:"630px"}}>
      <Box mt={{md:"180px"}}
        bgColor="#f8f8f8"
        alignItems="center"
        justifyContent="space-evenly"
        display="flex"
      >
        <Image display={{base:'none',md:"block"}} src={AboutImg} />

        <Box
        p={{base:"32% 0",md:"0"}}
          // display="flex"
          // flexDirection="column"
          // alignItems={{base:"center"}}
          textAlign={{base:"center",md:"left"}}
          
          // alignContent={{base:"center"}}
          // justifyContent={{md:"space-between"}}
          w={{base:"275px",md:"447px"}}
          h={{base:"516px",md: "250px"}}
           
        >
          <Heading mb={{base:"20px"}}  fontSize={{base:"26px",md:"45px"}} className="h_as">About Us</Heading>

          <Text fontSize={{base:"11px",md:"15px"}} className="p_as">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </Text>
          <br />

   
          <Button color="white" w={{base:"96px",md:"132px"}} h={{base:"25px", md:"42px"}} sx={{backgroundColor:'var(--button-color);'}} p={{base:"4px 33px", md:"3px 26px"}} fontSize={{base:"11px",md:"16px"}} borderRadius={{base:"27px",md:"21px"}} className="button aboutus_button">Read More</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
