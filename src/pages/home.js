import React from 'react';
import { useNavigate } from "react-router-dom";
import { MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import { motion} from "framer-motion";

function Home() {
    
    const navigate = useNavigate();

    return (
        <div className='gen-container home-container'>
            <MouseParallaxContainer
            className="parallax"
            containerStyle={{
              width: "100vw",
              height: "100vh"
            }}
            globalFactorX={0.3}
            globalFactorY={0.3}
            resetOnLeave
          >
            <MouseParallaxChild
              factorX={0.6}
              factorY={0.1}
              className="home-background"
              style={{
                backgroundPositionY: "50%",
                transform: "scale(1.2)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                width: "100vw",
                height: "100vh",
                backfaceVisibility: "hidden"
              }}
            />
            <div className='home-top'>
              <h1>Hi I'm lisa</h1>
              <h3>Creative Developer</h3>
              <div className='home-atl-btns'>
                  <div className='alt-btn-con home-alt-btn'>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}>
                        <button onClick={() => navigate("/about")} className='alt-btn'>About me<i class="fa-solid fa-arrow-right"></i></button>
                    </motion.div>
                  </div>
                  <div className='alt-btn-con home-alt-btn'>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}>
                        <button onClick={() => navigate("/contact")} className='alt-btn'>Contact me<i class="fa-solid fa-arrow-right"></i></button>
                    </motion.div>
                  </div>
              </div>
              <div className='b-btn'>
                <button onClick={() => navigate("/portfolio")} classname='hover-btn'>My work</button>
              </div>
            </div>
            </MouseParallaxContainer>
        </div>
    );
}

export default Home;
