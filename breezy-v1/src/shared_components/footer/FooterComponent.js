import React from 'react';
import { Palette, companyLogo, Orientation } from '../../Definitions';
import './FooterComponent.css'
import SocialMediaBar from '../SocialMediaBarComponent';
const footerComponent = (props)=>
{
    //container additional styles
    const styleContainer = 
    {
        backgroundColor : Palette.PrimaryColor,
        height: '18rem',
        color: Palette.OnPrimaryColor,
    }
    //text additional styles
    const styleText = 
    {
        color: Palette.OnPrimaryColor,
    }

    const styleBorder = 
    {
        borderColor: Palette.OnPrimaryColor,
    }
   
    //generate component
    return (
        <div style ={styleContainer}>
            <div className="footerContainer" style={styleBorder}> 
                <div className="footerLogo">{companyLogo()}</div>
                <div className="footerContactInfoContainer" style ={styleText}>
                    <div className="footerSectioHeader">CONTACT</div>
                    <div className="footerSectionItem">1-802-123-4567</div>
                    <a className="footerSectionItem" href="mailto: hello@breezy.email.com" style={styleText}>hello@breezy.email.com</a>
                    <div className="footerSectionSocialMedia">
                        <SocialMediaBar orientation = {Orientation.Horizontal}/>
                    </div>
                </div>
            </div>
            <div className="footerSectionLegal">All rights reserved 2019</div>
        </div>        
       
    );
}

export default footerComponent;