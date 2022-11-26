import React from 'react'
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

const ReviewForm = ({
  input,
  resetForm,
  handleChange,
  setOn,
  on,
}) => (
  <Grid
    h="470px"
    position="absolute"
    w={['350px', '450px']}
    left={['calc(50% - 175px)', 'calc(50% - 225px)']}
    top={['calc(50% - 225px)', 'calc(50% - 275px)']}
    visibility={`${on ? 'visible' : 'hidden'}`}
    transition="all 0.75s ease-in 300ms"
  >
    <GridItem>
      <form
        onSubmit={async event => {
          event.preventDefault()
          setOn(false)
          const res = await input
          return res
        }}
      >
        <FormControl
          display="flex"
          h="100%"
          flexDirection="column"
          alignItems="center"
          data-testid="books-review-form"
          border={['', '', '1px solid lightgray']}
          borderRadius="3"
          fontSize={['13', '14', '14']}
          className="review-form"
          noValidate
          py="5"
          autoComplete="off"
        >
          <Text
            fontSize="23"
            color="red.500"
            as="h2"
            my="6"
          >
            Submit a review
          </Text>

          <Box w="84%">
            <FormLabel
              mt="5"
              mb="0"
              fontSize={['13', '14', '14']}
              textAlign="left"
            >
              Your name:
            </FormLabel>
            <section>
              <Input
                label="Name"
                data-testid="books-review-form-input"
                name="name"
                value={input?.name}
                onChange={handleChange}
                fontSize={['13', '14', '14']}
                borderColor="gray.200"
                borderRadius="3"
                placeholder="Enter name..."
              />
            </section>
          </Box>

          <Box w="84%">
            <FormLabel
              mt="5"
              fontSize={['13', '14', '14']}
            >
              Your review:
            </FormLabel>
            <section>
              <Textarea
                fontSize={['13', '14', '14']}
                name="content"
                label="Content"
                data-testid="books-review-form-textarea"
                rows="4"
                value={input?.content}
                onChange={handleChange}
                placeholder="Enter review"
                size="sm"
              />
            </section>

            <section>
              <Button
                mt="7"
                w="100%"
                fontSize={['13', '14', '15']}
                display="flex"
                justifyContent="center"
                type="submit"
                name="submit"
                data-testid="books-review-form-submit"
                colorScheme="red"
                px="4"
                py="2"
                borderRadius="5"
                size="large"
              >
                Submit
              </Button>
            </section>
          </Box>

          <FormHelperText
            mt="5"
            p="2"
            px="22"
            mb="1"
            data-testid="belike-musk"
            fontSize={['9', '9']}
            fontWeight="500"
            color="blackAlpha.900"
            borderRadius="3"
          >
            Don't Be Like Musk.&nbsp; Be kind'
          </FormHelperText>

          <FormErrorMessage>First name is invalid</FormErrorMessage>
        </FormControl>
      </form>
    </GridItem>
  </Grid>
)

export default ReviewForm
