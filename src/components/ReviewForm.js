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
  VStack,
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
      templateRows="repeat(1,1fr)"
    >
      <GridItem mb="22">
        <FormControl
          w="100%"
          p="3"
          border="1px solid"
          bg="whiteAlpha.100"
          borderColor="gray.200"
          borderRadius="3"
          maxW="410px"
          m="0 auto"
          fontSize="14"
          className="review-form"
          noValidate
          autoComplete="off"
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <VStack spacing="24px">
            <Text
              fontSize="23"
              color="red.500"
              as="h2"
              mt="3"
            >
              Submit a review
            </Text>

            <FormLabel
              w="100%"
              textAlign="left"
            >
              Your name:
            </FormLabel>
            <Input
              fontSize="14"
              placeholder="Enter name..."
            />

            <div className="container">
              <section>
                <input
                  label="Name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </section>

              <FormLabel>Your review:</FormLabel>
              <section>
                <Textarea
                  fontSize="14"
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
                  w="100%"
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
            </div>
          </VStack>

          <FormHelperText
            mt="7"
            px="5"
            bg="blackAlpha.700"
            color="whiteAlpha.800"
          >
            Don't Be Like Musk.&nbsp; Please be nice!'
          </FormHelperText>

          <FormErrorMessage>First name is invalid</FormErrorMessage>
        </FormControl>
      </GridItem>
    </Grid>
  )
}

export default ReviewForm
