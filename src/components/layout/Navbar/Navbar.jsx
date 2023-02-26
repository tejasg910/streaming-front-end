import React from "react";
import { Link, Flex, Button, Image, Img, HStack, Heading, Avatar } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = ({ user, isAuthenticated }) => {
    const location = useLocation();
    const path = location.pathname;
    return (
        <Flex
            as="nav"
            alignItems={"center"}
            justify="space-between"
            wrap="wrap"
            padding="1.5rem 5rem"
            bg="teal.500"
            color="white"
            height="4rem"

        >



            <HStack marginTop={"-3"}>


                <Heading children="Welcome" size={"md"} />
            </HStack>
            <Box

            >
                {!isAuthenticated && !user && path !== "/register" && <NavLink to={"/register"}> <Button bg="transparent" marginTop={"-3"} display={["none", "block"]} border="1px">
                    Create account
                </Button></NavLink>

                }
                {isAuthenticated && <NavLink to={"/profile"}><Avatar boxSize={"10"} src={user.avatar.url} marginTop={"-3"} /></NavLink>}
            </Box>

        </Flex >

    );
};

export default Navbar;
