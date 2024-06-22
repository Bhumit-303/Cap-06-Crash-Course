import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardBody,  Stack, Heading, Text,  Button, } from '@chakra-ui/react'


export default function ProductCard({ ...data }) {
  // console.log(data);

  const { id, title, image, category, price } = data
  return (
    <Link>
      <Card maxW='sm' border={'solid 1px black'}>
        <CardBody>
           
          <Stack mt='6' spacing='1'>
            <Heading size='md'>{title}</Heading>

            <Text color='blue.600' fontSize='2xl'>
              catagory : {category}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              price : {price}
            </Text>

          </Stack>
          <Button mt={5} variant='outline' colorScheme='blue'>
            <Link to={`/productview/${id}`}>Show more</Link>
          </Button>
        </CardBody>

      </Card>
    </Link>
  )
}
 // product card page done 