import React from "react";
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.jpeg';

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I am a motivated Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React.
                            Through personal projects and continuous practice, I have developed a solid understanding of building
                            responsive and user-friendly web interfaces.
                        </p>

                        <p>
                            My passion for frontend development is reflected in my curiosity, enthusiasm, and dedication to learning
                            new technologies and improving my skills with every project I work on.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{width:"70%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p><hr style={{width:"70%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>React Js</p><hr style={{width:"60%"}}/>
                        </div>
                        <div className="about-skill">
                            <p>Basics of DSA</p><hr style={{width:"50%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>2025</h1>
                    <p>STARTED WEB DEVELOPMENT</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>REAL-WORLD PROJECTS</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>DEPLOYED WEBSITES</p>
                </div>
            </div>

        </div>
    )
}
export default About