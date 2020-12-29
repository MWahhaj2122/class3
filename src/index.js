import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import MediaCard from './MediaCard.js'
import Gate from './Gate.js'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App lastName = "Nisar"/>
    <MediaCard title = "Title of Page" body = "Body of Page" ImageURL = "https://i.pinimg.com/originals/3c/70/3c/3c703c212d6dbddaf0f0769e9e7ffeb7.jpg" ImageAlt = "image" divElement = {<h1>All Good</h1>}/>
    <Gate check = "Open" />
    <Gate check = "Closed" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
