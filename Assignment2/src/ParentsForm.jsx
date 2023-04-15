import React from "react";

const ParentsForm = ({ parent }) => {
  return (
    <div className="card">
      <div className="card-header">{parent}</div>

      <div className="card-body d-grid gap-3">
        <div className="row">
          <div className="col-12">
            <label htmlFor="fullname">FullName:</label>

            <input
              type="text"
              name={`${parent}fullname`}
              id="fullname"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label htmlFor="email">Email</label>

            <input
              type="text"
              name={`${parent}_email`}
              id="email"
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <label htmlFor="education_qualification">
              Education Qualification
            </label>

            <input
              type="text"
              name={`${parent}_education_qualification`}
              id="education_qualification"
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <label htmlFor="profession">Profession</label>

            <input
              type="text"
              name={`${parent}_profession`}
              id="profession"
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <label htmlFor="designation">Designation</label>

            <input
              type="text"
              name={`${parent}_designation`}
              id="designation"
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <label htmlFor="phone">Phone</label>

            <input
              type="text"
              name={`${parent}_phone`}
              id="phone"
              className="form-control"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParentsForm;
