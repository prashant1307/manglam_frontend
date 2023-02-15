import { Box, Image } from "@chakra-ui/react"
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";
//import "../styles/HomeCarousel1.css"
export const Home=()=>{
    return (
     
        <Box bg={"teal"}>
           <Carousel interval={1500}>
            <Carousel.Item>
                <Box>
                    <Image m={"auto"} maxH="450px"
                        src="https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                        alt="First slide"
                    />
                </Box>              
            </Carousel.Item>
            <Carousel.Item>
                <Box>                 
                    <Image m={"auto"} maxH="450px"
                        src="https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                        alt="First slide"
                    />
                </Box>           
            </Carousel.Item>
            <Carousel.Item>
                <Box>
                    <Image  m={"auto"} maxH="450px"
                        src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFybXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                        alt="First slide"
                    />
                </Box>
            </Carousel.Item>
            
        </Carousel>
        
        </Box>
    )
}