import { useState } from "react"
import "./works.scss"

export default function Works() {
const [currentSlider,setCurrentSlider] = useState(0)


  const data=[
    {
      id:"1",
      icon:"./assets/mobile.png",
      title:"mobile app",
      desc:"Socio is a simulationgame for interacting and carrying out daily activities in real life which aims tocreate a more positive social life.",
      img:"https://i.imgur.com/QAbEZmq.jpeg"
    },
    {
      id:"2",
      icon:"./assets/globe.png",
      title:"Web Design Pokemon Deck",
      desc:"A simple web app that consumes data from 3rd partyAPI, in this project i made simple pockemon deck,",
      img:"https://i.imgur.com/Yd7cSVS.jpeg"
    },
    {
      id:"3",
      icon:"./assets/globe.png",
      title:"Foxy Gun Shop(E-commerce sample)",
      desc:"a gun online shop prototype",
      img:"https://i.imgur.com/AiyA21R.jpeg"
    },
  ]

  const handleClick = (way) =>{
    way === "left" ? setCurrentSlider(currentSlider > 0 ? currentSlider-1:2) :
    setCurrentSlider(currentSlider<data.length-1 ? currentSlider+1:0);
  }
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlider * 100}vw)`}}>
       { data.map((d)=>( <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt=""/>
                </div>
                <h2>{d.title}</h2>
                <p>
               {d.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src={d.img} />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
    </div>
  )
}

