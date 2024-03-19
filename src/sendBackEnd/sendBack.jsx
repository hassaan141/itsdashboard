import React, { useEffect } from 'react';
import { useData } from './dataContext';
import { useCongestion } from '../Congestion/CongestionContext';

function VideoFrameSender({ videoElement, containerSize, onContainerCenterReceived, videoId }) {
  const { updateCongestionState } = useCongestion(); // Using the context to get the update function

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
        if (data.success && data.data && data.data.is_congestion) {
          console.log('Congestion is true for videoId:', videoId);
          updateCongestionState(videoId, true); // Update global state to indicate congestion
        } else {
          console.log('Congestion is false for videoId:', videoId);
          updateCongestionState(videoId, false); // Update global state to indicate no congestion
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
  }, [videoElement, containerSize, videoId]);

  return null;
}

export default VideoFrameSender;
