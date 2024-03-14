import React, { useState, useEffect, useRef } from 'react';
import './video.styles.css'; 
import EventsMonitoring from '../Events/EventsMonitoring';
import Test from "../test.json"
import AddCameraModal from "../Camera/CameraModal"
import VideoFrameSender from "../sendBackEnd/sendBack"; 
import { useData } from '../sendBackEnd/dataContext';

function VideoPlayer() {
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showVideo3, setShowVideo3] = useState(false);
  const [showVideo4, setShowVideo4] = useState(false);
  const [showText, setText] = useState(true);
  const [showAddCamera, setShowAddCamera] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [showDelete, setShowDelete] = useState(false); // New state for showing delete buttons

  // Managing rows in state
  const [rows, setRows] = useState([
    { id: 1, camera: "Camera1", monitor: "TC, AC, NM", intersection: "Dixie & Dundas", showVideo: showVideo1, setShowVideo: setShowVideo1 },
    { id: 2, camera: "Camera2", monitor: "TC, AC, NM", intersection: "Dixie & Dundas", showVideo: showVideo2, setShowVideo: setShowVideo2 },
    { id: 3, camera: "Camera3", monitor: "TC, AC, NM", intersection: "Dixie & Dundas", showVideo: showVideo3, setShowVideo: setShowVideo3 },
    { id: 4, camera: "Camera4", monitor: "TC, AC, NM", intersection: "Dixie & Dundas", showVideo: showVideo4, setShowVideo: setShowVideo4 },
  ]);
  const toggleShowDelete = () => {
    setShowDelete(!showDelete);
  };
  const deleteRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const toggleAddCamera = () => {
    setShowAddCamera(!showAddCamera);
  }
 
  const activeVideos = [showVideo1, showVideo2, showVideo3, showVideo4].filter(Boolean).length;
  const boxClass = `box ${activeVideos === 1 ? "full" : activeVideos === 2 ? "half" : "quarter"}`;

  let x,y = 0;
  useEffect(() => {
    x = useData[0]; // This will log the center coordinates array
    y = useData[1]; // This will log the center coordinates array
  }, [useData]);

  const dotStyle = {
    position: 'absolute',
    top: `${x}px`, 
    left: `${y}px`,
    width: '20px', // Fixed size of the dot
    height: '20px', // Fixed size of the dot
    backgroundColor: 'red',
    borderRadius: '50%', // Makes the dot circular
    transform: 'translate(-50%, -50%)' // Centers the dot on the coordinates
  };

  //export const useData = () => useContext(DataContext);

  const videoRefs = useRef([
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ]);
  
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

  const playVideo = (videoIndex) => {
    const videoElement = videoRefs.current[videoIndex].current;
    if (videoElement) {
      videoElement.play();
      setActiveVideo(videoElement); // Set the ref of the playing video as active
    }
  };

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
                {showDelete /*&& <th>Remove</th>} */}
            </tr>
        </thead>
        <tbody className='ScrollableList'>
              {rows.map((row, index) => (
                <tr key={row.id}>
                  <td>{row.camera}
                  <button className='xButton' onClick={(e) => {
                        e.preventDefault(); // Prevent the default action
                        if(row.id ===1) setShowVideo1(false);
                        if(row.id ===2) setShowVideo2(false);
                        if(row.id ===3) setShowVideo3(false);
                        if(row.id ===4) setShowVideo4(false);
                    }}> X </button>
                    <button className='yButton' onClick={(e) => {
                        e.preventDefault(); // Prevent the default action
                        playVideo(index);
                        if(row.id ===1) setShowVideo1(true);
                        if(row.id ===2) setShowVideo2(true);
                        if(row.id ===3) setShowVideo3(true);
                        if(row.id ===4) setShowVideo4(true);
                        setText(false);
                    }}> ✓ </button></td>
                  <td>{row.monitor}</td>
                  <td>{row.intersection}</td>
                  {showDelete && (
                    <td>
                      <button className='-Button' onClick={() => deleteRow(row.id)}> - </button>
                    </td>
                  )}
                </tr>
              ))}
         </tbody>
      </table>
          </div>

          <div className='buttoncontainer'>
            <button onClick={toggleAddCamera} className='addbutton button'>Add Camera</button>
            <button onClick={toggleShowDelete} className='removebutton button'>Remove Camera</button>
          </div>
      </div>
      
      <div  className={`box ${boxClass}`}>
        {showText && (
        <div className='noCamera'>
          <h2 className='videotext'> Please Select A Video.</h2>
          <h6 className='videotext'> Note: For best usability, active camera displays have been limited to a maximum of four.</h6>
        </div>        
        )}
        {showAddCamera && 
        <div className='overlay'>
          <div className='addCameraPopup'>
            <AddCameraModal onClose={toggleAddCamera} />
          </div>
        </div>
      }

        {/* Existing JSX */}
        {showVideo1 && (
        <div className='video1 div1 noSpacing' style={{position: 'relative', width: '640px', height:'360px'}} >
          <video ref={videoRefs.current[0]} width="100%" height="100%" autoPlay muted >
            <source src={`${process.env.PUBLIC_URL}/vid1.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video> 
          <div style={dotStyle}></div>
        </div>
        )}

        {showVideo2 && (
        <div className='video2 div2 noSpacing'>
          <video ref={videoRefs.current[1]} width="100%" height="100%" autoPlay muted>
            <source src={`${process.env.PUBLIC_URL}/vid2.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        )}

      {showVideo3 && (
        <div className='video3 div3 noSpacing'>
          <video ref={videoRefs.current[2]} width="100%" height="100%" autoPlay muted>
            <source src={`${process.env.PUBLIC_URL}/vid3.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        )}

        {showVideo4 && (
        <div className='video4 div4 noSpacing'>
          <video ref={videoRefs.current[3]} width="100%" height="100%" autoPlay muted>
            <source src={`${process.env.PUBLIC_URL}/vid4.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        )}      </div>

      <div className='eventMonitoring'>
       <EventsMonitoring events={eventsData} />
      </div>
      {activeVideo && <VideoFrameSender videoElement={activeVideo} />}
  </div>
  ) 
}

export default VideoPlayer;
