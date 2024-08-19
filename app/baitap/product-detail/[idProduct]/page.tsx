"use client";
import React from "react";

export default function ProductDetail(props: any) {
  const { params } = props;

  return <div>product id: {params.idProduct} </div>;
}