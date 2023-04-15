import React from "react";

const Address = () => {
  return (
    <div className="card">
      <div className="card-header">Address</div>

      <div className="card-body d-grid gap-3">
        <div className="row">
          <div className="col-6">
            <label htmlFor="city">City</label>

            <input type="text" name="city" id="city" className="form-control" />
          </div>

          <div className="col-6">
            <label htmlFor="state">State</label>

            <input
              type="text"
              name="state"
              id="state"
              className="form-control"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <label htmlFor="country">Country</label>

            <input
              type="text"
              name="country"
              id="country"
              className="form-control"
            />
          </div>

          <div className="col-6">
            <label htmlFor="pin">Pin</label>

            <input type="number" name="pin" id="pin" className="form-control" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
