import React from "react";
import { Link, Flex, Button, Image, Img, HStack, Heading, Avatar } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const Navbar = ({ user, isAuthenticated }) => {
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
                {!isAuthenticated && <Button bg="transparent" border="1px">
                    Create account
                </Button>

                }
                {/* {isAuthenticated && <Avatar boxSize={"10"} src={user.avatar.url} marginTop={"-3"} /> }*/}
            </Box>

        </Flex >

    );
};

export default Navbar;
