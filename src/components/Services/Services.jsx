import React from "react";
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from "../Card/Card";

const Services = () => { 
    return (
        <div className="services">
            {/*left side*/}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>
                    I have 3 months of professional working experience as a 
                    <br/>
                    web and blockchain development intern at Electroshoe, an SF based startup.
                </span>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/*right side*/}
            <div className="cards">
                <div style={{left: '14rem'}}>
                    <Card emoji = {HeartEmoji} heading = {'Design'} detail = {"figma, sketch and adobe and adobe xd"}/>
                </div>

                <div style={{top: "12rem", left: '-4rem'}}>
                    <Card emoji = {Glasses} heading = {'Developer'} detail = {"HTML, CSS, JAVASCRIPT, React"}/>
                </div> 

                <div style={{top: "19rem", left: '12rem'}}>
                    <Card emoji = {Humble} heading = {'Developer'} detail = {"HTML, CSS, JAVASCRIPT, React"}/>
                </div> 
            </div>
        </div>
    )
}

export default Services;