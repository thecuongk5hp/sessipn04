import React from "react";

export default function Post(props: any) {
  const { params } = props;

  return <div>danh sách bài viết của user id: {params.idUser}</div>;
}