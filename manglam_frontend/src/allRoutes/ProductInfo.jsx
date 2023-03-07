import { useEffect } from "react";
import { useParams } from "react-router-dom"

export const ProductInfo=()=>{
    const params=useParams()
    const id=params.id;

    useEffect(()=>{
        fetch(``)
    })

    return(
        <>
        <h1>{id}</h1>
        </>
    )
}