import React from 'react';
import Portfolioitem from '../components/portfolioItem.js';

function Portfolio() {
    return (
        <div className='gen-container portfolio-container'>
            <div className='portfolio-title'>
                <h2>Some projects I've worked on</h2>
            </div>
            <div className='portfolio-items'>
                <Portfolioitem 
                portmainlink="https://store.steampowered.com/app/2236880/I_Wont_Forget_Hue/"
                portimgurl={require("../img/iwontforgethue.png")}
                portimgalt="image of I Won't Forget Hue startscreen" 
                porttitle="I Won't Forget Hue" 
                portdescription="I worked as producer in a team of 17 to design, develop and publish a viable 3D game in 14 weeks. 
                I Won't Forget Hue is a first-person, psychedelic thriller game made in Unity. We published it on Steam and Itch.io and it became quite successful with great reviews."
                portlogo1="fa-brands fa-square-steam fa-2x"
                portlogoalt1="steam logo with project link"
                portlogolink1="https://store.steampowered.com/app/2236880/I_Wont_Forget_Hue/"
                portlogo2="fa-brands fa-itch-io fa-2x"
                portlogoalt2="itch.io logo with project link"
                portlogolink2="https://hostile-kiwi-games.itch.io/i-wont-forget-hue"
                portlogo3="fa-solid fa-circle-info fa-2x"
                portlogoalt3="information logo with link to more information about the project"
                portlogolink3="https://iwontforgethue.netlify.app/"
                />
                <Portfolioitem 
                portmainlink="https://pappilots.itch.io/rat-soup"
                portimgurl={require("../img/ratsoup.png")}
                portimgalt="in game image of Rat Soup" 
                porttitle="Rat Soup" 
                portdescription="Rat Soup is a combine and collect mobile game made in Unity, published on Itch.io. 
                I worked as developer in a diverse team of 6 to go through the process of designing, developing and publishing a mobile game in 6 weeks."
                portlogo1="fa-brands fa-itch-io fa-2x"
                portlogoalt1="itch.io logo with project link"
                portlogolink1="https://pappilots.itch.io/rat-soup"
                />
                <Portfolioitem 
                portmainlink="https://coconstruct.netlify.app/"
                portimgurl={require("../img/co-construction.png")}
                portimgalt="in game image of co-construction" 
                porttitle="Co-Construction" 
                portdescription="Co-Construction is a cooperative browser game made with Three.js for client House of Esports. 
                I worked as developer in a small team to design and develop a game concept to help students with autism develop communication skills."
                portlogo1="fa-solid fa-globe fa-2x"
                portlogoalt1="globe logo with project web link"
                portlogolink1="https://coconstruct.netlify.app/"
                portlogo2="fa-brands fa-square-github fa-2x"
                portlogoalt2="github logo link to github"
                portlogolink2="https://gitfront.io/r/user-3219709/J4t5fiBhBfLv/coconstruct/"
                portlogo3="fa-solid fa-circle-info fa-2x"
                portlogoalt3="information logo with link to more information about the project"
                portlogolink3="https://eludus.netlify.app/"
                />
                <Portfolioitem 
                portmainlink="https://github.com/LisaHrmn/accessible-control"
                portimgurl={require("../img/accessiblecontrol.png")}
                portimgalt="in game image if accessible game control" 
                porttitle="Accessible game control" 
                portdescription="To contribute towards improving gaming accessibility I have researched accessible game controls and made a short demo in Unreal Engine with a speech control option. 
                Players can experience a form of control that may be difficult for them but more accessible for people with physical disabilities. This serves as both a way to raise awareness and explore accessible game controls."
                portlogo1="fa-brands fa-square-github fa-2x"
                portlogoalt1="github logo link to github"
                portlogolink1="https://github.com/LisaHrmn/accessible-control"
                portlogo2="fa-solid fa-circle-info fa-2x"
                portlogoalt2="information logo with link to more information about the project"
                portlogolink2="https://miro.com/app/board/uXjVOOUgI6w=/?share_link_id=760148923941"
                />
                <Portfolioitem 
                portmainlink="https://tweedruppelswater.netlify.app/"
                portimgurl={require("../img/alstweedruppels.png")}
                portimgalt="image of webpage" 
                porttitle="Als Twee Druppels Water" 
                portdescription="I worked in a team of 4 with React.js to make a web application for Dutch water company Oasen. 
                We made an interactive application that focuses primarily on increasing user awareness of drinking water and the added value of tap water 
                by highlighting it in four different ways."
                portlogo1="fa-solid fa-globe fa-2x"
                portlogoalt1="globe logo with project web link"
                portlogolink1="https://tweedruppelswater.netlify.app/"
                portlogo2="fa-brands fa-square-github fa-2x"
                portlogoalt2="github logo link to github"
                portlogolink2="https://github.com/Wazup2You/AlsTweeDruppelsWater/tree/main/frontend"
                portlogo3="fa-solid fa-circle-info fa-2x"
                portlogoalt3="information logo with link to more information about the project"
                portlogolink3="https://wandwonepager.netlify.app/"
                />
                <Portfolioitem 
                portmainlink="https://github.com/LisaHrmn/languagemodel"
                portimgurl={require("../img/invis.png")}
                porttitle="Languagemodel" 
                portdescription="A languagemodel made with python and a n-gram method that analysis a 
                given text and writes some random text based on consecutive words."
                portlogo1="fa-brands fa-square-github fa-2x"
                portlogoalt1="github logo link to github"
                portlogolink1="https://github.com/LisaHrmn/languagemodel"
                />
                <Portfolioitem 
                portmainlink="https://lisahrmn.github.io/AI_Projects/"
                portimgurl={require("../img/invis.png")}
                porttitle="AI projects" 
                portdescription="A collection of smaller AI and Machine Learning projects made with JavaScript and 
                Teachable Machine, K-Nearest Neighbors algorithm and Neural Network. "
                portlogo1="fa-solid fa-globe fa-2x"
                portlogoalt1="globe logo with project web link"
                portlogolink1="https://lisahrmn.github.io/AI_Projects/"
                portlogo2="fa-brands fa-square-github fa-2x"
                portlogoalt2="github logo link to github"
                portlogolink2="https://github.com/LisaHrmn/AI_Projects"
                />
                <Portfolioitem 
                portmainlink="https://lisahrmn.github.io/AI_Chess_Game/"
                portimgurl={require("../img/aichess.png")}
                portimgalt="" 
                porttitle="Powerpuff Girls Escape" 
                portdescription="An AI chess escape game made with Typescript with a Powerpuff Girls theme.
                The AI works with a Minimax algorithm and can be modified to look more steps ahead to make the game more difficult."
                portlogo1="fa-solid fa-globe fa-2x"
                portlogoalt1="globe logo with project web link"
                portlogolink1="https://lisahrmn.github.io/AI_Chess_Game/"
                portlogo2="fa-brands fa-square-github fa-2x"
                portlogoalt2="github logo link to github"
                portlogolink2="https://github.com/LisaHrmn/AI_Chess_Game"
                />
                {/* <Portfolioitem 
                portmainlink=""
                portimgurl={require("../img/co-construction.png")}
                portimgalt="" 
                porttitle="" 
                portdescription=""
                portlogo1="fa-solid fa-globe fa-2x"
                portlogoalt1="globe logo with project web link"
                portlogolink1=""
                portlogo2="fa-brands fa-square-github fa-2x"
                portlogoalt2="github logo link to github"
                portlogolink2=""
                portlogo3="fa-solid fa-circle-info fa-2x"
                portlogoalt3="information logo with link to more information about the project"
                portlogolink3=""
                /> */}
            </div>
        </div>
    );
}

export default Portfolio;
