import { Avatar, Box, Button, Container, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import React from 'react'
import introVideo from "../../assets/videos/introvideo.mp4"
import { RiSecurePaymentFill } from "react-icons/ri"

import data from "../../assets/docs/termsAndCondition"

const Tnc = ({ termsandconditions }) => {
    return (
        <Box>
            <Heading size={"md"} children={"Terms and conditions"} textAlign={["center", "left"]} my="4" />
            <Box h="sm" p="4" overflowY={"scroll"}>
                <Text textAlign={["center", "left"]} fontFamily={"heading"} letterSpacing={"widest"}>{termsandconditions}</Text>
                <Heading children={"Refund only applicable for cancelation within 7 days"} size={"xs"} my="4" />
            </Box>


        </Box>
    )
}
const VideoPlayer = () => {
    return (
        <Box width={["100%"]} display={"flex"} justifyContent={"center"}>


            <video
                autoPlay
                muted
                controls
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
                src={introVideo}
            ></video>

        </Box>
    )
}

const Founder = () => {
    const profile = "https://res.cloudinary.com/dymgcz8qy/image/upload/v1675440903/cth0qoeavsojaq7wnaxz.jpg"
    return (

        <Stack direction={["column", "column", "row"]} spacing={["4", "16"]} padding={"4"}>
            <VStack>
                <Avatar boxSize={["40", "48"]} src={profile} />
                <Text children={"Founder"} opacity={"0.7"} />

            </VStack>
            <VStack justifyContent={"center"} alignItems={["center", "flex-start"]}>
                <Heading children={"Tejas Giri"} size={["md", "xl"]} />
                <Text textAlign={["center", "left"]} children={"Hi, I am a full Stack developer and looking for opportunity for better career."} />


            </VStack>

        </Stack>
    )
}
const About = () => {
    return (
        <Container maxWidth={"container.lg"} padding={"16"} boxShadow={"lg"} >
            <Heading children={"About us"} textAlign={["center", "left"]} />
            <Founder />
            <Stack m="8" direction={["column", "column", "row"]} alignItems={"center"}>
                <Text fontFamily={"cursive"} m="8" textAlign={["center", "left"]}>
                    We are providing the quality content available for only premium users.
                </Text>
                <Link to="/subscribe" >
                    <Button color="white" colorScheme={"purple"}>Checkout Our Plans </Button>
                </Link>

            </Stack>
            <VStack>
                <VideoPlayer />

            </VStack>

            <Tnc termsandconditions={data} />
            <HStack my="4" p="4">

                <RiSecurePaymentFill />
                <Heading children={"Payment is secured by RazorPay"} size={"xs"} fontFamily={"sans-serif"} textTransform={"uppercase"} />
            </HStack>

        </Container>
    )
}

export default About