import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { VscError } from 'react-icons/vsc'
import { Link } from 'react-router-dom'

const PaymentFail = () => {
    return (
        <Container h="90vh" p="16">
            <Heading children={"OOPS!!! Something Went Wrong"} my="8" textAlign={"center"} />
            <VStack boxShadow={"lg"} pb={"16"} alignItems={"center"} borderRadius={"lg"}>
                <Box width={"full"} bg={"cyan"} padding={"4"} css={{ borderRadius: "8px 8px 0 0 " }}>
                    <Text children={"Payment Failed"} color={"black"} />


                </Box>
                <Box p="4" >
                    <VStack spacing={"8"} textAlign={"center"} px={"8"} mt={"4"}>
                        <Text>
                            Please try again to proceed your payment.

                        </Text>
                        <Heading size={"4xl"} color={"red"}>
                            <VscError />
                        </Heading>
                    </VStack>
                </Box>

                <Link to={"/subscribe"}>
                    <Button variant={"ghost"} colorScheme={"cyan"}>Try again</Button>
                </Link>

            </VStack>


        </Container>
    )
}

export default PaymentFail