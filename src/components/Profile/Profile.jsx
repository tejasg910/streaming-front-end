import { Avatar, Button, Container, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'

import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { fileUploadCss } from '../Auth/Register'
const Profile = () => {
    const user = {
        name: "tejas",
        email: "tejasgiri910@gmail.com",
        createdAT: String(new Date().toISOString()),
        role: "user",
        subscription: {
            status: undefined
        },
        playList: [
            {
                course: "course name",
                poster: "https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_960_720.jpg"
            }
        ]
    }

    const removeFromPlaylistHandler = () => {

    }

    const changeImageSubmitHandler = (e, image) => {
        e.preventDefault();
        console.log(image)
    }

    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <Container padding={"8"} minH={"95vh"} maxW={"container.lg"}>
            <Heading children="profile" textTransform={"uppercase"} m={"8"} />
            <Stack
                justifyContent={"flex-start"} direction={["column", "row"]}
                alignItems={"center"}
                spacing={["8", "16"]} padding={"8"}
            >

                <VStack>
                    <Avatar boxSize={"48"} />
                    <Button onClick={onOpen} colorScheme={"cyan"} variant={"ghost"} children={"change photo"} />

                </VStack>
                <VStack spacing={"4"} alignItems={["center", "flex-start"]} >
                    <HStack >
                        <Text children={"Name: "} fontWeight={"bold"} />
                        <Text children={user.name} />

                    </HStack>
                    <HStack >
                        <Text children={"Email: "} fontWeight={"bold"} />
                        <Text children={user.email} />

                    </HStack>
                    <HStack >
                        <Text children={"Since: "} fontWeight={"bold"} />
                        <Text children={user.createdAT.split("T")[0]} />

                    </HStack>
                    {user.role !== "admin" && <HStack >
                        <Text children={"Subscription: "} fontWeight={"bold"} />
                        {user.subscription.status === "active" ? (<Button colorScheme={"red"}>Cancel Subscription</Button>) :
                            (<Link to={"/subscribe"}><Button colorScheme={"purple"}>Subscribe</Button></Link>)
                        }

                    </HStack>}


                    <Stack direction={["column", "row"]}

                        alignItems={"center"}

                    >
                        <Link to={"/updateprofile"}
                        ><Button colorScheme={"green"} >Update Profile</Button></Link>


                        <Link to={"/changepassword"}
                        ><Button variant={"unstyled"} color={"cyan.400"}>Change Password</Button></Link>
                    </Stack>
                </VStack>
            </Stack>


            <Heading children={"PlayList"} size={"md"} my={"8"}></Heading>
            {
                user.playList.length > 0 && (
                    <Stack direction={["column", "row"]}

                        alignItems={"center"}
                        flexWrap={"wrap"}
                        padding={"4"}
                    >

                        {
                            user.playList.map((item, index) => {
                                return (
                                    <VStack width={"48"} m="2" key={index} >
                                        <Image boxSize={"full"} objectFit={"contain"} src={item.poster} />
                                        <HStack>
                                            <Link to={`course/${item.course}`}>
                                                <Button colorScheme={"cyan"}>Watch Now </Button>

                                            </Link>

                                            <Button onClick={() => { removeFromPlaylistHandler(item.course) }}><RiDeleteBin7Fill /></Button>
                                        </HStack>
                                    </VStack>
                                )
                            })
                        }




                    </Stack>
                )
            }


            <ChangePhotoBox isOpen={isOpen} onClose={onClose} changeImageSubmitHandler={changeImageSubmitHandler} />
        </Container>
    )
}

export default Profile


function ChangePhotoBox({ isOpen, onClose, changeImageSubmitHandler }) {
    const [image, setImage] = useState("")
    const [imagePrev, setImagePrev] = useState("")

    const changeImage = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImagePrev(reader.result)
            setImage(file)
        }
    }

    const closeHandler = () => {
        onClose();
        setImagePrev("");
        setImage("")
    }
    return (
        <Modal isOpen={isOpen} onClose={closeHandler}>
            <ModalOverlay backdropFilter={"blur(10px)"} />
            <ModalContent>
                <ModalCloseButton />
                <ModalHeader>Change Photo</ModalHeader>
                <ModalBody>
                    <form onSubmit={(e) => { changeImageSubmitHandler(e, image) }}>
                        <VStack spacing={"8"}>
                            {imagePrev && <Avatar src={imagePrev} boxSize={"48"} />}
                            <Input onChange={changeImage} type={"file"} css={{ "&::file-selector-button": fileUploadCss }} />
                            <Button width={"full"} colorScheme={"cyan"} type={"submit"}>Change</Button>
                        </VStack>
                    </form>
                </ModalBody>
                <ModalFooter mr="3">
                    <Button onClick={closeHandler}>Cancel</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}