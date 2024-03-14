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
               <select >
                <option value="" disabled selected>Select your option</option>
                <option value="fruit">Camera 5</option>
                <option value="vegetable">Camera 6</option>
                <option value="meat">Camera 7</option>
                <option value="meat">Camera 8</option>
              </select>
            </div>
            <h3>Monitor</h3>
            <div className="MonitorCheckbox">
            <label><input className="label" type="checkbox"/>Select All</label>
            <label><input className="label" type="checkbox"/>Traffic Congestion</label>
            <label><input className="label" type="checkbox"/>Road Accidents</label>
            <label><input className="label" type="checkbox"/>Near Misses</label>
            <label><input className="label" type="checkbox"/>Pedestrian Flow</label>
            <label><input className="label" type="checkbox"/>Bicycle Traffic</label>
            <label><input className="label" type="checkbox"/>Emergency Vehicles</label>
            <label><input className="label" type="checkbox"/>Public Transport</label>
            </div>
            <button className='btn'onClick={onClose}>Cancel</button>
            <button className='btn' onClick={() => { onClose();}}>Add Camera</button>
          </div>
        </div>
      </>
    );
  }

  export default AddCameraModal;
