import { Container, Box, Heading } from '@chakra-ui/react'
import React from 'react'
import ArticleUpdater from '../Components/ArticleUpdater'
import { useSelector } from 'react-redux';

const UpdateArticles = () => {
  const { currentBlog } = useSelector((state) => state);
  console.log(currentBlog);
  return (
    <Container maxW={'3xl'} pb={'4rem'}>
      <Box textAlign={'center'} py={{base: 2, md: 10}}>
        <Heading>Update Article</Heading>
      </Box>
      <ArticleUpdater currentBlog={currentBlog} />
    </Container>
  )
}

export default UpdateArticles