import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { BsCheckCircle } from 'react-icons/bs'
import { Link, useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {
    const search = useSearchParams()[0].get('referencepay');

    return (
        <Container h="90vh" p="16">
            <Heading children={"You have pro pack"} my="8" textAlign={"center"} />
            <VStack boxShadow={"lg"} pb={"16"} alignItems={"center"} borderRadius={"lg"}>
                <Box width={"full"} bg={"green"} padding={"4"} css={{ borderRadius: "8px 8px 0 0 " }}>
                    <Text children={"Payment Success"} color={"white"} />


                </Box>
                <Box p="4" >
                    <VStack spacing={"8"} textAlign={"center"} px={"8"} mt={"4"}>
                        <Text>
                            Congratulations!!! You are pro member. You have access to premium content

                        </Text>
                        <Heading size={"4xl"} color={"green.400"}>
                            <BsCheckCircle />
                        </Heading>
                    </VStack>
                </Box>

                <Link to={"/profile"}>
                    <Button variant={"ghost"} colorScheme={"cyan"}>Go back to Profile</Button>
                </Link>
                <Heading size={"xs"}>
                    Reference: {search}
                </Heading>
            </VStack>


        </Container>
    )
}

export default PaymentSuccess