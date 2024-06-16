import { useState } from 'react'

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




export default function CreateTicket() {
  const nevigate = useNavigate()
  // const [forminput, setformInput] = useState({
  //   title:'',
  //   description:'',
  //   assignee:'',
  //   status:'',
  //   priority:'',
  // })
  // const {title,descriptin,assignee,status,priority} = forminput

  const [isLoading, setisLoading] = useState(false)
  const [isErr, setisErr] = useState(false)

  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [assignee, setassignee] = useState('')
  const [status, setstatus] = useState("Pending")
  const [priority, setpriority] = useState('')

  const ticketObj = {}
  const hendelSubmit = () => {
    ticketObj.title = title,
      ticketObj.description = description,
      ticketObj.assignee = assignee,
      ticketObj.status = status,
      ticketObj.priority = priority

      postTicket(ticketObj)
    console.log(ticketObj);
    settitle('')
    setassignee('')
    setstatus('')
    setpriority('')
    setdescription('')
  }

  const postTicket =async (data)=>{
    setisLoading(true)
    try {
      const res = await axios({
        method:'post',
        url:'http://localhost:3000/tickets',
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
  return (
    <Container my={10}>
      <Heading my={5}>Create New Ticket</Heading>
      <FormControl isInvalid={description === ''} isRequired>

        <FormLabel>Title</FormLabel>
        <Input type='text' onChange={(e) => settitle(e.target.value)} value={title} />
        {title !== '' ? (
          <FormHelperText>
            Enter the Title you'd like to add the tickets.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Title is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={description === ''} isRequired>
        <FormLabel>description</FormLabel>
        <Input type='text' onChange={(e) => setdescription(e.target.value)} />
        {description !== '' ? (
          <FormHelperText>
            Enter the description you'd like to add the tickets.
          </FormHelperText>
        ) : (
          <FormErrorMessage>Description is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl isInvalid={description === ''} isRequired>

        <FormLabel>assignee</FormLabel>
        <Input type='text' onChange={(e) => setassignee(e.target.value)} />
        {assignee !== '' ? (
          <FormHelperText>
            Enter the assignee you'd like to add the tickets.
          </FormHelperText>
        ) : (
          <FormErrorMessage>assignee is required.</FormErrorMessage>
        )}
      </FormControl>

      <FormControl>
        <FormLabel>status</FormLabel>
        <Select placeholder='Select status' onChange={(e) => setstatus(e.target.value)}>
          <option value={"Pending"}>Pending</option>
          <option value={"In Progress"}>Completed</option>
          <option value={"Completed"}>Progress</option>
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>priority</FormLabel>
        <Select placeholder='Select priority' onChange={(e) => setpriority(e.target.value)}>
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
        Create Ticket
      </Button>

    </Container>
  )
}