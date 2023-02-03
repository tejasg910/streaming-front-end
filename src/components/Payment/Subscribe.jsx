import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { buySubscription } from '../../redux/actions/user';
import { server } from '../../redux/store';
import logo from "../../assets/images/logo.png"

const Subscribe = ({ user }) => {

    const dispatch = useDispatch();
    const [key, setKey] = useState("");
    const { loading, error, subscriptionId } = useSelector(state => state.subscription)
    const subscribeHandler = async () => {
        const { data } = await axios.get(`${server}/razorpaykey`);

        setKey(data.key);
        dispatch(buySubscription())
    }


    useEffect(() => {
        if (error) {
            toast.error(error)
        }
        dispatch({ type: "clearError" })

        if (subscriptionId) {
            console.log(subscriptionId)
            const openPopUp = () => {
                const options = {
                    key,
                    name: 'CourseBundler',
                    description: 'Get access to all premium content',
                    image: logo,
                    subscription_id: subscriptionId,
                    callback_url: `${server}/paymentverification`,
                    prefill: {
                        name: user.name,
                        email: user.email,
                        contact: '',
                    },
                    notes: {
                        address: '6 pack programmer at youtube',
                    },
                    theme: {
                        color: '#FFC800',
                    },
                }
                const razor = new window.Razorpay(options);
                razor.open();
            }
            openPopUp()
        }
    }, [error, dispatch, user.name, user.email, key, subscriptionId]);

    return (
        <Container h={"90vh"} p={"16"}>
            <Heading children={"Welcome"} marginY={"8"} textAlign={"center"} />
            <VStack boxShadow={
                "lg"
            } alignItems={"stretch"} borderRadius={"lg"} spacing={"0"}>
                <Box bg={"cyan"} padding={"4"} css={{ borderRadius: "8px 8px 0 0" }} >
                    <Text children={`Pro pack - ₹299.00`} />
                </Box>
                <Box p="4">
                    <VStack textAlign={"center"} paddingX={"8"} mt={"4"} spacing={"8"}>
                        <Heading color={"green.500"} children={"₹299.00 only"} size={"md"} />
                        <Text children={`Join pro pack and get access to all content`} />
                    </VStack>
                    <Button isLoading={loading} onClick={subscribeHandler} my={"8"} width={"full"} color={"Background"} colorScheme={"cyan"}>Buy Now</Button>
                </Box>

                <Box bg={"green.400"} padding={"4"} css={{ borderRadius: "0 0 8px 8px" }}>
                    <Heading children={"100% Refund on cancellation"} size={"sm"} color={"white"} textTransform={"uppercase"} />

                    <Text children={"Terms and conditions apply"} fontSize={"xs"} color={"white"} />
                </Box>
            </VStack>
        </Container>
    )
}

export default Subscribe