import { Box, Button, Grid, Heading, HStack, Tab, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { RiDeleteBin7Fill, RiGridLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import cursor from "../../../assets/images/cursor.png"
import { deleteUser, getUsers, updateUserRole } from '../../../redux/actions/admin'
import Sidebar from '../Sidebar'

import { toast } from 'react-hot-toast'
import { createBrowserHistory } from "history";
import { useNavigate } from "react-router-dom";
import { loadUser } from '../../../redux/actions/user'
const Users = ({ user }) => {
    const { users, loading, error, message } = useSelector(state => state.admin)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deleteUserHandler = (_id) => {

        dispatch(deleteUser(_id))
    }

    const updateHandler = async (_id) => {
        await dispatch(updateUserRole(_id))

        if (user._id === _id) {
            navigate("/profile");
            dispatch(loadUser())
        }
    }
    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });

        }

        dispatch(getUsers());
    }, [dispatch, error, message]);

    return (
        <Grid css={{ cursor: `url(${cursor}), default` }} minHeight={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>

            <Box padding={["0", "16"]} overflowX={"auto"}>
                <Heading textTransform={"uppercase"}
                    children={"All users"}
                    my={"16"}
                    textAlign={['center', 'left']} />

                <TableContainer width={['100vw', 'full']}>
                    <Table variant={"simple"} size={"lg"} >
                        <TableCaption>All available users</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Id</Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th>Role</Th>
                                <Th>Subscription</Th>
                                <Th isNumeric>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                users && users.map((item) => {
                                    return <Row loading={loading} key={item._id} item={item} deleteUserHandler={deleteUserHandler} updateHandler={updateHandler} />
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>


            <Sidebar />
        </Grid>
    )
}

export default Users


function Row({ item, updateHandler, deleteUserHandler, loading }) {
    return (
        <Tr>
            <Td>
                #{item._id}
            </Td>
            <Td>
                {item.name}
            </Td>
            <Td>
                {item.email}
            </Td>
            <Td>
                {item.role}
            </Td>
            <Td>
                {item.subscription && item.subscription.status === "active" ? "Active" : "Not Active"}
            </Td>
            <Td isNumeric>
                <HStack justifyContent={"flex"}
                >
                    <Button isLoading={loading} onClick={() => { updateHandler(item._id) }} variant={"outline"} color={"purple.500"}>Change Role</Button>
                    <Button isLoading={loading} onClick={() => { deleteUserHandler(item._id) }} color={"red"}><RiDeleteBin7Fill /></Button>
                </HStack>
            </Td>
        </Tr>
    )
}