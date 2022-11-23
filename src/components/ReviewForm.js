import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/form-control'
import {
  Input,
  Button,
  Textarea,
  Grid,
  GridItem,
  Text,
  Box,
} from '@chakra-ui/react'

const ReviewForm = () => {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const onSubmit = () => {
    console.log('submit')
  }

  return (
    <Grid
      w="100%"
      alignContent="center"
      mt="22"
      templateRows="repeat(1,5fr)"
    >
      <GridItem mb="30">
        <FormControl
          w="100%"
          justifyContent="center"
          border={['', '', '1px solid lightgray']}
          bg="whiteAlpha.100"
          borderRadius="3"
          maxW="410px"
          m="0 auto"
          fontSize={['13', '14', '14']}
          className="review-form"
          noValidate
          autoComplete="off"
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Text
            fontSize="23"
            color="red.500"
            as="h2"
            mt="7"
          >
            Submit a review
          </Text>

          <FormLabel
            w="80%"
            mt="5"
            mb="0"
            fontSize={['13', '14', '14']}
            textAlign="left"
          >
            Your name:
          </FormLabel>
          <Input
            fontSize={['13', '14', '14']}
            w="84%"
            borderColor="gray.200"
            borderRadius="3"
            placeholder="Enter name..."
          />

          <Box w="84%">
            <section>
              <input
                label="Name"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </section>

            <FormLabel fontSize={['13', '14', '14']}>
              Your review:
            </FormLabel>
            <section>
              <Textarea
                fontSize={['13', '14', '14']}
                name="content"
                label="Content"
                rows="4"
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Enter review"
                size="sm"
              />
              <input
                name="content"
                label="Content"
                rows="4"
                value={content}
                onChange={e => setContent(e.target.value)}
              />
            </section>

            <section>
              <Button
                mt="3"
                w="100%"
                fontSize={['14', '15', '16']}
                display="flex"
                justifyContent="center"
                type="submit"
                name="submit"
                onClick={onSubmit}
                colorScheme="red"
              >
                Submit
              </Button>
            </section>
          </Box>

          <FormHelperText
            my="7"
            p="2"
            fontSize={['11', '12', '12']}
            bg="blackAlpha.800"
            color="whiteAlpha.900"
          >
            Don't Be Like Musk.&nbsp; Be kind'
          </FormHelperText>

          <FormErrorMessage>First name is invalid</FormErrorMessage>
        </FormControl>
      </GridItem>
    </Grid>
  )
}

export default ReviewForm
