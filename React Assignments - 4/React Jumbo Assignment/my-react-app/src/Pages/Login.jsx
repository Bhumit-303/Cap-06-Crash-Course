import { Button, Container,Heading,Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [show, setShow] = useState(false)
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const Nevigate = useNavigate()

  const {Login} = useContext(AuthContext)
  const handleClick = () => setShow(!show)

  
const Url = "https://reqres.in/api/login"
const postUser =async ()=>{
  try {
    let res =await axios.post(Url,{email:email,password:password})
    console.log(res.data);
    Login(res.data.token)
Nevigate('/')
  } catch (error) {
    console.log(error);
  }
}



  return (
   <Container>
    <VStack spacing={3}>
    <Heading textAlign={"center"} m={2}>Login Now</Heading>
     <Input 
     variant='filled' 
     placeholder='Enter email' 
     onChange={(e)=>setemail(e.target.value)}
     />
     <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
        variant='filled'
        onChange={(e)=>setpassword(e.target.value)}
      />
      <InputRightElement width='4.5rem'>
        <Button bg={'lightblue'} h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    <Button onClick={postUser} variant={"outline"} colorScheme='red' m={3} pl={5} pr={5}>Login</Button>
    </VStack>
   </Container>
  )
}