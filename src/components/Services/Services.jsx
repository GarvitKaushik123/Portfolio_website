import React from "react";
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from "../Card/Card";
import Resume from './resume.pdf';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion';

const Services = () => { 
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {duration: 1, type: 'spring'}
    return (
        <div className="services" id="Services">
            {/*left side*/}
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
                <span>services</span>
                <span>
                    I have 3 months of professional working experience as a 
                    <br/>
                    web and blockchain development intern at Electroshoe, an SF based startup.
                </span>
                <a href={Resume}>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/*right side*/}
            <div className="cards">
                <motion.div 
                whileInView={{left:'14rem'}}
                initial={{left:'25%'}}
                transition={transition}
                style={{left: '14rem'}}>
                    <Card emoji = {HeartEmoji} heading = {'Design'} detail = {"figma, sketch and adobe and adobe xd"}/>
                </motion.div>

                <div style={{top: "12rem", left: '-4rem'}}>
                    <Card emoji = {Glasses} heading = {'Developer'} detail = {"HTML, CSS, JAVASCRIPT, React"}/>
                </div> 

                <div style={{top: "19rem", left: '12rem'}}>
                    <Card emoji = {Humble} heading = {'Developer'} detail = {"HTML, CSS, JAVASCRIPT, React"}/>
                </div> 

                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}

export default Services;