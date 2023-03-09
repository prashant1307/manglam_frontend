import { Box, Flex, GridItem, Heading, Image, SimpleGrid, Skeleton, Stack, Text } from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../store/Products/products.action";
import { BiRupee } from "react-icons/bi";

import { Triangle } from 'react-loader-spinner';
import { Link } from "react-router-dom";

export const ProductsPage = () => {
    const { loading, data, error } = useSelector((store) => store.products)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProducts("http://localhost:8080/product?limit=14"))
    }, [])

    return (

        <>
            
                {loading ?
                    <Box w={"100px"} m="auto" border={"1px solid"} >
                        <Triangle
                            height="180"
                            width="180"
                            color="#4fa94d" 
                            ariaLabel="triangle-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </Box> :
                    <SimpleGrid w="100%" marginBottom="40px" marginTop="40px" columns={[1, 2, 3, 3]} gap={6}>
                    {data?.map((el) => (
                        <Link key={el._id} to={`/product/${el._id}`}>
                        <GridItem key={el._id} h="220px" borderRadius="10px" alignItems="center" padding="15px" paddingBottom='10px' border="1px solid gray" w='100%'>
                            <Image m='auto' h="100px" maxW="100%" src={el.img1} />
                            <Text marginTop="20px" whiteSpace="nowrap" w={["160px", "160px", "200px", "200px"]} overflow="hidden" textOverflow="ellipsis" textAlign="left" fontWeight="bold" color="rgb(79, 88, 94)">{el.title}</Text>
                            <Flex marginTop="8px" alignItems="center" >
                                <BiRupee fontSize="20px" />
                                <Text fontWeight="medium" marginRight="20px" fontSize="20px">{el.mrp}</Text>
                                <Flex alignItems="center" color="white" borderRadius="10px" bg="rgb(249,140,142)"  >
                                    <BiRupee fontSize="15px" />
                                    <Text w="55px" >{Math.floor(el.strike - el.mrp)} off</Text>
                                </Flex>
                            </Flex>
                            {/* <Text textAlign="left">MRP {el.mrp}</Text> */}
                        </GridItem>
                        </Link>
                        
                    ))}
            </SimpleGrid>
                 }
        </>

    )
}
