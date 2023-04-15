import React from "react";
import TableRow from "./TableRow";

const Table = (props) => {
  const data = props.data;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Student Details</th>
            <th>Father Details</th>
            <th>Mother Details</th>
            <th>Address</th>
            <th>Emergency Contact </th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => {
            return <TableRow key={index} data={e} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
