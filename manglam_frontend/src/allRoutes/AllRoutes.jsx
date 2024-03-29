import { Route, Routes } from "react-router-dom"
import { Cart } from "./Cart"
import { Home } from "./Home"
import { Login } from "./Login"
import { ProductInfo } from "./ProductInfo"
import { ProductsPage } from "./Products"
import { Signup } from "./Signup"

export const AllRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/products" element={<ProductsPage/>}/>
            <Route path="/product/:id" element={<ProductInfo/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    )
}