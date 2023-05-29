import React from 'react';
import { motion} from "framer-motion";

function About() {
    return (
        <div className='gen-container about-container'>
            <div className='about-title'>
                <h2>about me</h2>
            </div>
            <div className='about-main'>
                <div className='about-main-text'>
                    <p>Hi, I'm Lisa! I love creative and accessible design but what I love even more is realizing these designs as a developer. 
                        I am currently in my fourth and last year of studying Creative Media and Game Technologies at Rotterdam University of Applied Sciences where I learn the full agile process of web- app- and game development.
                        I have experience in multiple programming languages ranging from Python, JavaScript and libraries as React.js to game programming in Unity and Unreal Engine with C# and C++.
                        I adore accessibility and using gamification and gaming elements in my work. 
                        </p>
                    <div className='alt-btn-con'>
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}>
                            <a href={require('../img/Portfolio_LisaHuurman_EN.pdf')} target="_blank" rel="noreferrer" alt="link to resume"><button className='alt-btn' aria-label='button to cv'>Resume<i class="fa-solid fa-arrow-right"></i></button></a>
                        </motion.div>
                    </div>
                </div>
                <div className='about-main-img'> 
                    <img src={require("../img/Lisa.png")} alt='Lisa profile image'></img>
                </div>
            </div>
        </div>
    );
}

export default About;