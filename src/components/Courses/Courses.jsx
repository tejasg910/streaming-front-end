import { Button, Container, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Course = ({ views, title, imageSrc, id, handelPlayList, creater, description, lecture }) => {

    return (
        <VStack className='course' alignItems={["center", "flex-start"]}>
            <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
            <Heading textAlign={["center", "left"]} maxW={"200px"} fontFamily={"sans-serif"}
                noOfLines={3}
                children={title}
                size={"sm"}
            />
            <Text children={description} noOfLines={2} />
            <HStack>
                <Text children={"creater: "} noOfLines={1} fontFamily={"body"} />
                <Text children={creater} noOfLines={1} fontWeight={"bold"} textTransform={"uppercase"} />



            </HStack>

            <Heading textAlign={"center"} size={"xs"} children={`Lectures count:  ${lecture}`} />
            <Heading textAlign={"center"} size={"xs"} children={`Views:  ${views}`} />
            <Stack direction={["column", "row"]}
                alignItems={"center"}>
                <Link to={`/course/${id}`} >
                    <Button colorScheme={"cyan"}
                        color={"white"}>
                        Watch Now
                    </Button>
                </Link>

                <Button variant={"ghost"} colorScheme={"yellow"} onClick={() => {
                    handelPlayList(id)
                }}>


                    Add to playlist
                </Button>

            </Stack>
        </VStack >
    )
}
const Courses = () => {

    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("")
    const categories = [
        "Web Development",
        "Data Structures and Algorithm",
        "Android Development",
        "Data Science",
        "Machine Learning",
        "Artificial Intelligence",
        "Game Development"
    ]

    const handelPlayList = (id) => {
        console.log("added playlist")
    }
    return (
        <Container minH={"95vh"} maxW={"container.lg"} padding="8">
            <Heading children="All Courses" m={"8"} />
            <Input value={keyword} onChange={(e) => { setKeyword(e.target.value) }} placeholder={"Search a Course"} type={"text"}
                focusBorderColor="cyan.400"
                borderColor={"blue"}



            />

            <HStack overflowX={"auto"} paddingY={"8"} css={{
                "&::-webkit-scrollbar": {
                    display: "none"
                }
            }}>
                {
                    categories.map((item, index) => (
                        <Button key={index} onClick={() => { setCategory(item) }} minW={"60"}>
                            <Text children={item} />
                        </Button>
                    ))
                }
            </HStack>
            <Stack direction={["column", "row"]} flexWrap="wrap" justifyContent={["flex-start", "space-evenly"]} alignItems={["center", "flex-start"]}>

                <Course
                    title={"Sample title"}
                    creater={"John Doe"}
                    views={4508024858}
                    imageSrc={"https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_960_720.jpg"}
                    description={"this is description "}
                    lecture={2}
                    handelPlayList={handelPlayList}
                    id={9420880503209}
                />



            </Stack>
        </Container>
    )
}

export default Courses