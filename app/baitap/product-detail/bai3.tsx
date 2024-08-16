"use client";
import React from 'react'
interface Product{
    idProduct:string;
}
interface Props{
    params: Product
}
export default function page(props:Props) {
    console.log("giá trị props", props);
    const {params} = props;
  return (
    <div>Trang chi tiết sản phẩm
        product id : {params.idProduct} 123
    </div>
  )
}