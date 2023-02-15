import { Box, Button, FormControl, FormLabel, Heading, Input, Text, useToast } from "@chakra-ui/react"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../store/Auth/Auth.actions";
const initialState={
    email:"",
    password:""
}
export const Login=()=>{
    const [creds,setCreds]=useState(initialState)
    const dispatch=useDispatch()
    const toast=useToast()
    const navigate=useNavigate()

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setCreds({...creds,[name]:value})
    }
    const handleSubmit=()=>{
        dispatch(login(creds)).then((res)=>{
            console.log(res);
            if(res.data=="not verified"){
                toast({
                    title: 'Invalid Credentials',
                    description: "Wrong Credential please enter correct details",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                  })
            }
            else{

                  toast({
                    title: 'Login Successful',
                    description: "Your login is successfull",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                  })
                  navigate("/")
            }
        })
    }
    return (
        <>
        <Heading>Login</Heading>
       <Box m={"auto"} maxW={"40%"}>
                <FormControl>
                    <FormLabel>Email address</FormLabel>
                    <Input name="email" value={creds.email||""} onChange={handleChange} type='email' />
                </FormControl>
                <FormControl mb={"15px"}>
                    <FormLabel>Enter Password</FormLabel>
                    <Input name="password" value={creds.password ||""} onChange={handleChange} type='password' />
                </FormControl>
                <Button onClick={handleSubmit} w={"100%"} >Login</Button>
            </Box>
        </>
    )
}