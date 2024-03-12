import React from "react";
import "./CameraModal.css";


function AddCameraModal({ show, onClose }) {
    if (show) return null;
  
    return (
      <>
        <div className="modal-backdrop" onClick={onClose} />
        <div className="modal-container">
          <div className="modal-content">
            <h2 className="">Add New Camera</h2>
            {/* Form fields and submit logic here */}
            <p>Please select the type of camera and the specific traffic conditions you would like to monitor in the camera feed.</p>
            <h3>Camera Name</h3>
            <div>
              <select>
                <option value="fruit">Camera 1</option>
                <option value="vegetable">Camera 2</option>
                <option value="meat">Camera 3</option>
              </select>
            </div>
            <h3>Select Type of Camera</h3>
            <div className="CameraCheckbox">
            <input className="label" type="checkbox"/>Pan-Tilt-Zoom Camera
            {/* <input className="label" type="checkbox"/>Fixed Surveillance Camera
            <input className="label" type="checkbox"/>Thermal Imaging Camera
            <input className="label" type="checkbox"/>360 Camera */}
            <input className="label" type="checkbox"/>Other
            </div>

            <h3>Monitor</h3>
            <div className="MonitorCheckbox">
            <input className="label" type="checkbox"/>Select All
            <input className="label" type="checkbox"/>Traffic Congestion
            {/* <input className="label" type="checkbox"/>Road Accidents
            <input className="label" type="checkbox"/>Near Misses
            <input className="label" type="checkbox"/>Pedestrian Flow
            <input className="label" type="checkbox"/>Bicycle Traffic
            <input className="label"type="checkbox"/>Emergency Vehicles
            <input className="label" type="checkbox"/>Public Transport */}
            </div>
            <button className='btn'onClick={onClose}>Cancel</button>
            <button className='btn' onClick={() => { onClose();}}>Add Camera</button>
          </div>
        </div>
      </>
    );
  }

  export default AddCameraModal;
