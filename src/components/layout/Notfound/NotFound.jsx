import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiCheckboxCircleFill, RiErrorWarningFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <Container h="90vh" >
            <VStack justifyContent={"center"} h={"full"} spacing={"4"}>
                <RiErrorWarningFill size={"5rem"} />
                <Heading children={"Page Not Found"} my="8" textAlign={"center"} />
                <VStack boxShadow={"lg"} alignItems={"center"} borderRadius={"lg"}>


                    <Link to={"profile"}>
                        <Button variant={"ghost"} colorScheme={"cyan"}>Go back to Home</Button>
                    </Link>

                </VStack>

            </VStack>

        </Container>
    )
}

export default NotFound