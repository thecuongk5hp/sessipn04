import React from "react";

export default function CompanyDetail(props: any) {
  const { params } = props;
  return <div>company name: {params.companyName}</div>;
}