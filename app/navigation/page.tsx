import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>menu thanh điều hướng
        <Link href={"/navigation/about"}>about</Link>
        <Link href={"/navigation/news"}>news</Link>
    </div>
  )
}
