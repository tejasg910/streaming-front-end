import { Box, Button, Container, FormLabel, Heading, Input, Textarea, VStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import React, { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");



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
                        <FormLabel htmlFor='message' children={"Message..."} />
                        <Textarea required id='message' value={message} onChange={(e) => { setMessage(e.target.value) }}
                            placeholder={"Message"}
                            type={"text"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                        />

                    </Box>



                    <Box>

                        <Button my={"4"} type={"submit"} colorScheme={"cyan"}>Send </Button>
                    </Box>

                    <Box>
                        <Box marginY={"4"}>Request new course  <Link to="/request"><Button colorScheme={"cyan"} variant={"link"}>Click</Button>{" "} here</Link></Box>
                    </Box>

                </form>
            </VStack>

        </Container>
    )
}

export default Contact