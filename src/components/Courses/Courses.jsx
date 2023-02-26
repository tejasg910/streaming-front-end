import { Button, Container, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { ErrorIcon, toast } from 'react-hot-toast'
import { SiTryitonline } from 'react-icons/si'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllCourses } from '../../redux/actions/course'
import { addToPlayList } from '../../redux/actions/profile'
import { loadUser } from '../../redux/actions/user'

const Course = ({ views, title, imageSrc, id, creator, description, loading, addToPlaylistHandler, lectureCount }) => {
    return (
        <VStack className='course' alignItems={["center", "flex-start"]}>
            <Image src={imageSrc} boxSize="60" objectFit={"contain"} />
            <Heading textAlign={["center", "left"]} maxW={"200px"} fontFamily={"sans-serif"}
                noOfLines={3}
                children={title}
                size={"sm"}
            />
            <Text children={description} noOfLines={2} />
            <HStack>
                <Text children={"creater: "} noOfLines={1} fontFamily={"body"} />
                <Text children={creator} noOfLines={1} fontWeight={"bold"} textTransform={"uppercase"} />



            </HStack>

            <Heading textAlign={"center"} size={"xs"} children={`Lectures count:  ${lectureCount}`} />
            <Heading textAlign={"center"} size={"xs"} children={`Views:  ${views}`} />
            <Stack direction={["column", "row"]}
                alignItems={"center"}>
                <Link to={`/course/${id}`} >
                    <Button colorScheme={"cyan"}
                        color={"white"}>
                        Watch Now
                    </Button>
                </Link>

                <Button isLoading={loading} variant={"ghost"} colorScheme={"yellow"} onClick={() => {
                    addToPlaylistHandler(id)
                }}>


                    Add to playlist
                </Button>

            </Stack>
        </VStack >
    )
}
const Courses = () => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("")

    const { loading, error, courses, message } = useSelector(state => state.course);
    const categories = [
        "Web Development",
        "Data Structures and Algorithm",
        "Android Development",
        "Data Science",
        "Machine Learning",
        "Artificial Intelligence",
        "Game Development"
    ]

    const addToPlaylistHandler = async (id) => {
        dispatch(addToPlayList(id));
        dispatch(loadUser())
        dispatch(getAllCourses(keyword, category))

    }

    useEffect(() => {
        try {
            if (error) {
                toast.error(error)
                dispatch({ type: "clearError" });
            }
            if (message) {
                toast.success(message);
                dispatch({ type: "clearMessage" });
            }



        } catch (error) {

        }
    }, [message, error, dispatch, keyword, category]);
    useEffect(() => {
        dispatch(getAllCourses(category, keyword))
    }, []);


    return (
        <Container minH={"95vh"} maxW={"container.lg"} padding="8">
            <Heading children="All Courses" m={"8"} />
            <Input value={keyword} onChange={(e) => { setKeyword(e.target.value) }} placeholder={"Search a Course"} type={"text"}
                focusBorderColor="cyan.400"
                borderColor={"blue"}



            />

            <HStack overflowX={"auto"} paddingY={"8"} css={{
                "&::-webkit-scrollbar": {
                    display: "none"
                }
            }}>
                {
                    categories.map((item, index) => (
                        <Button key={index} onClick={() => { setCategory(item) }} minW={"60"}>
                            <Text children={item} />
                        </Button>
                    ))
                }
            </HStack>
            <Stack direction={["column", "row"]} flexWrap="wrap" justifyContent={["flex-start", "space-evenly"]} alignItems={["center", "flex-start"]}>
                {!courses && <Heading mt="4" children="Courses Not Found" />}
                {courses && Array.isArray(courses) && courses.length > 0 ? (
                    courses.map(item => (
                        <Course
                            key={item._id}
                            title={item.title}
                            description={item.description}
                            views={item.views}
                            imageSrc={item.poster.url}
                            id={item._id}
                            creator={item.createdBy}
                            lectureCount={item.numOfVideos}
                            addToPlaylistHandler={addToPlaylistHandler}
                            loading={loading}
                        />
                    ))
                ) : (
                    <Heading mt="4" children="Courses Not Found" />
                )}


            </Stack>
        </Container>
    )
}

export default Courses