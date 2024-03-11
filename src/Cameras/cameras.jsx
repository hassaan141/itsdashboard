import React from 'react';
import './cameras.css'; // Assuming you have CSS specific to this component

function CameraMonitoringList({ setShowVideo1, setShowVideo2, setShowVideo3, setShowVideo4, setText }) {
  return (
    <div className='Patrols'>
      <table className="Headerlist">
        <thead>
          <tr>
            <th>Camera</th>
            <th>Monitor</th>
            <th>Intersection</th>
          </tr>
        </thead>
        <tbody className='ScrollableList'>
        <tr>
                <td>
                    <a href="#" onClick={(e) => {
                        e.preventDefault(); // Prevent the default action
                        setShowVideo1(true);
                        setText(false);
                    }}>Camera1
                    </a>
                    <button className='xButton' onClick={(e) => {
                        e.preventDefault(); // Prevent the default action
                        setShowVideo1(false);
                    }}> X </button>
                </td>
                <td>TC, AC, NM</td>
                <td>Dixie & Dundas</td>
            </tr>
            <tr>
                <td>
                    <a href="#" onClick={(e) => {
                        e.preventDefault(); // Prevent the default action
                        setShowVideo2(true);
                        setText(false);
                    }}>Camera2
                    </a>
                    <button className='xButton' onClick={(e) => {
                        e.preventDefault(); // Prevent the default action
                        setShowVideo2(false);
                        setText(false);
                    }}> X </button>
                </td>
                <td>TC, AC, NM</td>
                <td>Dixie & Dundas</td>
            </tr>
            <tr>
                <td>
                    <a href="#" onClick={(e) => {
                        e.preventDefault(); // Prevent the default action
                        setShowVideo3(true);
                        setText(false);
                    }}>Camera3
                    </a>
                    <button className='xButton' onClick={(e) => {
                        e.preventDefault(); // Prevent the default action
                        setShowVideo3(false);
                    }}> X </button>
                </td>
                <td>TC, AC, NM</td>
                <td>Dixie & Dundas</td>
            </tr>
            <tr>
                <td>
                    <a href="#" onClick={(e) => {
                        e.preventDefault(); // Prevent the default action
                        setShowVideo4(true);
                        setText(false);
                    }}>Camera4
                    </a>
                    <button className='xButton' onClick={(e) => {
                        e.preventDefault(); // Prevent the default action
                        setShowVideo4(false);
                    }}> X </button>
                </td>
                <td>TC, AC, NM</td>
                <td>Dixie & Dundas</td>
            </tr>
        </tbody>
      </table>
    </div>
    
  );
}

export default CameraMonitoringList;
