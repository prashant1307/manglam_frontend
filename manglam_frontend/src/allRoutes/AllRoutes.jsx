import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { Login } from "./Login"
import { ProductsPage } from "./Products"
import { Signup } from "./Signup"

export const AllRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
        </Routes>
    )
}