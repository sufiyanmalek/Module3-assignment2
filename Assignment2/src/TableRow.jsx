import React from "react";

const TableRow = (props) => {
  const data = props.data;
  console.log(data, "a");
  return (
    <tr>
      <td>
        <p>
          <strong>FullName: </strong>
          {data.first_name + " " + data.middle_name + " " + data.last_name}
        </p>
        <p>
          <strong>Email:</strong> {data.email}
        </p>
        <p>
          <strong>DOB:</strong> {data.DOB}
        </p>
        <p>
          <strong>Language:</strong> {data.selectLanguage}
        </p>
      </td>
      <td>
        <p>
          <strong>FullName: </strong> {data.Fatherfullname}
        </p>
        <p>
          <strong>Email:</strong> {data.Father_email}
        </p>
        <p>
          <strong>Education Qualification: </strong>
          {data.Father_education_qualification}
        </p>
        <p>
          <strong>Profession: </strong>
          {data.Father_profession}
        </p>
        <p>
          <strong>Designation:</strong> {data.Father_designation}
        </p>
        <p>
          <strong>Phone:</strong> {data.Father_phone}
        </p>
      </td>
      <td>
        <p>
          <strong>FullName: </strong> {data.Motherfullname}
        </p>
        <p>
          <strong>Email: </strong> {data.Mother_email}
        </p>
        <p>
          <strong>Education Qualification: </strong>{" "}
          {data.Mother_education_qualification}
        </p>
        <p>
          <strong>Profession: </strong> {data.Mother_profession}
        </p>
        <p>
          <strong>Designation:</strong> {data.Mother_designation}
        </p>
        <p>
          <strong>Phone:</strong> {data.Mother_phone}
        </p>
      </td>
      <td>
        <p>
          <strong>City:</strong> {data.city}
        </p>
        <p>
          <strong>State: </strong>
          {data.state}
        </p>
        <p>
          <strong>Country: </strong>
          {data.country}
        </p>
        <p>
          <strong>Pin: </strong> {data.pin}
        </p>
      </td>
      <td>
        <p>
          <strong>Relation : </strong>
          {data.relation}
        </p>
        <p>
          <strong>Number:</strong> {data.number}
        </p>
      </td>
    </tr>
  );
};

export default TableRow;
