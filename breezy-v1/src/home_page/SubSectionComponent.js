import React from 'react';
import './SubSectionComponent.css'

const subSectionComponent = (props)=>
{
    //convert recieved #FFFFFF into appropriate hex value such as 0xFFFFFF
    const bkgColor      = '0x' + props.bkgColor.substring(1);
    const opacity       = props.opacity;
    const headerText    = props.headerText;
    const contentText   = props.contentText;
    
    // extract red, green , and blue values from hex
    let r = (bkgColor >> 16) & 0xFF;
    let g = (bkgColor >> 8)  & 0xFF;
    let b =  bkgColor & 0xFF;

    //assign color for the background
    const style = 
    {
        backgroundColor : `rgba(${r},${g},${b},${opacity} )`
    }

    //generate component
    return (        
       <div className="sectionContainer" style={style}>
           <h1 className="sectionHeader">{headerText}</h1>
           <p className="sectionContent">{contentText}</p>
       </div>
    );
}

export default subSectionComponent;