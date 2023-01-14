import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Subscribe = () => {
    return (
        <Container h={"90vh"} p={"16"}>
            <Heading children={"Welcome"} marginY={"8"} textAlign={"center"} />
            <VStack boxShadow={
                "lg"
            } alignItems={"stretch"} borderRadius={"lg"} spacing={"0"}>
                <Box bg={"cyan"} padding={"4"} css={{ borderRadius: "8px 8px 0 0" }} >
                    <Text children={`Pro pack - ₹299.00`} />
                </Box>
                <Box p="4">
                    <VStack textAlign={"center"} paddingX={"8"} mt={"4"} spacing={"8"}>
                        <Heading color={"green.500"} children={"₹299.00 only"} size={"md"} />
                        <Text children={`Join pro pack and get access to all content`} />
                    </VStack>
                    <Button my={"8"} width={"full"} color={"Background"} colorScheme={"cyan"}>Buy Now</Button>
                </Box>

                <Box bg={"green.400"} padding={"4"} css={{ borderRadius: "0 0 8px 8px" }}>
                    <Heading children={"100% Refund on cancellation"} size={"sm"} color={"white"} textTransform={"uppercase"} />

                    <Text children={"Terms and conditions apply"} fontSize={"xs"} color={"white"} />
                </Box>
            </VStack>
        </Container>
    )
}

export default Subscribe