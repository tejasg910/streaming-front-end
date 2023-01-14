import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Container h={"95vh"}>
            <VStack h={"full"} justifyContent="center" spacing={"16"}>
                <Heading children={"welcome to stream"} />
                <form style={{ width: "100%" }}>
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
                        <FormLabel htmlFor='password' children={"Password"} />
                        <Input required id='password' value={password} onChange={(e) => { setPassword(e.target.value) }}
                            placeholder={"Password"}
                            type={"password"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                        />

                    </Box>
                    <Button my={"4"} type={"submit"} colorScheme={"cyan"}>Sign in</Button>

                    <Box>
                        <Link to={"/forgetpassword"}><Button fontSize={"sm"} variant={"link"} marginY={"4"} colorScheme={"cyan"}>Forgot password</Button></Link>
                    </Box>
                    <Box marginY={"4"}>New User?  <Link to="/register"><Button colorScheme={"cyan"} variant={"link"}>Sign Up</Button>{" "} here</Link></Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Login