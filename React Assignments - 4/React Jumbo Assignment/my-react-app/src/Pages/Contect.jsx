import { Box, Container, Flex, Heading,Link,Text } from '@chakra-ui/react'
import React from 'react'
import {EmailIcon } from '@chakra-ui/icons'

export default function Contect() {
    return (
        <Container>
            <Flex direction={'column'} align={'center'} gap={7}>
                <Heading>Contact Us</Heading>
                <Text>We know that choosing the right institute or a career path can be a difficult and tiring process, and that's why we're here for you. Contact us to ask any questions, we'll respond over email as soon as possible!
                </Text>
                <Box>
                <EmailIcon color="red.500" boxSize={10} />
                </Box>
                <Heading>Write to us at</Heading>
                <Link href='mail to admissions@masaischool.com'>admissions@masaischool.com</Link>
            </Flex>
        </Container>
    )
}