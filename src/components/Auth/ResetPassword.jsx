import { Box, Button, Container, FormLabel, Heading, Input, Link, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changePassword } from '../../redux/actions/profile';

const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const params = useParams()
    console.log(params.token)
    const dispatch = useDispatch()

    const submitHandler = e => {
        e.preventDefault();



    };

    return (
        <Container h={"95vh"}>
            <VStack h={"full"} justifyContent="center" spacing={"16"}>
                <Heading children={"Forgot password"} />
                <form onSubmit={submitHandler} style={{ width: "100%" }}>
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

                    <Box marginY={"4"}>Back to <Link to="/login"><Button colorScheme={"cyan"} variant={"link"}>login</Button>{" "} here</Link></Box>
                </form>
            </VStack>
        </Container>
    )
}

export default ResetPassword