import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profile';
import { resetPassword } from '../../redux/actions/user';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const ResetPassword = () => {
    const { error, message, loading } = useSelector(state => state.profile)
    const navigate = useNavigate()
    const [password, setPassword] = useState("");
    const params = useParams()

    const dispatch = useDispatch()
    const submitHandler = async (e) => {
        e.preventDefault();
        await dispatch(resetPassword(params.token, password));


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
                navigate("/login")
            }
        } catch (error) {
            toast.error(error.message);
        }


    }, [dispatch, error, message]);
    return (
        <Container h={"95vh"}>
            <VStack h={"full"} justifyContent="center" spacing={"16"}>
                <Heading children={"Reset password"} />
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

                    <Button isLoading={loading} my={"4"} type={"submit"} colorScheme={"cyan"}>Change</Button>

                    <Box marginY={"4"}>Back to <Link to="/login"><Button colorScheme={"cyan"} variant={"link"}>login</Button>{" "} here</Link></Box>
                </form>
            </VStack>
        </Container>
    )
}

export default ResetPassword