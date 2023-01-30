import { Box, Button, Grid, Heading, HStack, Tab, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { RiDeleteBin7Fill, RiGridLine } from 'react-icons/ri'
import cursor from "../../../assets/images/cursor.png"
import Sidebar from '../Sidebar'
const Users = () => {
    const users = [{
        _id: "43929309",
        name: "tejas",
        role: "admin",
        subscription: {
            status: "active"
        },
        email: "tejasgiri910@gmail.com"
    }]
    const deleteUserHandler = (_id) => {
        console.log(_id)
    }

    const updateHandler = (_id) => {
        console.log(_id)
    }


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
                                users.map((item) => {
                                    return <Row key={item._id} item={item} deleteUserHandler={deleteUserHandler} updateHandler={updateHandler} />
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


function Row({ item, updateHandler, deleteUserHandler }) {
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
                {item.subscription.status === "active" ? "Active" : "Not Active"}
            </Td>
            <Td isNumeric>
                <HStack justifyContent={"flex"}
                >
                    <Button onClick={() => { updateHandler(item._id) }} variant={"outline"} color={"purple.500"}>Change Role</Button>
                    <Button onClick={() => { deleteUserHandler(item._id) }} color={"red"}><RiDeleteBin7Fill /></Button>
                </HStack>
            </Td>
        </Tr>
    )
}