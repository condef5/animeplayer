import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import style from './Video.css'
  
function Video({ url }) {
  return (
    <div className={style.videoWrapper}> 
      <ReactPlayer url={url} controls={true} />
    </div>
  )
}

export default Video;