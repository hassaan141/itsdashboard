import React, { useEffect } from 'react';
import { useData } from './dataContext';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

function VideoFrameSender({videoElement, containerSize, onContainerCenterReceived, videoId }) {
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

      console.log("Sending the following data to the backend:");
      for (let key of formData.keys()) {
        //console.log(`${key}:`, formData.get(key));
      }

      fetch('http://localhost:5000/process', {
        method: 'POST',
        body: formData,
      })
      .then(response => response.json())
      .then(data => {
        if (data.success && data.data && data.data.is_congestion) {
            console.log('is_congesstion is true');

           // console.log(data.video_id);
            console.log(`${data.data.video_id}`);
            const videoIdElement = document.querySelector(`.video${videoId}`);
            if (videoIdElement) {
              videoIdElement.style.border = '3px solid red'; // Add border to the dynamically selected div
    }
        } else {
            console.log('Either is_congestion is false or success is false');
        }
      })
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