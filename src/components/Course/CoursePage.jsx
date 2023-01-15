import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introVideo from "../../assets/videos/introvideo.mp4"

const CoursePage = () => {
    const [lectureNUmber, setLectureNumber] = useState(0);
    const lectures = [{
        _id: "29040283065",
        title: "this is title1",
        description: "this is description",
        video: {
            url: "url",
        }
    },
    {
        _id: "2904028302",
        title: "this is title2",
        description: "this is description",
        video: {
            url: "url",
        }
    }, {
        _id: "29040283012",
        title: "this is title3",
        description: "this is description",
        video: {
            url: "url",
        }
    }]
    return (
        <Grid minHeight={"90vh"} templateColumns={["1fr", "1fr", "3fr 1fr"]}>
            <Box  >


                <video width={["100%"]}
                    autoPlay
                    muted
                    controls
                    controlsList="nodownload  noremoteplayback"
                    disablePictureInPicture
                    src={introVideo}
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

        </Grid>
    )
}

export default CoursePage



