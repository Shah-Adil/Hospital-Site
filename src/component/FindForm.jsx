import React from "react";

const FindForm = () => {
  return (
    <div className="find-form mb-5">
      <div className="container">
        <form action="#">
          <div className="find-form-select">
            <select name="Search disease, surgeons or hospital" id="1">
              <option value="Search disease, surgeons or hospital">
                Search disease, surgeons or hospital
              </option>
              <option value="Search disease, surgeons or hospital">
                Search disease, surgeons or hospital
              </option>
            </select>
            <select name="Search disease, surgeons or hospital" id="1">
              <option value="Location">Location</option>
              <option value="Location">Location</option>
            </select>
            <select name="Search disease, surgeons or hospital" id="1">
              <option value="Hospital">Hospital</option>
              <option value="hospital">Hospital</option>
            </select>
            <select name="Search disease, surgeons or hospital" id="1">
              <option value="Specialty">Specialtyl</option>
              <option value="Specialtyl">Specialty</option>
            </select>
          </div>
          <button type="submit">Search Now</button>
        </form>
      </div>
    </div>
  );
};

export default FindForm;
