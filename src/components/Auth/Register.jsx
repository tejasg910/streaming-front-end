import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import React, { useState } from 'react'

export const fileUploadCss = {
    cursor: "pointer",
    marginLeft: "-5%",
    width: "110%",
    border: "none",
    height: "100%",
    color: "purple",
    backgroundColor: "white"
}
const fileUploadStyle = {
    "&::file-selector-button": fileUploadCss
}
const Register = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const [password, setPassword] = useState("");
    const [imagePrev, setImagePrev] = useState("");
    const [image, setImage] = useState("");



    const onImageHandler = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImagePrev(reader.result)
            setImage(file)
        }
    }



    return (
        <Container h={"full"}>
            <VStack h={"full"} justifyContent="center" spacing={"16"}>
                <Heading textTransform={"uppercase"} children={"Register for the stream"} />

                <form style={{ width: "100%" }} >
                    <Box marginY={"4"} display={"flex"} justifyContent={"center"}>
                        <Avatar src={imagePrev} size={"2xl"} />
                    </Box>
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
                        <FormLabel htmlFor='password' children={"Password"} />
                        <Input required id='password' value={password} onChange={(e) => { setPassword(e.target.value) }}
                            placeholder={"Password"}
                            type={"password"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                        />

                    </Box>
                    <Box marginY={"4"}>
                        <FormLabel htmlFor='chooseAvatar' children={"Choose Avatar"} />
                        <Input required id='chooseAvatar'
                            placeholder={"chooseAvatar"}
                            type={"file"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                            accept={"image/*"}
                            css={fileUploadStyle}
                            onChange={onImageHandler}
                        />

                    </Box>


                    <Button type={"submit"} colorScheme={"cyan"}>Sign Up</Button>

                    <Box >Already Registered?  <Link to="/login"><Button colorScheme={"cyan"} variant={"link"}>Login</Button>{" "} here</Link></Box>

                </form>
            </VStack>
        </Container>
    )
}

export default Register