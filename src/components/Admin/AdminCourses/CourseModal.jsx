import { Box, Button, Grid, Heading, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, VStack } from '@chakra-ui/react'

import React, { useState } from 'react'
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../../Auth/Register';


const CourseModal = ({ isOpen, onClose, id, deleteLectureHandler, addLectureHandler, courseTitle, lectures, loading, adminLoading }) => {
    const fileUploadStyle = {
        "&::file-selector-button": fileUploadCss
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [videoPrev, setVideoPrev] = useState("");
    const [video, setVideo] = useState("");

    const changeVideoHandler = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setVideoPrev(reader.result)
            setVideo(file)
        }
    }

    const handleClose = () => {
        setTitle("");
        setVideoPrev("");
        setVideo("");
        setDescription("")
        onClose()
    }
    return (
        <Modal isOpen={isOpen} size={"full"} onClose={handleClose} scrollBehavior={"outside"}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader >{courseTitle}</ModalHeader>
                <ModalCloseButton />
                <ModalBody padding={"16"} >
                    <Grid templateColumns={["1fr", "3fr 1fr"]}>
                        <Box px={["0", "16"]}>
                            <Box my={"5"}>
                                <Heading children={courseTitle} />
                                <Heading children={`#${id}`} size={"sm"} opacity={0.4} />

                            </Box>
                            <Heading children={"Lecutres"} size={"lg"} />
                            {lectures && lectures.length > 0 ? lectures.map((item, i) => (
                                <VideoCard
                                    loading={adminLoading}
                                    key={i}
                                    title={item.title} description={item.description} num={i + 1} lectureId={item._id} courseId="48028023" deleteLectureHandler={() => {
                                        deleteLectureHandler(item._id)
                                    }}
                                />

                            )) :
                                <Heading children={"No lecture found"} />
                            }


                        </Box>
                        <Box>
                            <form onSubmit={e =>
                                addLectureHandler(e, id, title, description, video)
                            }>
                                <VStack spacing={"4"}>
                                    <Heading children={"add lecture"} size={"md"} textTransform={"uppercase"} />
                                    <Input focusBorderColor='purple.300' placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
                                    <Input focusBorderColor='purple.300' placeholder='Description' value={description} onChange={(e) => { setDescription(e.target.value) }} />



                                    <Input required
                                        placeholder={"chooseAvatar"}
                                        type={"file"}
                                        borderColor={"blue"}
                                        focusBorderColor={"blue.300"}
                                        accept={"video/mp4"}
                                        css={fileUploadStyle}
                                        onChange={changeVideoHandler}
                                    />

                                    {videoPrev && (
                                        <video src={videoPrev} controlsList="nodownload" controls></video>

                                    )}

                                    <Button isLoading={adminLoading} width={"full"} type={"submit"} color={"purple"}>Add lecture</Button>
                                </VStack>
                            </form>
                        </Box>
                    </Grid>

                </ModalBody>

                <ModalFooter><Button onClick={handleClose}>Close</Button></ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default CourseModal

function VideoCard({ title, description, num, lectureId, courseId, deleteLectureHandler, loading }) {
    return <Stack direction={["column", "row"]} my="8" borderRadius={"lg"} boxShadow={'0 0 10px rgba(107, 70, 193, 0.5)'}
        justifyContent={["flex-start", "space-between"]}
        padding={["4", "8"]}
    >

        <Box><Heading size={"sm"} children={`#${num} ${title}`} />
            <Text children={description} />
        </Box>
        <Button isLoading={loading} color={"red"} onClick={() => { deleteLectureHandler(courseId, lectureId) }}><RiDeleteBin7Fill /> </Button>

    </Stack>
}