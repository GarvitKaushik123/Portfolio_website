import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='works'>
            {/*left side*/}
            <div className="awesome">
                <span style={{color: darkMode? 'white' : ''}}>Works for all these</span>
                <span>Brands</span>
                <span>
                    I have 3 months of professional working experience as a 
                    <br/>
                    web and blockchain development intern at Electroshoe, 
                    <br/>
                    an SF based startup.
                    <br/>
                    Lorem Ipsum
                </span>
                <button className="button s-button">Hire me</button>
                <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/*right side*/}
            <div className='w-right'>
                <motion.div 
                initial={{ rotate: 45 }}
                whileInView={{ rotate: 0 }}
                viewport={{margin: '-40px'}}
                transition = {{duration: 3.5, type: 'spring'}}
                className='w-mainCircle'>
                    <div className='w-secCircle'>
                        <img src={Upwork} alt=""/>
                    </div>       
                    <div className='w-secCircle'>
                        <img src={Fiverr} alt=""/>
                    </div>   
                    <div className='w-secCircle'>
                        <img src={Amazon} alt=""/>
                    </div>   
                    <div className='w-secCircle'>
                        <img src={Shopify} alt=""/>
                    </div>      
                    <div className='w-secCircle'>
                        <img src={Facebook} alt=""/>
                    </div> 
                    {/* background circels */}
                    <div className='w-backCircle blueCircle'></div> 
                    <div className='w-backCircle yellowCircle'></div>      
                </motion.div>
            </div>
        </div>
    )
}

export default Works;