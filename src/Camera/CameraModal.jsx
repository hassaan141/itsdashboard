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
            <button onClick={onClose}>Cancel</button>
            <button onClick={() => {
              // Logic to handle adding a new camera
              onClose(); // Close the modal after adding
            }}>Add Camera</button>
          </div>
        </div>
      </>
    );
  }

  export default AddCameraModal;
