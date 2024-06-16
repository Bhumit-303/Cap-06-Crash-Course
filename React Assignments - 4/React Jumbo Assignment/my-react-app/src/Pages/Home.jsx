import { Box, Container, Flex, Heading,Image,Text } from '@chakra-ui/react'
// import {homepng,keyboard,office,technology1,technolog2,workplace} from ".././assets/homepng.png"
import homepng from '../assets/homepng.webp'
import  keyboard from '../assets/keyboard.jpg'
import  office from '../assets/office.jpg'
import  technology1 from '../assets/technology1.jpg'
// import  technolog2 from '../assets/technolog2.jpg'
import  workplace from '../assets/workplace.jpg'
import React from 'react'

export default function Home() {
  return (
    <Container maxWidth={"80%"}>
     <Flex direction={'column'} p={5} gap={5}>
      <Image src={homepng}  borderRadius={7}/>
     <Box>
      <Text  borderRadius={5} fontSize={"20px"} fontWeight={'bold'}>How we help</Text>
      <Flex gap={5} mt={5}>
        <Box>
        <Image h={'200px'}  borderRadius={5} src={keyboard} />
        <Text fontWeight={'bold'}>Back-End Development</Text>
        <Text p={2}>Utilizing powerful frameworks like Node.js, Django, and Ruby on Rails, we build secure and scalable solutions that integrate seamlessly with your front-end.</Text>
        </Box>
       <Box>
        <Image h={'200px'} borderRadius={5}  src={office} />
        <Text fontWeight={'bold'}>Maintenance and Support</Text>
        <Text p={2}>Our relationship doesn’t end with the launch of your website. We offer ongoing maintenance and support to ensure your site remains up-to-date, secure, and fully operational.</Text>
        </Box>
         <Box>
        <Image h={'200px'}  borderRadius={5} src={technology1} />
        <Text fontWeight={'bold'}>Digital Marketing Services</Text>
        <Text p={2}>Our digital marketing services are designed to increase your online visibility, drive traffic to your website, and convert visitors into loyal customers. We use data-driven strategies to achieve measurable results.</Text>
        </Box>
       <Box>
        <Image h={'200px'} borderRadius={5}  src={workplace} />
        <Text fontWeight={'bold'}>E-commerce Solutions</Text>
        <Text p={2}>Transform your business with our customized e-commerce solutions. We develop platforms that provide a seamless shopping experience, complete with secure payment gateways, inventory management, and customer support functionalities.</Text>
        </Box>
      </Flex>
     </Box>
     </Flex>
      
    </Container>
  )
}