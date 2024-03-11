import React from 'react';
import ReactDOM from 'react-dom';
import VideoPlayer from './VideoPlayer.jsx'; // Adjust the path as necessary
import './App.css'; 
import Top from './Top/top'
import Nav from './Nav/nav'

function App() {
  return (
    <div className="App">
      <Top/>
      <Nav/>
      <VideoPlayer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
