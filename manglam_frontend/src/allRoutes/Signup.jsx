import { Box, Button, FormControl, FormHelperText, FormLabel, Heading, Input, useToast } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const initialState={
    name:"",
    email:"",
    password:""
}
export const Signup = () => {
    const [creds,setCreds]=useState(initialState)
    const navigate=useNavigate()
    const toast=useToast()
    const handleChange=(e)=>{
          const {name,value}=e.target;
          setCreds({...creds,[name]:value})
    }

    const Postuser=()=>{
        axios({
            url:`http://localhost:8080/user/signup`,
            method:"POST",
            data:creds
        }).then((res)=>{
            console.log(res);
            toast({
                title: 'Signup Successful',
                description: "Account created successfully",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top'
              })
            navigate("/login")
        })
    }
    return (
        <>
        <Heading>Signup</Heading>
            <Box m={"auto"} maxW={"40%"}>
                <FormControl mb={"15px"}>
                    <FormLabel>Enter Name</FormLabel>
                    <Input name="name" value={creds.name||""} onChange={handleChange} type='text' />
                </FormControl>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input name="email" value={creds.email||""} onChange={handleChange} type='email' />
                    <FormHelperText mb={"15px"} textAlign={"left"}>We'll never share your email.</FormHelperText>
                </FormControl>
                <FormControl mb={"15px"}>
                    <FormLabel>Enter Password</FormLabel>
                    <Input name="password" value={creds.password ||""} onChange={handleChange} type='password' />
                </FormControl>
                <Button w={"100%"} onClick={Postuser}>Signup</Button>
            </Box>
        </>
    )
}