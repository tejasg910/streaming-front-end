import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../../redux/actions/user';


const Forgot = () => {
    const { error, message, loading } = useSelector(state => state.profile)
    const [email, setEmail] = useState("");
    const dispatch = useDispatch()
    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(forgotPassword(email));


    }

    useEffect(() => {

        try {
            if (error) {
                toast.error(error)
                dispatch({ type: "clearError" });
            }
            if (message) {
                toast.success(message)

                dispatch({ type: "clearMessage" })
            }
        } catch (error) {
            toast.error(error.message);
        }


    }, [dispatch, error, message]);

    return (
        <Container h={"95vh"}>
            <VStack h={"full"} justifyContent="center" spacing={"16"}>
                <Heading children={"Forgot password"} />
                <form onSubmit={submitHandler} style={{ width: "100%" }}>
                    <Box marginY={"4"}>
                        <FormLabel htmlFor='email' children={"Email Address"} />
                        <Input required id='email' value={email} onChange={(e) => { setEmail(e.target.value) }}
                            placeholder={"abc@gmail.com"}
                            type={"email"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                        />

                    </Box>

                    <Button isLoading={loading} my={"4"} type={"submit"} colorScheme={"cyan"}>Next </Button>


                </form>
            </VStack>
        </Container>
    )
}

export default Forgot