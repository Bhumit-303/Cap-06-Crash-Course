import { Box, Button, SimpleGrid, Text, border } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function ShowTickets({ id, title, assignee, description, priority, status }) {
    const nevigete = useNavigate()


    const BoxStyle = {
border :'solid 2px black',
borderRadius : "12px",
p:5,
    }

    return (
                <Box {...BoxStyle} >
                    <Text fontSize='xl'>{title}</Text>
                    <Text>priority : {priority}</Text>
                    <Text>status : {status}</Text>
                    <Button 
                    colorScheme='blue' 
                    variant={'outline'} 
                    size={'sm'}
                    isLoading={false}
                    onClick={()=>nevigete(`/ticket/view/${id}`)}
                    >VIEW</Button>
                </Box>
    )
}