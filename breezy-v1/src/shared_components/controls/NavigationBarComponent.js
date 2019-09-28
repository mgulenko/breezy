import React from 'react';
import { companyLogo, Palette } from '../../Definitions';
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

       <div className="navBarContainer" style={styleContainer}>
           <div className="navBarLogo">{companyLogo()}</div>
           <div className="navBarItem navBarRightAlign"><p>ART WORK</p></div>
           <div className="navBarItem"><p>MATERIALS</p></div>
           <div className="navBarItem"><p>ABOUT</p></div>
           <div className="navBarItem"><p>CONTACT</p></div>
           <div className="navBarItem navBarPlaceOrder"style={styleOrderBtn}><p>PLACE ORDER</p></div>
       </div>
    );
}

export default navBarComponent;