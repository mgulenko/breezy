import React from 'react';
import './MainSectionComponent.css'
import '..//index.css';

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
          <h1 className="mainSectionHeader">BREEZY LEATHER WRAPS</h1>
          <p className="mainSectionContent">Handmade genuine gemstone leather stitch bracelets</p>
          <button className="buttonOnPrimeLrg" style={buttonStyle}>LEARN MORE</button>
       </div>
    );
}

export default mainSectionComponent;