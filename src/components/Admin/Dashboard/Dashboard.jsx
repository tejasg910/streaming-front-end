import { Box, Grid, Heading, HStack, Progress, Stack, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import cursor from "../../../assets/images/cursor.png"
import { getAdminStats } from '../../../redux/actions/admin'
import Sidebar from '../Sidebar'
import { DoughnutChart, LineChart } from './Chart'
import Loader from "../../layout/Loader/Loader"

const Bar = ({ title, value, profit }) => {
    return (
        <Box paddingY={"4"} paddingX={["0", "20"]}>
            <Heading size={"sm"} children={title} mb={"2"} />
            <HStack w={"full"} alignItems={"center"}>
                <Text children={profit ? "0%" : `-${value}%`} />
                <Progress w={"full"} value={profit ? value : 0} colorScheme={"cyan"} />
                <Text children={`${value > 100 ? value : 100}%`} />
            </HStack>
        </Box>
    )
}
const DataBox = ({ title, qty, qtyPercentage, profit }) => {
    return (
        <Box width={"10rem"}

            boxShadow={"-2px 0 10px rgba(107, 70, 193, 0.5)"} padding={"8"} borderRadius={"lg"}  >

            <Text children={title} />
            <HStack spacing={"6"}>
                <Text fontWeight={"bold"} fontSize={"2xl"} children={qty} />
                <HStack>

                    <Text children={`${qtyPercentage}%`} />
                    {profit ? <RiArrowUpLine color='green' /> :
                        <RiArrowDownLine color='red' />

                    }
                </HStack>
            </HStack>
        </Box >
    )
}



const Dashboard = () => {

    const dispatch = useDispatch();
    const { loading,

        usersCount,
        subscriptionCount,
        viewsCount,
        subscriptionPercentage,
        usersPercentage, viewsPercentage,
        subscriptionProfit,
        usersProfit,
        viewsProfit,
        stats,


    } = useSelector(state => state.adminStatus)
    useEffect(() => {
        dispatch(getAdminStats())
    }, []);

    return (
        <Grid css={{ cursor: `url(${cursor}), default` }} minHeight={"100vh"} templateColumns={["1fr", "1fr", "6fr 1fr"]}>


            {loading || !stats ? <Loader /> : (
                <Box

                    boxSizing={"border-box"}
                    paddingX={"16"} paddingY={["4", "10"]}
                >


                    <Text textAlign={"center"} opacity={"0.5"}>Last change was on {new Date(stats[11].createdAt).toLocaleString()} </Text>
                    <Heading children={"Dashboard"} marginLeft={["0", "16"]} marginBottom={["16"]} textAlign={["center", "left"]} />
                    <Stack
                        direction={["column", "row"]}
                        minHeight={"24"}
                        justifyContent={"space-evenly"}
                        flexWrap={"wrap"}
                        spacing={"4"}
                    >
                        <DataBox title="views" qty={viewsCount} qtyPercentage={viewsPercentage} profit={viewsProfit} />
                        <DataBox title="Users" qty={usersCount} qtyPercentage={usersPercentage} profit={usersProfit} />
                        <DataBox title="Subscription" qty={subscriptionCount} qtyPercentage={subscriptionPercentage} profit={subscriptionProfit} />


                    </Stack>

                    <Box margin={["0", "16"]}
                        borderRadius={"lg"}
                        padding={["0", "16"]}
                        marginTop={["4", "16"]}
                        boxShadow={"-2px 0 10px rgba(107, 70, 193, 0.5)"} >

                        <Heading textAlign={["center", "left"]} size={"md"} children={"Views Graph"} paddingTop={["8", "0"]} marginLeft={["0", "16"]} />
                        {/* Line graph here  */}

                        <LineChart dataArray={stats.map(item => item.views)} />
                    </Box>


                    <Grid templateColumns={["1fr", "2fr 1fr"]}>
                        <Box padding={"4"} >
                            <Heading children={"Progress Bar"} textAlign={["center", "left"]} size={"md"} marginLeft={["0", "16"]} my={"8"} />
                            <Box>
                                <Bar profit={viewsProfit} title="Views" value={viewsPercentage} />
                                <Bar profit={usersProfit} title="Users" value={usersPercentage} />
                                <Bar profit={subscriptionProfit} title="Subscription" value={subscriptionPercentage} />

                            </Box>

                        </Box>
                        <Box p={['0', '16']} boxSizing="border-box">


                            <Heading textAlign={"center"} size={"md"} marginBottom={["4"]} children={"Users"} />
                            <DoughnutChart users={[subscriptionCount, usersCount - subscriptionCount]} />

                        </Box>
                    </Grid>


                </Box>
            )

            }

            <Sidebar />
        </Grid>
    )
}

export default Dashboard