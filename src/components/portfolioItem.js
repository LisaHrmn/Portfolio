import React from "react";

function Portfolioitem(props){
      return(
        <div className="portfolio-item">
            <div className="port-img-container">
                <a href={props.portmainlink} target="_blank" rel="noreferrer">
                    <img src={props.portimgurl} alt={props.portimgalt}/>
                </a>
            </div>
            <div className="port-text-container">
                <a href={props.portmainlink} target="_blank" rel="noreferrer"><h4>{props.porttitle}</h4></a>
                <p>{props.portdescription}</p>
                <div className="port-logos">
                    <a href={props.portlogolink1} target="_blank" rel="noreferrer">
                        <i class={props.portlogo1} alt={props.portlogoalt1}></i>
                    </a>
                    <a href={props.portlogolink2} target="_blank" rel="noreferrer">
                        <i class={props.portlogo2} alt={props.portlogoalt2}></i>
                    </a>
                    <a href={props.portlogolink3} target="_blank" rel="noreferrer">
                        <i class={props.portlogo3} alt={props.portlogoalt3}></i>    
                    </a>
                </div>
            </div>
        </div>
      )
  }

  export default Portfolioitem;
