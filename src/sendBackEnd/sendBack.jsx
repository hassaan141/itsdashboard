import React, { useEffect } from 'react';
import { useData } from './dataContext'; // Adjust the import path as necessary

function VideoFrameSender({ videoElement }) {
  const { setCenterData } = useData(); // Correctly extract setCenterData from useData

  const sendFrame = () => {
    if (!videoElement || videoElement.readyState !== 4) {
      console.log("Video is not ready for frame capture.");
      return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(blob => {
      const formData = new FormData();
      formData.append('frame', blob, 'frame.jpg');
      formData.append('video_id', 'unique_video_id');

      fetch('http://localhost:5000/process', {
        method: 'POST',
        body: formData,
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Assuming 'data' is the object that contains the 'center' array
        if (data.center && Array.isArray(data.center)) {
          setCenterData(data.center); // Update the context state with the new center data
        } else {
          console.error('Unexpected response format:', data);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }, 'image/jpeg');
  };

  useEffect(() => {
    const intervalId = setInterval(sendFrame, 1000); // Adjust as needed
    return () => clearInterval(intervalId);
  }, [videoElement, setCenterData]); // Include setCenterData as a dependency

  return null;
}

export default VideoFrameSender;

