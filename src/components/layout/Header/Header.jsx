import React from 'react'
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
import { RiMenu5Fill, RiLogoutBoxLine, RiDashboardFill } from "react-icons/ri"
import { Button } from '@chakra-ui/button'
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal'
import { useDisclosure } from '@chakra-ui/react-use-disclosure'
import { HStack, VStack } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
function LinkButton({ url = "/", title = "home" }) {
    return (<Link to={url}>
        <Button variant={"ghost"}>
            {title}
        </Button>

    </Link>)
}
const Header = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const isAuthenticated = true;
    const user = { role: "admin" }
    const logOutHandler = () => {
        console.log('log out')
    }
    return (
        <>
            <ColorModeSwitcher />
            <Button onClick={onOpen} colorScheme={"cyan"} color="white" rounded={"full"} position="fixed" height={"12"} width={"12"} top={"6"} left={"6"}>
                <RiMenu5Fill />

            </Button>

            <Drawer isOpen={isOpen} onClose={onClose} placement={"left"}>
                <DrawerOverlay backdropFilter={"blur(5px)"} />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth={"1px"}>
                        COURSES
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack spacing={"4"} alignItems={"flex-start"}>
                            <LinkButton url="/" title="Home" />
                            <LinkButton url="/courses" title="Courses" />
                            <LinkButton url="/request" title="Request a course" />
                            <LinkButton url="/contact" title="Contact us" />
                            <LinkButton url="/about" title="About" />

                            <HStack justifyContent={"space-evenly"} position="absolute" bottom={"2rem"} width={"80%"}>
                                {isAuthenticated ? (<>

                                    <VStack>
                                        <HStack>

                                            <Link to={"/profile"}><Button colorScheme={"cyan"} variant={"ghost"} >Profile</Button></Link>
                                            <Button variant={"ghost"} onClick={logOutHandler}>

                                                <RiLogoutBoxLine />
                                                Log out</Button>

                                        </HStack>

                                        {user && user.role === "admin" && <Link to={"/admin/dashboard"} >
                                            <Button colorScheme={"pink"} variant={"ghost"}><RiDashboardFill style={{ margin: "4px" }} /> Dashboard </Button></Link>}
                                    </VStack>

                                </>) : (<>
                                    <Link to={"/login"}><Button colorScheme={"cyan"} color="white">Login</Button></Link>
                                    <p>or</p>
                                    <Link to={"/register"}><Button colorScheme={"cyan"} color="white" >Sign up</Button></Link>

                                </>)}
                            </HStack>

                        </VStack>
                    </DrawerBody>
                </DrawerContent>

            </Drawer>
        </>
    )
}



export default Header



