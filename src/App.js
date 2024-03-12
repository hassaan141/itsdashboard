import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './VideoPlayer/VideoPlayer.jsx'; // Adjust the path as necessary
import './App.css';   
import Top from './Top/top'
import Nav from './Nav/nav'

function App() {
  return (
    <div className="App">
    <div className='border-top'>
    <Top/>
    </div>
    <div className='border-nav'>
    <Nav/>
    </div>
    <div className='border-vp'>
    <VideoPlayer />
    </div>
      
      
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
