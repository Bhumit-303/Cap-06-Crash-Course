import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button, ButtonGroup, Container, Divider, HStack, Heading, Stack,Text } from '@chakra-ui/react'
import ShowTickets from './ShowTickets'

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
export default function ViewTicket() {
    const [data, setdata] = useState([])
    const [isLoading, setisLoading] = useState(false)
    const [isErr, setisErr] = useState(false)

    const nevigate = useNavigate()
    const { id } = useParams()

    console.log(data);

    const getaData = async (id) => {
        setisLoading(true)
        try {
            let res = await axios({
                method: 'get',
                url: `http://localhost:3000/tickets/${id}`,
            })
            setdata(res?.data);
            setisLoading(false)
        } catch (error) {
            setisErr(true)
            setisLoading(false)
        }
    }


    const hendelDelete = async ()=>{
        try {
            let res = await axios({
                method:'delete',
                url:`http://localhost:3000/tickets/${id}`
            })
            nevigate('/ticket')
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getaData(id)
    }, [])


    let {title,assignee,status,priority,description} = data
    return (
        <Container>
            <Card maxW={'md'}>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{title}</Heading>
                        <Text>
                            {description}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                        priority : {priority}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                           status : {status}
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                        assignee : {assignee}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <HStack spacing={5}>
                    <Button onClick={()=>nevigate(`/ticket/edit/${id}`)} variant='outline' colorScheme='blue'>
                           EDIT
                        </Button>
                        <Button onClick={hendelDelete} variant='outline' colorScheme='blue'>
                           DELETE
                        </Button>
                    </HStack>
                        
                </CardFooter>
            </Card>
        </Container>
    )
}