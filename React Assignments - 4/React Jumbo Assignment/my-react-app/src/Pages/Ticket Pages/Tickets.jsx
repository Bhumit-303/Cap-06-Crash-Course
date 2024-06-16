import { Box, Button, Flex, Select, SimpleGrid, Text } from '@chakra-ui/react'

import axios from 'axios'
import { useEffect, useState } from 'react';
import ShowTickets from './ShowTickets';
import { useNavigate } from 'react-router-dom';



export default function Tickets() {
  const nevigete = useNavigate()

  const [data, setdata] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [isErr, setisErr] = useState(false)
  const [sortvalue, setsortvalue] = useState('')
  const [filtervalue, setfiltervalue] = useState('')

  const getaData = async (status) => {
    let Quaryparam = {}
    if (filtervalue) {
      Quaryparam.status = filtervalue
    }
    if (sortvalue) {
      Quaryparam._sort = "priority"
      Quaryparam._order = sortvalue
    }
    setisLoading(true)
    try {
      let res = await axios({
        method: 'get',
        url: `http://localhost:3000/tickets`,
        params: Quaryparam
      })
      setdata(res.data);
      setisLoading(false)
    } catch (error) {
      setisErr(true)
      setisLoading(false)
    }
  }

  useEffect(() => {
    getaData(sortvalue, filtervalue)
  }, [sortvalue, filtervalue])


  return (<>
    <SimpleGrid columns={[1,2,3]} spacing={10} w={'80%'} m={'auto'}  mt={10}>
      <Box >
        <Text>Sort by Priority</Text>
        <Select variant='filled'
          onChange={(e) => setsortvalue(e.target.value)}
        >
          <option value=''>-Select Priority-</option>
          <option value='asc'>Low to High</option>
          <option value='desc'>High to Low</option>
        </Select>
      </Box>
      <Box >
        <Text>Filter By Status</Text>
        <Select variant='filled'
          onChange={(e) => setfiltervalue(e.target.value)}
        >
          <option value=''>-Select Status-</option>
          <option value="Pending">Pending</option>
          <option value="In Progress">Progress</option>
          <option value="Completed">Completed</option>
        </Select>
      </Box>
      <Button
        colorScheme='blue'
        variant={'outline'}
        onClick={() =>nevigete('/ticket/create')}

      >Create Ticket</Button>
    </SimpleGrid>
    {/* </Container> */}
    <SimpleGrid columns={[1,2,3,4]} spacing={3} w={"90%"} m={"auto"} mt={5}>
      {data?.map(ticket => {
        return <ShowTickets {...ticket} key={ticket.id} />
      })}
    </SimpleGrid>
  </>)
}
