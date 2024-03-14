import React, { useEffect } from 'react';
import { useData } from './dataContext';

function VideoFrameSender({ videoElement, containerSize, onContainerCenterReceived }) {
  const { setCenterData } = useData();

  const sendFrameAndSize = () => {
    // if (!videoElement || videoElement.readyState !== 4) {
    //   console.log("Video is not ready for frame capture.");
    //   return;
    // }

    const canvas = document.createElement('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(blob => {
      const formData = new FormData();
      formData.append('frame', blob, 'frame.jpg');
      formData.append('video_id', 'unique_video_id');
      formData.append('container_size', JSON.stringify(containerSize));

      console.log("Sending the following data to the backend:");
      for (let key of formData.keys()) {
        console.log(`${key}:`, formData.get(key));
      }

      fetch('http://localhost:5000/process', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        if (data.container_center) {
          onContainerCenterReceived(data.container_center);
          if (data.image_center && Array.isArray(data.image_center)) {
            setCenterData(data.image_center);
          }
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
    const intervalId = setInterval(sendFrameAndSize, 1000);
    return () => clearInterval(intervalId);
  }, [videoElement, containerSize, setCenterData, onContainerCenterReceived]);

  return null;
}

export default VideoFrameSender;
