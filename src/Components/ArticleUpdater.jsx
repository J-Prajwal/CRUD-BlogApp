import {
  Container,
  Box,
  Textarea,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useReducer } from "react";
import { useDispatch } from "react-redux";
import { createBlogPost } from "../Redux/Blog/action";
import { useNavigate } from "react-router-dom";
import { updateBlogPost } from "../Redux/Blog/action";

const ArticleUpdater = ({ currentBlog }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    sub_title: "",
    thumbnail_pic: "",
    description: "",
    author_name: "",
    author_profile_pic:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
  };

  const [formData, setFormData] = useReducer(
    (currData, newData) => ({ ...currData, ...newData }),
    initialValues
  );

  const handleFormDataChange = (event) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });
  };
  // console.log(formData);

  const createApplicationHandler = () => {
    const newData = {
      title: formData.title,
      sub_title: formData.sub_title,
      thumbnail_pic: formData.thumbnail_pic,
      description: formData.description,
      author: {
        name: formData.author_name,
        profile_pic: formData.author_profile_pic,
        publish_date: new Date().toLocaleDateString(),
      },
    };

    dispatch(createBlogPost(newData));
    navigate("/articles");
  };

  useEffect(() => {
    if (currentBlog && Object.keys(currentBlog).length) {
      setFormData({
        id: currentBlog.id,
        title: currentBlog.title,
        sub_title: currentBlog.sub_title,
        thumbnail_pic: currentBlog.thumbnail_pic,
        description: currentBlog.description,
        author: {
          name: currentBlog.author_name,
          profile_pic: currentBlog.author_profile_pic,
          publish_date: new Date().toLocaleDateString(),
        },
      });
    }
  }, [currentBlog]);

  const handleUpdateArticle = () => {
    const updatedData = {
      id: currentBlog.id,
      title: formData.title,
      sub_title: formData.sub_title,
      thumbnail_pic: formData.thumbnail_pic,
      description: formData.description,
      author: {
        name: formData.author_name,
        profile_pic: formData.author_profile_pic,
        publish_date: new Date().toLocaleDateString(),
      },
    };
    dispatch(updateBlogPost(updatedData));
    navigate(`/articles`)
  };

  return (
    <Container>
      <Box>
        <Stack spacing="24px">
          <FormControl isRequired>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              value={formData?.title}
              placeholder="Please enter blog title"
              name="title"
              onChange={handleFormDataChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="sub-title">Sub-Title</FormLabel>
            <Input
              id="sub-title"
              value={formData?.sub_title}
              placeholder="Please enter blog sub-title"
              name="sub_title"
              onChange={handleFormDataChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="url">Thumbnail Pic URL</FormLabel>

            <Input
              type="url"
              id="url"
              value={formData.thumbnail_pic}
              name="thumbnail_pic"
              placeholder="Please enter thumbnail pic URL"
              onChange={handleFormDataChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="author">Who's The Author</FormLabel>
            <Input
              id="author"
              defaultValue={formData.author_name}
              name="author_name"
              onChange={handleFormDataChange}
              placeholder="Select Author"
            >
              
            </Input>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="desc">Description</FormLabel>
            <Textarea
              id="desc"
              value={formData.description}
              name="description"
              onChange={handleFormDataChange}
            />
          </FormControl>
        </Stack>
        {currentBlog ? (
          <Button colorScheme={"blue"} onClick={handleUpdateArticle}>
            Update Application
          </Button>
        ) : (
          <Button colorScheme={"red"} onClick={createApplicationHandler}>
            Create Application
          </Button>
        )}
      </Box>
    </Container>
  );
};

export default ArticleUpdater;

// start video from 1:17:39
