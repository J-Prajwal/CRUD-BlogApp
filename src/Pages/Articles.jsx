import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import BlogCard from "../Components/BlogCard";
import { fetchBlogPost } from "../Redux/Blog/action";

const Articles = () => {
  const { blogs } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (blogs?.length == 0) {
      dispatch(fetchBlogPost());
    }
  }, [blogs?.length, dispatch]);

  return (
    <Container maxW={"6xl"}>
      <Box textAlign="center" py={{ base: 2, md: 10 }}>
        <Heading>Trending</Heading>
      </Box>
      {/* <Flex flexWrap={'wrap'} justifyContent={'space-around'}> */}
      {/* <Box> */}
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {blogs.length &&
            blogs.map((product) => {
              return (
                <GridItem>
                  <BlogCard key={product.id} blogs={product} />;
                </GridItem>
              );
            })}
        </Grid>
      {/* </Box> */}
      {/* </Flex> */}
    </Container>
  );
};

export default Articles;
