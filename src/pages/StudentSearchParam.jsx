import React from "react";
import { useSearchParams } from "react-router-dom";
const StudentSearchParam = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  let name = searchParams.get("name");
  let fathername = searchParams.get("fathername");
  let mothername = searchParams.get("mothername");
  let district = searchParams.get("district");
  console.log(name, fathername, mothername, district);
  return (
    <div>
      StudentSearchParam
      <p>Name: {name}</p>
      <p>Father Name: {fathername}</p>
      <p>Mother Name: {mothername}</p>
      <p>District: {district}</p>
    </div>
  );
};

export default StudentSearchParam;
