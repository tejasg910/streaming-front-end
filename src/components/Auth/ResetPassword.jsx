import { Box, Button, Container, FormLabel, Heading, Input, Link, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import React, { useState } from 'react'

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const params = useParams()
    console.log(params.token)

    return (
        <Container h={"95vh"}>
            <VStack h={"full"} justifyContent="center" spacing={"16"}>
                <Heading children={"Forgot password"} />
                <form style={{ width: "100%" }}>
                    <Box marginY={"4"}>
                        <FormLabel htmlFor='password' children={"Set new password"} />
                        <Input required id='password' value={password} onChange={(e) => { setPassword(e.target.value) }}
                            placeholder={"password"}
                            type={"password"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                        />

                    </Box>

                    <Button my={"4"} type={"submit"} colorScheme={"cyan"}>Next</Button>

                    <Box marginY={"4"}>New User?  <Link to="/register"><Button colorScheme={"cyan"} variant={"link"}>Sign Up</Button>{" "} here</Link></Box>
                </form>
            </VStack>
        </Container>
    )
}

export default ResetPassword