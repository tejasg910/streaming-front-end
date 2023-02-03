import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';

const UpdateProfile = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const submitHandler = async e => {
        e.preventDefault();


        await dispatch(updateProfile(name, email));
        dispatch(loadUser())
        navigate("/profile")

    };

    const { error, message, loading } = useSelector(state => state.profile)

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
                <Heading children={"Update Profile"}
                    textTransform={"uppercase"}
                    my={"16"} textAlign={["center", "left"]} />
                <VStack>



                    <Input margin={"4"} id='name' value={name} onChange={(e) => { setName(e.target.value) }}
                        placeholder={"Enter Name"}
                        type={"Text"}
                        borderColor={"blue"}
                        focusBorderColor={"cyan.500"}
                    />



                    <Input margin={"4"} required id='email' value={email} onChange={(e) => { setEmail(e.target.value) }}
                        placeholder={"Enter Email"}
                        type={"text"}
                        borderColor={"blue"}
                        focusBorderColor={"cyan.500"}
                    />



                    <Button isLoading={loading} w={"full"} colorScheme={"cyan"} type={"submit"}>Save</Button>


                </VStack>
            </form>
        </Container>
    )
}

export default UpdateProfile