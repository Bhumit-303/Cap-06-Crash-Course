
import { Box, Flex,Image,Text } from '@chakra-ui/react'
import welcome from "../assets/aboutImg.webp"
import React from 'react'

export default function About() {
  return (
   <Flex w={'80%'} m={'auto'} p={5} borderRadius={10} direction={'column'} gap={5}>
    <Box>
<Image src={welcome} borderRadius={10}/>
<Text fontSize={'15px'} mt={4}>Welcome to our Company, your trusted partner in the digital transformation journey. We are dedicated to providing top-quality web development, mobile app development, digital marketing, and cloud solutions that drive business success.
</Text>
    </Box>
    <Text fontWeight={'bold'}>About Us</Text>
    <Text>At Our Company, we believe in the power of technology to transform businesses. With years of experience and a passion for innovation, we offer a comprehensive range of services tailored to meet the unique needs of our clients. Our mission is to deliver exceptional value through high-quality solutions that enhance efficiency, improve customer engagement, and drive growth.</Text>
   </Flex>
  )
}