import React from 'react'
import { ColorModeSwitcher } from "../../../ColorModeSwitcher"
import { RiMenu5Fill, RiLogoutBoxLine, RiDashboardFill } from "react-icons/ri"
import { Button } from '@chakra-ui/button'
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal'
import { useDisclosure } from '@chakra-ui/react-use-disclosure'
import { HStack, VStack } from '@chakra-ui/layout'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../../../redux/actions/user'

function LinkButton({ url = "/", title = "home", onclose }) {
    return (<Link onClick={onclose} to={url}>
        <Button variant={"ghost"}>
            {title}
        </Button>

    </Link>)
}
const Header = ({ isAuthenticated = false, user }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch = useDispatch();

    const logOutHandler = () => {


        onClose()
        dispatch(logOut())
    }
    return (
        <>
            <ColorModeSwitcher />
            <Button onClick={onOpen} zIndex={10} colorScheme={"cyan"} color="white" rounded={"full"} position="fixed" height={"12"} width={"12"} top={"2"} left={"6"}>
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
                            <LinkButton onclose={onClose} url="/" title="Home" />
                            <LinkButton onclose={onClose} url="/courses" title="Courses" />
                            <LinkButton onclose={onClose} url="/request" title="Request a course" />
                            <LinkButton onclose={onClose} url="/contact" title="Contact us" />
                            <LinkButton onclose={onClose} url="/about" title="About" />

                            <HStack justifyContent={"space-evenly"} position="absolute" bottom={"2rem"} width={"80%"}>
                                {isAuthenticated ? (<>

                                    <VStack>
                                        <HStack>

                                            <Link onClick={onClose} to={"/profile"}><Button colorScheme={"cyan"} variant={"ghost"} >Profile</Button></Link>
                                            <Button variant={"ghost"} color={"red.500"} onClick={() => {
                                                logOutHandler();
                                                onClose()
                                            }}>

                                                <RiLogoutBoxLine />
                                                Log out</Button>

                                        </HStack>

                                        {user && user.role === "admin" && <Link onClick={onClose} to={"/admin/dashboard"} >
                                            <Button colorScheme={"pink"} variant={"ghost"}><RiDashboardFill style={{ margin: "4px" }} /> Dashboard </Button></Link>}
                                    </VStack>

                                </>) : (<>
                                    <Link onClick={onClose} to={"/login"}><Button colorScheme={"cyan"} color="white">Login</Button></Link>
                                    <p>or</p>
                                    <Link onClick={onClose} to={"/register"}><Button colorScheme={"cyan"} color="white" >Sign up</Button></Link>

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



