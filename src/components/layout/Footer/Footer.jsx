import { Box, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { TiSocialYoutubeCircular, TiSocialInstagramCircular } from "react-icons/ti"
import { DiGithub } from "react-icons/di"

const Footer = () => {
    return (
        <Box padding={"2"} bg={"blackAlpha.900"}>
            <Stack direction={["column", "row"]} minHeight={"6vh"} >
                <Stack direction={["column", "row"]}

                    alignItems={["center", "flex-start"]} width={"full"}>
                    <Text children={"All rights reserved by "}
                        size={"sm"}
                        color={"white"}

                    />
                    <Text children={"@tejasgiri910@gmail.com"}

                        color={"yellow.400"}
                        fontFamily={"body"}
                        size={"sm"}

                    />


                </Stack>
                <HStack spacing={["2", "10"]} justifyContent={"center"} color={"white"} fontSize={"28"}>

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