import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const ChangePassword = () => {
    const [oldPassword, setOldPassworld] = useState("");
    const [newPassword, setNewPassword] = useState("");

    return (
        <Container paddingY={"16"} minH={"90vh"}>
            <form
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
                        <Button w={"full"} colorScheme={"cyan"} type={"submit"}>Save</Button>

                    </Box>
                </VStack>
            </form>
        </Container>
    )
}

export default ChangePassword
