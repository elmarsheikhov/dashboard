import React from "react";
import "./Settings.css";

function Settings() {
  return (
    <div className="settings">
      <h1 className="mb-5">Settings</h1>
      <div className="w-50">
        <h4 className="mb-5">Update your login information</h4>
        <div className="form">
          <div className="d-flex justify-content align-items-center mb-3">
            <label className="form_label">Name:</label>
            <input className="form-control w-75" />
          </div>
          <div className="d-flex justify-content align-items-center mb-3">
            <label className="form_label">Current Password:</label>
            <input className="form-control w-75" />
          </div>
          <div className="d-flex justify-content align-items-center mb-3">
            <label className="form_label">New Password:</label>
            <input className="form-control w-75" />
          </div>
          <div className="d-flex justify-content-end">
            {" "}
            <button className="btn btn-success "> Save </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
