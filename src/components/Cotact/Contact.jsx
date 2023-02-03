import { Box, Button, Container, FormLabel, Heading, Input, Textarea, useDisclosure, VStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { contact } from '../../redux/actions/other';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const { loading, message, error } = useSelector(state => state.other)

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(contact(name, email, text));

    }

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch({ type: "clearError" })
        }
        if (message) {
            toast.success(message)
            dispatch({ type: "clearMessage" })
        }

    }, [error, message, dispatch]);
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
                        <Textarea required id='message' value={message} onChange={(e) => { setText(e.target.value) }}
                            placeholder={"Message"}
                            type={"text"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                        />

                    </Box>



                    <Box>

                        <Button isLoading={loading} onClick={handleSubmit} my={"4"} type={"submit"} colorScheme={"cyan"}>Send </Button>
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