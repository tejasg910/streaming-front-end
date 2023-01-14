import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'


const Forgot = () => {
    const [email, setEmail] = useState("");



    return (
        <Container h={"95vh"}>
            <VStack h={"full"} justifyContent="center" spacing={"16"}>
                <Heading children={"Forgot password"} />
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

                    <Button my={"4"} type={"submit"} colorScheme={"cyan"}>Reset Password </Button>


                </form>
            </VStack>
        </Container>
    )
}

export default Forgot