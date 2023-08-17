import React from "react";
import Table from "react-bootstrap/Table";

const TableMapper = ({ data }) => {
  return (
    <div>
      <Table striped bordered hover className="text-center table-sm">
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Name</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            <th>District</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => (
            <tr key={key} className="text-center">
              {/* <td>{item.id}</td> */}
              <td>{item.name}</td>
              <td>{item.fathername}</td>
              <td>{item.mothername}</td>
              <td>{item.district}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TableMapper;
