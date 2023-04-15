import React from "react";

const EmergencyContectList = () => {
  return (
    <div className="card">
      <div className="card-header">Emergency Contact List</div>
      <div className="card-body d-grid gap-3">
        <div className="row">
          <div className="col-12">
            <label htmlFor="relation">Relation</label>
            <input
              type="text"
              name="relation"
              id="relation"
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label htmlFor="number">Number</label>
            <input
              type="text"
              name="number"
              id="number"
              className="form-control"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContectList;
