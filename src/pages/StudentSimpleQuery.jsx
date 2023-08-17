import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import TableMapper from "../components/TableMapper";
const StudentSimpleQuery = () => {
  let arr = [];
  const location = useLocation();
  console.log("inside link1", location.state);
  arr.push(location.state.data);
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <p>Name: {location.state.data.name}</p>
      <p>Father Name: {location.state.data.fathername}</p>
      <p>Mother Name: {location.state.data.mothername}</p>
      <p>district: {location.state.data.district}</p>
      <TableMapper data={arr} />
    </div>
  );
};

export default StudentSimpleQuery;
