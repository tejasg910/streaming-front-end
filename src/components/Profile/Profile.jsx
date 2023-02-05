import { Avatar, Button, Container, Heading, HStack, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure, VStack } from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { RiDeleteBin7Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromPlayList, updateProfilePicture } from '../../redux/actions/profile'
import { cancelSubscription, loadUser } from '../../redux/actions/user'
import { fileUploadCss } from '../Auth/Register'
const Profile = ({ user }) => {
    const dispatch = useDispatch()

    const { loading, message, error } = useSelector(state => state.profile)

    const { loading: subscriptionLoading, message: subscriptionMessage, error: subscriptionError } = useSelector(state => state.subscription)
    const removeFromPlaylistHandler = async (id) => {
        await dispatch(removeFromPlayList(id))
        dispatch(loadUser())
    }

    const changeImageSubmitHandler = async (e, image) => {

        e.preventDefault();
        const myForm = new FormData();

        myForm.append('email', user.email)
        myForm.append('file', image);

        await dispatch(updateProfilePicture(myForm));
        dispatch(loadUser())
    }

    useEffect(() => {


        if (error) {
            toast.error(error)
            dispatch({ type: "clearError" });
        }

        if (message) {
            toast.success(message)
            dispatch(loadUser())
            dispatch({ type: "clearMessage" })
        }
        if (subscriptionError) {
            toast.success(subscriptionError)

            dispatch({ type: "clearError" })
        }
        if (subscriptionMessage) {
            toast.success(subscriptionMessage)
            dispatch({ type: "clearMessage" })

        }


    }, [dispatch, error, message, subscriptionMessage, subscriptionError]);

    const { isOpen, onClose, onOpen } = useDisclosure();
    const cancelSubscriptionHandler = async () => {
        await dispatch(cancelSubscription())
        setTimeout(() => {
            dispatch(loadUser())
        }, 2000);
    }
    return (
        <Container padding={"8"} minH={"95vh"} maxW={"container.lg"}>
            <Heading children="profile" textTransform={"uppercase"} m={"8"} />
            <Stack
                justifyContent={"flex-start"} direction={["column", "row"]}
                alignItems={"center"}
                spacing={["8", "16"]} padding={"8"}
            >

                <VStack>
                    <Avatar boxSize={"48"} src={user.avatar.url} />
                    <Button isLoading={loading} onClick={onOpen} colorScheme={"cyan"} variant={"ghost"} children={"change photo"} />

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
                        <Text children={user.createdAt.split("T")[0]} />

                    </HStack>
                    {user.role !== "admin" && <HStack >
                        <Text children={"Subscription: "} fontWeight={"bold"} />
                        {user.subscription && user.subscription.status === "active" ? (<Button isLoading={subscriptionLoading} onClick={cancelSubscriptionHandler} colorScheme={"red"}>Cancel Subscription</Button>) :
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
                user.playlist.length > 0 && (
                    <Stack direction={["column", "row"]}

                        alignItems={"center"}
                        flexWrap={"wrap"}
                        padding={"4"}
                    >

                        {
                            user.playlist.map((item, index) => {
                                return (
                                    <VStack width={"48"} m="2" key={index} >
                                        <Image boxSize={"full"} objectFit={"contain"} src={item.poster} />
                                        <HStack>
                                            <Link to={`course/${item.course}`}>
                                                <Button colorScheme={"cyan"}>Watch Now </Button>

                                            </Link>

                                            <Button isLoading={loading} onClick={() => { removeFromPlaylistHandler(item.course) }}><RiDeleteBin7Fill /></Button>
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
    const { loading } = useSelector(state => state.profile)
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
                            <Button isLoading={loading} width={"full"} colorScheme={"cyan"} type={"submit"}>Change</Button>
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