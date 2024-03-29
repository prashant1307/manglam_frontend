import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Divider, Flex, Image, Spacer, Text, SimpleGrid, Container, useToast } from "@chakra-ui/react"
import { BiRupee } from "react-icons/bi"
export const ProductInfo=()=>{
    const [data,setData]=useState()
    const params=useParams()
useEffect(()=>{
    fetch(`http://localhost:8080/product/${params.id}`)
    .then((res)=>res.json())
    .then((res)=>{
        console.log(res)
        setData(res)
    })
},[])

const postProduct=()=>{
    try {
        fetch("http://localhost:8080/cart/items",{
            method:"POST",
            body:JSON.stringify({"productID":params.id}),
            headers:{
                "Content-type": "application/json; charset=UTF-8",
                "access_token":""
            }
        })
        .then(response=>response.json())
        .then()
    } catch (e) {
        
    }
}

return (
    <>
            
            <Box paddingLeft='50px' paddingRight="50px" paddingTop="40px" paddingBottom="40px">
                {/* <Flex> */}
                <SimpleGrid columns={[1,1,3,3]} gap="0px">
                    <Container  w="300px"  padding="20px" >
                        <Box borderRadius="5px" padding="10px" border="1px solid grey">
                            <Image  h="150px" maxW="100%" margin="auto" src={data?.img1} />
                        </Box>
                        <Flex gap="15px"  marginTop="10px">
                            <Box borderRadius="5px" padding="10px" border="1px solid grey">
                                <Image margin="auto" boxSize="100px" src={data?.img2} />
                            </Box>
                            <Box borderRadius="5px" padding="10px" border="1px solid grey">
                                <Image margin="auto" boxSize="100px" src={data?.img3} /></Box>
                        </Flex>
                        <Text marginTop="10px" color="grey" fontSize="12px">Non Returnable</Text>
                    </Container>
                    <Container w={["300px","450px"]}  padding="25px" >

                        <Text fontWeight="bold" color="rgb(79, 88, 94)" fontSize={["20px","25px"]} fontFamily="sans-serif">{data?.title}</Text>
                        <Text fontWeight="semibold" color="rgb(16,132,126)" fontSize={["15px","20px"]} fontFamily="sans-serif">{data?.ancestor[1]}</Text>
                        <Flex padding="20px">
                            <Box>
                                <Flex alignItems="center" >

                                    <BiRupee fontSize="40px" />
                                    <Text fontWeight="bold"  fontSize="20px">{data?.mrp}</Text>
                                    <Text marginLeft="15px" marginRight="5px" fontSize="15px">MRP-</Text>
                                    <Text fontSize="15px" marginRight="20px" textDecorationLine="line-through">{data?.strike}</Text>
                                    <Flex w="100%" alignItems="center" paddingLeft="10px" color="white" borderRadius="10px" bg="rgb(249,140,142)"  >
                                        <BiRupee fontSize="15px" />
                                        <Text w="45px" >{Math.floor(data?.strike-data?.mrp)} off</Text>
                                    </Flex>
                                </Flex>
                                <Text fontSize="15px" color="grey">Inclusive of all taxes</Text>
                                <Flex>
                                    <Text marginRight="7px">Delivery by</Text>
                                    <Text fontWeight="bold"> 27 Dec - 28 Dec</Text>
                                </Flex>

                            </Box>
                            <Spacer />
                           
                        </Flex>
                        <Box>
                                <Button  _hover={{ bg: "teal.300" }} color="white" bg="rgb(16,132,126)">Add To Cart</Button>
                            </Box>
                    </Container>
                    <Container w="260px"  paddingLeft="10px" paddingRight="10px" paddingTop="100px">
                        <Text marginBottom="20px" fontSize="18px" color="rgb(79,88,94)">Please add item(s) to proceed</Text>
                        <Button   _hover={{ bg: "rgb(149,149,100)" }}  w="100%" color="white" bg="rgb(149,149,149)">View Cart {">"}</Button>
                    </Container>
                </SimpleGrid>
                {/* </Flex> */}
                <Divider marginBottom="20px" marginTop="20px" orientation='horizontal' />
                <Text fontWeight="bold" color="rgb(79, 88, 94)" fontSize="25px" fontFamily="sans-serif">Shop by Categories</Text>
                 <section >
                
             
            </section>
            </Box>
    </>
)
}