import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'
import {
  Container,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Button,
} from '@chakra-ui/react'

export default function EditTicket() {
  const nevigate = useNavigate()

  const {id} = useParams()

  const [ticket, setticket] = useState({})
  const [isLoading, setisLoading] = useState(false)
  const [isErr, setisErr] = useState(false)


  const getaData = async (id) => {
    setisLoading(true)
    try {
        let res = await axios({
            method: 'get',
            url: `http://localhost:3000/tickets/${id}`,
        })
        let data = (res?.data);
        setticket(data)
        setisLoading(false)
    } catch (error) {
        setisErr(true)
        setisLoading(false)
    }
}

  const ticketObj = {}
  const hendelSubmit = () => {
    ticketObj.title = title,
      ticketObj.description = description,
      ticketObj.assignee = assignee,
      ticketObj.status = status,
      ticketObj.priority = priority

      postTicket(ticketObj,id)
    
  }

  const postTicket =async (data,id)=>{
    setisLoading(true)
    try {
      const res = await axios({
        method:'put',
        url:`http://localhost:3000/tickets/${id}`,
        data:data
      })
      nevigate('/ticket')
      setisLoading(false)
    } catch (error) {
      setisErr(true)
      setisLoading(false)
      console.log(error);
    }
  }

useEffect(() => {
    getaData(id)
}, [])

const {title,description,assignee,status,priority} = ticket;
  return (
    <Container my={10}>
      <Heading my={5}>Update Ticket</Heading>
      <FormControl  isRequired>
        <FormLabel>Title</FormLabel>
        <Input type='text' onChange={(e) => setticket({...ticket,
         title: e.target.value})} value={title} />
      </FormControl>

      <FormControl  isRequired>
        <FormLabel>description</FormLabel>
        <Input type='text' onChange={(e) => setticket({...ticket,
          description: e.target.value})} value = {description}/>
      </FormControl>

      <FormControl  isRequired>

        <FormLabel>assignee</FormLabel>
        <Input type='text' onChange={(e) => setticket({...ticket,
          assignee: e.target.value})} value={assignee}/>
      </FormControl>

      <FormControl>
        <FormLabel>status</FormLabel>
        <Select placeholder='Select status' onChange={(e) => setticket({...ticket,
          status: e.target.value})} value={status}>
          <option value={"Pending"}>Pending</option>
          <option value={"In Progress"}>Completed</option>
          <option value={"Completed"}>Progress</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>priority</FormLabel>
        <Select placeholder='Select priority' onChange={(e) => setticket({...ticket,
          priority : e.target.value})} value= {priority}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
        </Select>
      </FormControl>

      <Button
        mt={4}
        colorScheme='teal'
        type='submit'
        onClick={hendelSubmit}
        isLoading={isLoading}
      >
       Update
      </Button>

    </Container>
  )
}