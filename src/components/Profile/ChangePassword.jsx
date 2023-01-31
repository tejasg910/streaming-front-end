import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profile';


const ChangePassword = () => {
    const [oldPassword, setOldPassworld] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const dispatch = useDispatch()
    const submitHandler = e => {
        e.preventDefault();

        dispatch(changePassword(oldPassword, newPassword));
    };

    const { loading, message, error } = useSelector(state => state.profile)

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
        <Container paddingY={"16"} minH={"90vh"}>
            <form onSubmit={submitHandler}
            >
                <Heading children={"Change Password"}
                    textTransform={"uppercase"}
                    my={"16"} textAlign={["center", "left"]} />
                <VStack>

                    <Box marginY={"4"}>
                        <FormLabel htmlFor='password' children={"Old Password"} />
                        <Input required id='password' value={oldPassword} onChange={(e) => { setOldPassworld(e.target.value) }}
                            placeholder={"Enter Old Password"}
                            type={"password"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                        />

                    </Box>
                    <Box marginY={"4"}>
                        <FormLabel htmlFor='newpassword' children={"New Password"} />
                        <Input required id='newpassword' value={newPassword} onChange={(e) => { setNewPassword(e.target.value) }}
                            placeholder={"Enter New Password"}
                            type={"password"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                        />

                    </Box>
                    <Box >
                        <Button isLoading={loading} w={"full"} colorScheme={"cyan"} type={"submit"}>Save</Button>

                    </Box>
                </VStack>
            </form>
        </Container>
    )
}

export default ChangePassword
