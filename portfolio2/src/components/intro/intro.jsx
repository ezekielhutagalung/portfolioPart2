import "./intro.scss"
import { init } from 'ityped'
import {useEffect} from "react"
import { useRef } from "react"

export default function Intro() {
  const textRef = useRef()

  useEffect(() => {
    init(textRef.current,
      { 
      showCursor: true,
      backDelay:1500,
      backSpeed:60,
      strings: ['Js Fullstack Dev','Front End Dev','Public Speaker','Master of Ceremonies', 'Robotic Instructor for Kids','content creator','Musician(singer,rapper)'] })
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img  src="Assets/ngemc3.png" alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi there, I'm</h2>
          <h1>Ezekiel Hutagalung</h1>
          <h3>: <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
            <img src="Assets/down.png" alt=""/>
        </a>
      </div>
    </div>
  )
}
