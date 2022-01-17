import "./intro.scss"
import { init } from 'ityped'
import { useEffect } from "react"

export default function Intro() {

  useEffect(()=>{
    
  }, [])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/dunes.jpg" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Thomas Chen</h1>
          <h3>Freelance <span>Designer</span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt=""/>
        </a>
      </div>
    </div>
  )
}
