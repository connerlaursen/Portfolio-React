import React from 'react'
import "../App.css"
import codingPic from "../assets/images/coding.jpg"
function Home() {
  return (
    <div className="homeWrapper">
    <div className="imageContainer"><img src={codingPic}/></div>
    </div>
  )
}

export default Home