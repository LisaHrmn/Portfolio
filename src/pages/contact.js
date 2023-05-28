import React from 'react';
// import { motion} from "framer-motion";

function Contact() {
    return (
        <div className='gen-container contact-container'>
            <div className='contact-text'>
                <h2>Get in contact</h2>
                <div className='alt-btn-con-a'>
                    <a classname='alt-btn' href="mailto:lisahuurm@gmail.com">LisaHuurm@gmail<i class="fa-solid fa-arrow-right"></i></a>
                    <div className='contact-logos'>
                        <a href="https://www.linkedin.com/in/lisa-huurman-752028198/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin fa-2x" alt='LinkedIn logo with link to LinkedIn page'></i></a>
                        <a href="https://github.com/LisaHrmn" target="_blank" rel="noreferrer"><i class="fa-brands fa-square-github fa-2x" alt='Github logo with link to Github page'></i></a>
                    </div>
                </div>
            </div>
            <div className='contact-form'>
            {/* <motion.div
                drag
                dragConstraints={{
                top: 0,
                left: 0,
                right: 500,
                bottom: 350,
                }}
            >
                <div className='drag'>

                </div>
            </motion.div> */}
            </div>
        </div>
    );
}

export default Contact;