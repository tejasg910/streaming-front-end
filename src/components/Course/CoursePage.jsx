import { Box, Grid, Heading, Text, UnorderedList, useEditable, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import introVideo from "../../assets/videos/introvideo.mp4"
import { useParams } from "react-router-dom"
import { getCourseLectures } from '../../redux/actions/course';
import { Navigate } from "react-router-dom"
import Loader from '../layout/Loader/Loader';
import { RiHeartAddFill } from 'react-icons/ri';
const CoursePage = ({ user }) => {

    const [lectureNUmber, setLectureNumber] = useState(0);
    const { lectures, loader } = useSelector(state => state.course)


    const dispatch = useDispatch();
    const params = useParams();


    useEffect(() => {
        dispatch(getCourseLectures(params.id))


    }, [dispatch, params.id]);

    if (user.subscription === undefined && user.role !== "admin") {
        return <Navigate to={"/subscribe"} />

    }



    return loader ? <Loader />
        : (
            <Grid minHeight={"90vh"} templateColumns={["1fr", "1fr", "3fr 1fr"]}>

                {
                    lectures && lectures.length > 0 ? (
                        <>
                            <Box  >


                                <video width={["100%"]}
                                    autoPlay
                                    muted
                                    controls
                                    controlsList="nodownload  noremoteplayback"
                                    disablePictureInPicture
                                    src={lectures[lectureNUmber].video.url}
                                ></video>
                                <Heading m={"4"} children={`#${lectureNUmber + 1} ${lectures[lectureNUmber].title}`} />

                                <Heading m={"4"} children={"Description"} />
                                <Text m={"4"} children={lectures[lectureNUmber].description} />
                            </Box>

                            <VStack >
                                {
                                    lectures.map((item, index) => {
                                        return (
                                            <button onClick={() => { setLectureNumber(index) }} style={{ width: "100%", padding: "1rem", textAlign: 'center', margin: "0", borderBottom: "1px solid rgba(0,0,0,0.2)", }} key={item._id}><Text noOfLines={1} children={`#${index + 1} ${item.title}`} /></button>
                                        )
                                    })
                                }
                            </VStack>
                        </>

                    )
                        : <Heading children="No lectures" />
                }


            </Grid>
        )

}

export default CoursePage



