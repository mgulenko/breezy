import React from 'react';
import './MainSectionComponent.css'
import '..//index.css';
import SocialMediaBar from '../shared_components/SocialMediaBarComponent.js'
import { Orientation } from '../Definitions';

const mainSectionComponent = (props)=>
{
    //button alignment
    const buttonStyle=
    {
        alignSelf: 'center'
    };
   

    //generate component
    return (        
       <div className="mainSectionContainer"> 
            <div className="mainSectionWrapper">
                <div className="mainSectionContentWrapper">
                    <h1 className="mainSectionHeader">BREEZY LEATHER WRAPS</h1>
                    <p className="mainSectionContent">Handmade genuine gemstone leather stitch bracelets</p>
                    <button className="buttonOnPrimeLrg" style={buttonStyle}>LEARN MORE</button>
                </div>
                <div className="mainSocialMediaBarStyle">
                    <SocialMediaBar orientation = {Orientation.Vertical}/>
                </div>
            </div>
       </div>
    );
}

export default mainSectionComponent;