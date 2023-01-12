import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import vg from '../../assets/images/bg.png';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import introVideo from '../../assets/videos/intro.mp4';
const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'column', 'row']}
          height="100%"
          justifyContent={['center', 'center', 'space-between']}
          alignItems="center"
          spacing={['16', '20', '44']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'center', 'flex-end']}
            spacing="8"
          >
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text
              fontSize={'2xl'}
              fontFamily="cursive"
              textAlign={['center', 'center', 'left']}
              children="Find Valuable Content At Reasonable Price"
            />
            <Link to="/courses">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="vector-graphics"
            boxSize={['44', '44', '44']}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>

      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children="OUR BRANDS"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          controls
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
          src={introVideo}
        ></video>
      </div>
    </section>
  );
};

export default Home;
