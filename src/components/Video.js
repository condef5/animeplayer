import React from 'react'
import ReactPlayer from 'react-player'
import './Video.css'
  
function Video({ url }) {
  return (
    <div className="videoWrapper"> 
      <ReactPlayer url={url} controls={true} />
    </div>
  )
}

export default Video;
