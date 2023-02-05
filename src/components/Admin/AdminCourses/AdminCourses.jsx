import { Box, Button, Grid, Heading, HStack, Image, Tab, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { RiDeleteBin7Fill, RiGridLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import cursor from "../../../assets/images/cursor.png"
import { getAllCourses, getCourseLectures } from '../../../redux/actions/course'
import Sidebar from '../Sidebar'
import CourseModal from './CourseModal'
const AdminCourses = () => {
    const dispatch = useDispatch();
    const { loading, lectures, courses, error } = useSelector(state => state.course)


    const { isOpen, onClose, onOpen } = useDisclosure();



    const deleteCourseHandler = (_id) => {
        console.log(_id)
    }

    const courseDetailsHandler = async (_id) => {
        await dispatch(getCourseLectures(_id))
        onOpen();
    }
    const deleteLectureHandler = (courseId, lectureId) => {
        console.log(courseId, lectureId);
    }
    const addLectureHandler = (e, coruseId, title, description, video) => {
        e.preventDefault();
    }




    useEffect(() => {
        dispatch(getAllCourses())

    }, [courses, loading, error, lectures]);
    return (
        <Grid css={{ cursor: `url(${cursor}), default` }} minHeight={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>

            <Box padding={["0", "8"]} overflowX={"auto"}>
                <Heading textTransform={"uppercase"}
                    children={"All Courses"}
                    my={"16"}
                    textAlign={['center', 'left']} />

                <TableContainer width={['100vw', 'full']}>
                    <Table variant={"simple"} size={"lg"} >
                        <TableCaption>All available courses</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Poster</Th>
                                <Th>TItle</Th>

                                <Th>Category</Th>
                                <Th>Creator</Th>


                                <Th isNumeric>Views</Th>
                                <Th isNumeric>Lectures</Th>
                                <Th isNumeric>Action</Th>

                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                courses.map((item) => {
                                    return <Row key={item._id} item={item} deleteCourseHandler={deleteCourseHandler} courseDetailsHandler={courseDetailsHandler} />
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
                <CourseModal addLectureHandler={addLectureHandler} isOpen={isOpen} onClose={onClose} id={"40390052"} courseTitle={"intro to css"} deleteLectureHandler={deleteLectureHandler} lectures={lectures} />
            </Box>
            <Sidebar />
        </Grid>
    )
}




function Row({ item, courseDetailsHandler, deleteCourseHandler }) {
    return (
        <Tr>
            <Td>
                #{item._id}
            </Td>
            <Td>
                <Image src={item.poster.url} />
            </Td>
            <Td>
                {item.title}
            </Td>
            <Td textTransform={"uppercase"}>
                {item.category}
            </Td>
            <Td> {item.creator}</Td>
            <Td isNumeric> {item.views}</Td>
            <Td isNumeric> {item.numOfVideos}</Td>




            <Td isNumeric>
                <HStack justifyContent={"flex"}
                >
                    <Button onClick={() => { courseDetailsHandler(item._id) }} variant={"outline"} color={"purple.500"}>View Lecture</Button>
                    <Button onClick={() => { deleteCourseHandler(item._id) }} color={"red"}><RiDeleteBin7Fill /></Button>
                </HStack>
            </Td>
        </Tr>
    )
}

export default AdminCourses