import { Button, Flex, LinkBox } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

export default function Navbar() {
  const{authState,LogOut} = useContext(AuthContext)
  return (
    
    <Flex justify={"space-around"} align={"center"}  m={"auto"} bg={"lightblue"}>
      <Button bg={"none"}>
        <Link to={"/"} >Home</Link>
      </Button>

      <Button bg={"none"}>
        <Link to={"/about"} >About</Link>
      </Button>
      
      <Button bg={"none"}>
        <Link to={"/ticket"} >Tickets</Link>
      </Button>
        <Button bg={'none'}><Link to={'/contect'}>Contect Us</Link></Button>
      <Button bg={"none"}>
       {authState.isLogned ? <Button onClick={LogOut} bg={"none"}>LogOut</Button> :  <Link to={"/login"} >Login</Link>}
      </Button>
        
        </Flex>

  )
}