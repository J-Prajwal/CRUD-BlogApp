import {
  Avatar,
  Box,
  Center,
  Heading,
  Image,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blogs }) => {
  return (
    <Center my={6}>
      <Box
        maxW={"445px"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box>
          <Image src={`${blogs.thumbnail_pic}`}></Image>
        </Box>
        <Link to={`/articles/${blogs.id}`}>
          <Stack>
            <Heading>{blogs.title}</Heading>
            <Text>{blogs.description}</Text>
          </Stack>
          <Stack>
            <Avatar src={blogs.author.profile_pic}></Avatar>
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text>{blogs.author.name}</Text>
            </Stack>
          </Stack>
        </Link>
      </Box>
    </Center>
  );
};

export default BlogCard;
