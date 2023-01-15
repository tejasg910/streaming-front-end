import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const UpdateProfile = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <Container paddingY={"16"} minH={"90vh"}>
            <form
            >
                <Heading children={"Update Profile"}
                    textTransform={"uppercase"}
                    my={"16"} textAlign={["center", "left"]} />
                <VStack>



                    <Input margin={"4"} id='name' value={userName} onChange={(e) => { setUserName(e.target.value) }}
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



                    <Button w={"full"} colorScheme={"cyan"} type={"submit"}>Save</Button>


                </VStack>
            </form>
        </Container>
    )
}

export default UpdateProfile