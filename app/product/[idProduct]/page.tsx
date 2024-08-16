"use client";
import React from 'react'
interface Product{
    idProduct:string;
}
interface Props{
    params: Product
}
/*
    components trong nextjs có 2 loại
    1. client component
        chạy được ở môi trường trình duyệt tức là môi trường window
    2. server component
        chỉ chạy được trong môi trường server
    mặc định khi tạo function thì nó mặc định là server component
 */
export default function page(props:Props) {
    console.log("giá trị props", props);
    // dungf destructoring
    const {params} = props;
  return (
    <div>Trang chi tiết sản phẩm
        id sản phẩm : {params.idProduct}
    </div>
  )
}
