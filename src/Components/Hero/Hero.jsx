import React from "react";
import './Hero.css';
import profile_img from '../../assets/profile_img.jpeg';
import resumePDF from "../../assets/resumePDF.pdf";


const Hero = () => {
    return (
        <div id="home" className="hero">
            <img src={profile_img} />
            <h1><span>Hi, I'm Rani Aaglave,</span> a Frontend Developer.</h1>
            <p>Building modern web interfaces using HTML, CSS, JavaScript, and React.</p>
            <div className="hero-action">
                <div className="hero-connect"> <a className='anchor-link' offset={50} href='#contact'>Contact with me</a></div>
                <div className="hero-connect"><a href={resumePDF} target="_blank" rel="noreferrer">
                    Download Resume
                </a></div>
            </div>
        </div>
    )
}

export default Hero;