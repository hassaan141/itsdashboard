import React, { useState, useEffect } from 'react';
import './video.styles.css'; 
import EventsMonitoring from '../Events/EventsMonitoring';
import Test from "../test.json"


function VideoPlayer() {
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showVideo3, setShowVideo3] = useState(false);
  const [showVideo4, setShowVideo4] = useState(false);
  const [showText, setText] = useState(true);
 
  const activeVideos = [showVideo1, showVideo2, showVideo3, showVideo4].filter(Boolean).length;
  const boxClass = `box ${activeVideos === 1 ? "full" : activeVideos === 2 ? "half" : "quarter"}`;

  const boundingBoxStyle = {
    backgroundColor:'transparent',

    position: 'relative',

    border: '2px solid red',
    // Directly use the values without template literals
    top: `${Test.data.bounding_box.top_left.y}px`,
    left: `${Test.data.bounding_box.top_left.x}px`,
    width: `${Test.data.bounding_box.bottom_right.x - Test.data.bounding_box.top_left.x}px`,
    height: `${Test.data.bounding_box.bottom_right.y - Test.data.bounding_box.top_left.y}px`
  };
  
  const eventsData = [
    { icon: '🚗', description: 'Camera 3 Detected Congestion', time: '15:20' },
    { icon: '🚨', description: 'Camera 6 Detected an Accident', time: '12:33' },
    { icon: '🔰', description: 'Camera 1 Detected a Near Miss', time: '9:50' },
  ];

  useEffect(() => {
    if (!showVideo1 && !showVideo2 && !showVideo3 && !showVideo4) {
      setText(true);
    } else {
      setText(false);
    }
  }, [showVideo1, showVideo2, showVideo3, showVideo4]);

  return (
    <div>
    
      <div className="gTNrZz">
       <h2>Camera Monitoring List</h2>
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

          <div className='buttoncontainer'>
            <button className='addbutton button'>Add Camera</button>
            <button className='editbutton button'>Edit</button>
            <button className='removebutton button'>Remove Camera</button>
          </div>
      </div>
      
      <div  className={`box ${boxClass}`}>
        {showText && (
        <div className='noCamera'>
          <h2 className='videotext'> Please Select A Video.</h2>
          <h6 className='videotext'> Note: For best usability, active camera displays have been limited to a maximum of four.</h6>
        </div>        
        )}


        {showVideo1 && (
          <div className='video1 div1 noSpacing'>
            <video width="100%" height="100%" autoPlay>
              <source src={`${process.env.PUBLIC_URL}/vid1.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {/* Repeat for other videos */}
        {showVideo2 && (
          <div className='video2 div2 noSpacing'>
            <video width="100%" height="100%" autoPlay>
              <source src={`${process.env.PUBLIC_URL}/vid2.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        {showVideo3 && (
          <div className='video3 div3 noSpacing'>
            <video width="100%" height="100%" autoPlay>
              <source src={`${process.env.PUBLIC_URL}/vid3.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div style={boundingBoxStyle}></div>
          </div>
        )}

        {showVideo4 && (
          <div className='video4 div4 noSpacing'>
            <video width="100%" height="100%" autoPlay>
              <source src={`${process.env.PUBLIC_URL}/vid4.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      <div className='eventMonitoring'>
       <EventsMonitoring events={eventsData} />
      </div>
  </div>
  ) 
}

export default VideoPlayer;
