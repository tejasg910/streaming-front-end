import { Button, Container, Grid, Heading, Image, Input, Select, VStack } from '@chakra-ui/react'
import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { useDispatch, useSelector } from 'react-redux';
import cursor from "../../../assets/images/cursor.png";
import { createAdminCourse } from '../../../redux/actions/admin';
import { fileUploadCss } from '../../Auth/Register';
import Sidebar from '../Sidebar';
const CreateCourse = () => {
    const fileUploadStyle = {
        "&::file-selector-button": fileUploadCss
    }
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [createdBy, setCreatedBy] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [imagePrev, setImagePrev] = useState("");


    const categories = [
        "Web Development",
        "Data Structures and Algorithm",
        "Android Development",
        "Data Science",
        "Machine Learning",
        "Artificial Intelligence",
        "Game Development"
    ]

    const onImageHandler = (e) => {
        const file = e.target.files[0];

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImagePrev(reader.result)
            setImage(file)
        }
    }
    const dispatch = useDispatch()
    const { loading, error, message } = useSelector(state => state.admin)
    const submitHandler = (e) => {
        e.preventDefault();


        const myForm = new FormData();

        myForm.append('title', title);
        myForm.append('description', description);
        myForm.append('category', category);
        myForm.append('file', image);
        myForm.append('createdBy', createdBy);


        dispatch(createAdminCourse(myForm));

    }

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch({ type: "clearError" })

        }
        if (message) {
            toast.success(message)
            dispatch({ type: "clearMessage" })

        }

    }, [error, message]);
    return (

        <Grid css={{ cursor: `url(${cursor}), default` }} minHeight={"100vh"} templateColumns={["1fr", "5fr 1fr"]}>

            <Container paddingY={"16"}  >
                <form onSubmit={submitHandler}>

                    <Heading textTransform={"uppercase"} children={"Create course"} my={"16"} textAlign={"center"} />
                    <VStack margin={"auto"} spacing={"8"}>

                        <Input id='name' value={title} onChange={(e) => { setTitle(e.target.value) }}
                            placeholder={"Title"}
                            type={"Text"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                        />
                        <Input margin={"4"} id='description' value={description} onChange={(e) => { setDescription(e.target.value) }}
                            placeholder={"Description"}
                            type={"text"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                        />
                        <Input margin={"4"} id='createby' value={createdBy} onChange={(e) => { setCreatedBy(e.target.value) }}
                            placeholder={"Creator Name"}
                            type={"Text"}
                            borderColor={"blue"}
                            focusBorderColor={"cyan.500"}
                        />

                        <Select focusBorderColor='blue.300' value={category} onChange={(e) => { setCategory(e.target.value) }} >

                            <option value="">Category</option>
                            {categories.map((item, index) => {
                                return (
                                    <option key={index} value={item}>{item}</option>

                                )
                            })}
                        </Select>


                        <Input required
                            placeholder={"chooseAvatar"}
                            type={"file"}
                            borderColor={"blue"}
                            focusBorderColor={"blue.300"}
                            accept={"image/*"}
                            css={fileUploadStyle}
                            onChange={onImageHandler}
                        />


                        {imagePrev && <Image src={imagePrev} boxSize="64" objectFit={'contain'} />}

                        <Button isLoading={loading} w="full" colorScheme={["purple"]} type="submit" >Create</Button>

                    </VStack>

                </form>
            </Container>
            <Sidebar />
        </Grid>
    )

}

export default CreateCourse