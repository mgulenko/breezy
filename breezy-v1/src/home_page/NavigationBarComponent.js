import React from 'react';
import '../index.css';
import { companyLogo, Palette } from '../Definitions';
import './NavigationBarComponent.css'


const navBarComponent = (props)=>
{
    const styleContainer =
    {
        color: Palette.OnPrimaryColor,
    };

    const styleOrderBtn =
    {
        borderColor : Palette.OnPrimaryColor,
    };
    
    //generate component
    return (        

       <div className="mainNavBarContainer" style={styleContainer}>
           <div className="mainNavBarLogo">{companyLogo()}</div>
           <div className="mainNavBarItem mainNavBarRightAlign"><p>ART WORK</p></div>
           <div className="mainNavBarItem"><p>MATERIALS</p></div>
           <div className="mainNavBarItem"><p>ABOUT</p></div>
           <div className="mainNavBarItem"><p>CONTACT</p></div>
           <div className="mainNavBarItem mainNavBarPlaceOrder"style={styleOrderBtn}><p>PLACE ORDER</p></div>
       </div>
    );
}

export default navBarComponent;