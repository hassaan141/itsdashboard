import React, { useState, useEffect } from 'react';
import './App.css'; 

function VideoPlayer() {
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);
  const [showVideo3, setShowVideo3] = useState(false);
  const [showVideo4, setShowVideo4] = useState(false);
  const [showText, setText] = useState(true);
  const activeVideos = [showVideo1, showVideo2, showVideo3, showVideo4].filter(Boolean).length;
  const boxClass = `box ${activeVideos === 1 ? "full" : activeVideos === 2 ? "half" : "quarter"}`;
  



  useEffect(() => {
    if (!showVideo1 && !showVideo2 && !showVideo3 && !showVideo4) {
      setText(true);
    } else {
      setText(false);
    }
  }, [showVideo1, showVideo2, showVideo3, showVideo4]);

  return (
    <div>
      <h1 className="titlemain">ITS DEMO SYSTEM</h1>
      <div className="gTNrZz">
      <h2>Live Monitoring List</h2>
      <div className='Patrols'>
        <ul className = "Headerlist">
          <li>Camera </li>
          <li>Type </li>
          <li>Time </li>
          <li>Duration </li>
        </ul>
        <div className='ScrollableList'>
          <ul>
          <li>
              <a href="#" onClick={(e) => {
                e.preventDefault(); // Prevent the default action
                setShowVideo1(true);
                setText(false);
                }
                }>Camera1
              </a>
              <button onClick={(e) => {
                e.preventDefault(); // Prevent the default action
                setShowVideo1(false);
                } 
              }> X </button>
            </li>
            <li>Type1 </li>
            <li>Time1 </li>
            <li>Duration1 </li>
          </ul>
          <ul>
            <li>
              <a href="#" onClick={(e) => {
                e.preventDefault(); // Prevent the default action
                setShowVideo2(true);
                setText(false);
                }}>Camera2
              </a>
              <button onClick={(e) => {
                e.preventDefault(); // Prevent the default action
                setShowVideo2(false);
                setText(false);
                } 
              }> X </button>
            </li>
            <li>Type2</li>
            <li>Time2</li>
            <li>Duration2</li>
          </ul>
          <ul>
          <li>
              <a href="#" onClick={(e) => {
                e.preventDefault(); // Prevent the default action
                setShowVideo3(true);
                setText(false);
                }}>Camera3
              </a>
              <button onClick={(e) => {
                e.preventDefault(); // Prevent the default action
                setShowVideo3(false);
                } 
              }> X </button>
            </li>
            <li>Type3</li>
            <li>Time3</li>
            <li>Duration3</li>
          </ul>
          <ul>
          <li>
              <a href="#" onClick={(e) => {
                e.preventDefault(); // Prevent the default action
                setShowVideo4(true);
                setText(false);
                }}>Camera4
              </a>
              <button onClick={(e) => {
                e.preventDefault(); // Prevent the default action
                setShowVideo4(false);
                } 
              }> X </button>
            </li>
            <li>Type4</li>
            <li>Time4</li>
            <li>Duration4</li>
          </ul>
      </div>
      </div>
      </div>
      
      <div  className={`box ${boxClass}`}>
        {showText && (
        <div className='noCamera'>
          <h2 className='videotext'> Please Select A Video.</h2>
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
            </video>s
          </div>
        )}

        {showVideo3 && (
          <div className='video3 div3 noSpacing'>
            <video width="100%" height="100%" autoPlay>
              <source src={`${process.env.PUBLIC_URL}/vid3.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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

          


  </div>
  ) 
}

export default VideoPlayer;
