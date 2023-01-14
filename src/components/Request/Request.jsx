import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import React, { useState } from 'react'

const Request = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");



    return (
        <Container h={"95vh"}>
            <VStack>
                <Heading children={"Contact us"} />
                <form style={{ width: "100%" }}>

                    <Box marginY={"4"}>
                        <FormLabel htmlFor='name' children={"Name"} />
                        <Input required id='name' value={name} onChange={(e) => { setName(e.target.value) }}
                            placeholder={"abc"}
                            type={"text"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                        />

                    </Box>
                    <Box marginY={"4"}>
                        <FormLabel htmlFor='email' children={"Email Address"} />
                        <Input required id='email' value={email} onChange={(e) => { setEmail(e.target.value) }}
                            placeholder={"abc@gmail.com"}
                            type={"email"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                        />

                    </Box>
                    <Box marginY={"4"}>
                        <FormLabel htmlFor='course' children={"Course"} />
                        <Textarea required id='course' value={course} onChange={(e) => { setCourse(e.target.value) }}
                            placeholder={"Explain the course"}
                            type={"text"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                        />

                    </Box>



                    <Box>

                        <Button my={"4"} type={"submit"} colorScheme={"cyan"}>Request </Button>
                    </Box>

                    <Box>
                        <Box marginY={"4"}>See available courses <Link to="/courses"><Button colorScheme={"cyan"} variant={"link"}>Click</Button>{" "} here</Link></Box>
                    </Box>

                </form>
            </VStack>

        </Container>
    )
}

export default Request