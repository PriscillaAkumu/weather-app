import React, { useState, useEffect } from 'react';
import Rain from './rain.mp4';

const weatherToVideoMap = {
  //Clear: 'https://www.pexels.com/download/video/13205825/?fps=25.0&h=720&w=1280',
  Rain: Rain,
//  Snow: 'https://www.pexels.com/download/video/1779202/?fps=25.0&h=720&w=1280',
  // Add more mappings as needed
};

function BackgroundVideo({ weather }) {
  const [videoSource, setVideoSource] = useState('');

  useEffect(() => {
    if (weather && weather.weather && weather.weather.length > 0) {
      const mainWeather = weather.weather[0].main;
      const videoFileName = weatherToVideoMap[mainWeather];

      if (videoFileName) {
        setVideoSource(`/videos/${videoFileName}`);
      }
    }
  }, [weather]);

  return (
    <div className="background-video">
      <video autoPlay loop muted>
        <source src='https://www.pexels.com/download/video/13205825/?fps=25.0&h=720&w=1280' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVideo;
