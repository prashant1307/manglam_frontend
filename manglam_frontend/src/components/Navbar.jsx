import { Button, Flex, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <Flex justifyContent={"space-between"} maxW={"100%"} border={"2px solid"} py="5px"  >
                <Flex>
                <Image ml={"20px"} maxW={"30px"} src="data:image/png;base64,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" />
                <Text fontFamily={"cursive"} ml={"20px"}><Link to={"/"}>Manglam</Link></Text>
                </Flex>
                <Flex mr={"20px"}>
                    <Text><Link to="/products">Products</Link></Text>
                    <Menu >
                        <MenuButton >
                            Account
                        </MenuButton>
                        <MenuList>
                            <MenuItem><Link to={"/signup"}><Text >Signup</Text></Link></MenuItem>
                            <MenuItem>  <Link to={"/login"}>Login</Link></MenuItem>
                        </MenuList>
                    </Menu>
                    <Text><Link to={"/cart"}>Cart</Link></Text>
                </Flex>
            </Flex>
        </>
    )
}