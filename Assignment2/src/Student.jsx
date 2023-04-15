import React from "react";
import { useState } from "react";
import Address from "./Address";
import EmergencyContectList from "./EmergencyContectList";
import FirstLanguage from "./FirstLanguage";
import ParentsForm from "./ParentsForm";
import Table from "./Table";

const Student = () => {
  const [dataArr, setDataArr] = useState([]);

  const [maindata, setMaindata] = useState({});
  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    const data = {
      [key]: value,
    };
    setMaindata({ ...maindata, ...data });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dataArr.push(maindata);
    setDataArr(dataArr);
    setMaindata({});
    event.target.reset();
  };
  return (
    <div>
      <form id="form-reset" onSubmit={onSubmit} action="#" onChange={onChange}>
        <div className="card container mx-auto p-0 mt-5">
          <div className="card-header">Student Form</div>
          <div className="card-body">
            <div className="d-grid gap-3 p-2">
              <div className="row">
                <div className="col-4">
                  <label htmlFor="first_name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="col-4">
                  <label htmlFor="middle_name" className="form-label">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="middle_name"
                    name="middle_name"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="col-4">
                  <label htmlFor="last_name" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="last_name"
                    name="last_name"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
              </div>
              <div className="row align-items-end">
                <div className="col-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    aria-describedby="emailHelp"
                    required
                  />
                </div>
                <div className="col-4">
                  <label htmlFor="DOB">Date of Brith</label>
                  <input
                    className="form-control"
                    type="date"
                    name="DOB"
                    id="DOB"
                    required
                  />
                </div>
                <div className="col-4">
                  <FirstLanguage />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Address />
                </div>
                <div className="col-6">
                  <EmergencyContectList />
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <ParentsForm parent="Father" />
                </div>
                <div className="col-6">
                  <ParentsForm parent="Mother" />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <button className="w-100 btn btn-primary" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <br />
      <br />
      <br />
      <Table data={dataArr} />
    </div>
  );
};

export default Student;
