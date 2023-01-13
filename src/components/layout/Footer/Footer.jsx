import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import { TiSocialYoutubeCircular, TiSocialInstagramCircular } from "react-icons/ti"
import { DiGithub } from "react-icons/di"

const Footer = () => {
    return (
        <Box padding={"4"} bg={"blackAlpha.900"} minHeight={"10vh"}>
            <Stack direction={["column", "row"]}>
                <VStack alignItems={["center", "flex-start"]} width={"full"}>
                    <Heading children={"All rights reserved by "}
                        color={"white"}

                    />
                    <Heading children={"@tejasgiri910@gmail.com"}

                        color={"yellow.400"}
                        fontFamily={"body"}
                        size={"sm"}

                    />


                </VStack>
                <HStack spacing={["2", "10"]} justifyContent={"center"} color={"white"} fontSize={"50"}>

                    <a href='https://www.instagram.com/tejas_giri24/' target={"_blank"}>
                        <TiSocialInstagramCircular />
                    </a>

                    <a href='https://github.com/tejasg910' target={"_blank"}>
                        <DiGithub />
                    </a>
                </HStack>
            </Stack>
        </Box>
    )
}

export default Footer