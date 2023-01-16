import { Button, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiAddCircleFill, RiDashboardFill, RiEyeFill, RiPlayCircleFill, RiUser3Fill } from 'react-icons/ri'
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
const Sidebar = () => {
    const location = useLocation();
    return (
        <VStack spacing={"8"} alignItems={"start"} padding={"16"} boxShadow={"-2px 0 10px rgba(107, 70, 193, 0.5)"}>
            <LinkButton url={"dashboard"} text={"Dashboard"} Icon={RiDashboardFill} active={location.pathname === "/admin/dashboard"} />
            <LinkButton url={"courses"} text={"Courses"} Icon={RiEyeFill} active={location.pathname === "/admin/courses"} />
            <LinkButton url={"users"} text={"Users"} Icon={RiUser3Fill} active={location.pathname === "/admin/users"} />
            <LinkButton url={"createcourse"} text={"Create Course"} Icon={RiPlayCircleFill} active={location.pathname === "/admin/createcourse"} />




        </VStack>
    )
}

export default Sidebar


function LinkButton({ url, Icon, text, active }) {

    return (
        <Link to={`/admin/${url}`} >
            <Button fontSize={"larger"} colorScheme={active ? "purple" : null}>
                <Icon style={{ margin: "4px" }} /> {text}
            </Button>
        </ Link>
    )
}