import { Box, Button, Grid, Heading, HStack, Image, Tab, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure, useStatStyles } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { RiDeleteBin7Fill, RiGridLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import cursor from "../../../assets/images/cursor.png"
import { addLectures, deleteCourse, deleteLectures } from '../../../redux/actions/admin'
import { getAllCourses, getCourseLectures } from '../../../redux/actions/course'
import Sidebar from '../Sidebar'
import CourseModal from './CourseModal'
const AdminCourses = () => {

    const [courseTitle, setcourseTitle] = useState("");
    const [courseId, setCourseId] = useState("");

    const dispatch = useDispatch();
    const { loading, lectures, courses, error } = useSelector(state => state.course)

    const { loading: adminLoading, error: adminError, message: adminMessage } = useSelector(state => state.admin)



    const { isOpen, onClose, onOpen } = useDisclosure();



    const deleteCourseHandler = (_id) => {
        dispatch(deleteCourse(_id))

    }

    const courseDetailsHandler = async (_id, title) => {
        setcourseTitle(title)
        setCourseId(_id)
        await dispatch(getCourseLectures(_id))
        onOpen();
    }
    const deleteLectureHandler = async (lectureId) => {
        await dispatch(deleteLectures(courseId, lectureId))

        dispatch(getCourseLectures(courseId))
    }
    const addLectureHandler = async (e, courseId, title, description, video) => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('title', title)
        myForm.append('description', description)
        myForm.append('file', video)
        await dispatch(addLectures(courseId, myForm))
        dispatch(getCourseLectures(courseId));

    }




    useEffect(() => {
        dispatch(getAllCourses())

    }, [adminMessage, adminError]);
    useEffect(() => {
        if (adminError) {
            toast.error(adminError)
            dispatch({ type: "clearError" })
        }
        if (adminMessage) {

            toast.success(adminMessage)
            dispatch({ type: "clearMessage" })
        }

    }, [adminError, adminMessage, dispatch]);


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
                                    return <Row key={item._id} item={item}
                                        loading={adminLoading}
                                        deleteCourseHandler={deleteCourseHandler} courseDetailsHandler={() => { courseDetailsHandler(item._id, item.title) }} />
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
                <CourseModal loading={loading} adminLoading={adminLoading} addLectureHandler={addLectureHandler} isOpen={isOpen} onClose={onClose} id={courseId} courseTitle={courseTitle} deleteLectureHandler={deleteLectureHandler} lectures={lectures} />
            </Box>
            <Sidebar />
        </Grid>
    )
}




function Row({ item, courseDetailsHandler, deleteCourseHandler, loading }) {
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
                    <Button isLoading={loading} onClick={() => { deleteCourseHandler(item._id) }} color={"red"}><RiDeleteBin7Fill /></Button>
                </HStack>
            </Td>
        </Tr>
    )
}

export default AdminCourses