import React from "react";

export default function UserId(props: any) {
  const { params } = props;

  return <div>User id: {params.idUser}</div>;
}