import React, { useState } from "react";
import "./LatestArticles.css";

import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";

import { menuItem } from "../../Data.jsx";

import { Box, Grid, Container, Heading } from "@chakra-ui/react";
import FoodCard from "./FoodCard/FoodCard";

const LatestArticles = () => {
  const [page, setpage] = useState(1);

  const selectedPageHandle = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= menuItem.length / 3 &&
      selectedPage !== page
    )
      setpage(selectedPage);
  };

  return (
    <Box>
      <Container maxW="85%">
        <Box mt={{ base: "60px", md: "30px" }}></Box>
        <Heading
          mb={ "30px" }
          textAlign={{ base: "center", md: "left" }}
          style={{ fontFamily: "var(--title-font)" }}
          fontWeight={600}
          fontSize={{ base: "28px", md: "56px" }}
          
          className="h_la"
        >
          Latest Articles
        </Heading>

        <Grid
          
          placeItems="center"
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          gap={{ base: "50px", md: "20px" }}
          justifyContent="space-evenly"
        >
          {menuItem
            .slice(page * 3 - 3, page * 3)
            .map(({ img, title, description }, id) => {
              return (
                <FoodCard
                  img={img}
                  key={id}
                  title={title}
                  description={description}
                />
              );
            })}
        </Grid>

        {menuItem.length > 0 && (
          <div className="pagination">
            <span>
              <CiSquareChevLeft
                onClick={() => selectedPageHandle(page - 1)}
                className={
                  page >= menuItem.length / 3 ? "" : "pagination-disabled"
                }
              />
            </span>
            <span className="index">
              {page}/ {menuItem.length / 3}
              {/* {[...Array(menuItem.length / 3)].map((_, i) => {
                return <span key={i}>{i + 1}</span>;
              })} */}
            </span>
            <span>
              <CiSquareChevRight
                onClick={() => selectedPageHandle(page + 1)}
                className={
                  page < menuItem.length / 3 ? "" : "pagination-disabled"
                }
              />
            </span>
          </div>
        )}
      </Container>
    </Box>
  );
};

export default LatestArticles;
