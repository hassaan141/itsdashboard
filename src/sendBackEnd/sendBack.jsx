import React, { useEffect } from 'react';
import { useData } from './dataContext';

function VideoFrameSender({ videoElement, containerSize, onContainerCenterReceived, videoId }) {
  const { setCenterData } = useData();

  const sendFrameAndSize = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(blob => {
      const formData = new FormData();
      formData.append('frame', blob, 'frame.jpg');
      formData.append('video_id', videoId);
      formData.append('container_size', JSON.stringify(containerSize));

      fetch('http://localhost:5000/process', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        // Ensure data.success and data.data are truthy before trying to access data.data.is_congestion
        if (data.success && data.data) {
          // Log the congestion status along with the video ID
          const isCongestion = data.data.is_congestion;
          console.log(`Video ID: ${videoId}, is_congestion: ${isCongestion}`);

          // If there's a container center, call the handler
          if (data.data.container_center) {
            onContainerCenterReceived(data.data.container_center);
          }
          // If there's image center data, update the context
          if (data.data.image_center && Array.isArray(data.data.image_center)) {
            setCenterData(data.data.image_center);
          }
        } else {
          console.error('Error or negative response from server:', data);
        }
      })
      .catch(error => {
        console.error('Network or server error:', error);
      });
    }, 'image/jpeg');
  };

  useEffect(() => {
    const intervalId = setInterval(sendFrameAndSize, 500);
    return () => clearInterval(intervalId);
  }, [videoElement, containerSize, setCenterData, onContainerCenterReceived, videoId]); // Include videoId in the dependency array

  return null;
}

export default VideoFrameSender;
