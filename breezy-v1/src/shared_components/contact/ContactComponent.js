import React from 'react';
import './ContactComponent.css'
import { Palette } from '../../Definitions';
import ImgPhone from '../../res/icons/phone-icon.png'
import ImgEmail from '../../res/icons/email-icon.png'

const contactComponent = (props)=>
{
    //main cotainer styles
    const styleContainer = 
    {
        backgroundColor     : Palette.SecondaryColor,
        color               : Palette.OnSecondaryColor,
    };

    //link styles
    const styleLink = 
    {
        color: Palette.OnSecondaryColor,
        textDecoration: 'none',
    }

     //button alignment
     const styleButton =
     {
         alignSelf: 'center',
         marginBottom: '2rem',
         marginTop: '3rem'
     };

     const styleEdit = 
     {
         backgroundColor    : Palette.SecondaryVariantColor,
         color              : Palette.OnSecondaryColor
     }
    //define styles for logo images
    const styleImgPhone = 
    {
        width:  '1rem',
        height: '1rem',
        marginRight: '0.5rem',
        marginTop: '2px'
    }

    const styleImgEmail = 
    {
        width:  '1.2rem',
        height: '1rem',
        marginRight: '0.5rem',
        marginLeft: '6rem'
    }

    return(
        <div className="contactContainer" style = {styleContainer}>
            <div className="contactHeader">CONTACT</div>
            <div className="contactSubHeader">LET'S STAY IN TOUCH</div>
            <div className="contactInfoContainer">
                <img src={ImgPhone} style = {styleImgPhone} alt="" />
                <div>
                    1-802-123-4567
                </div>
                <img src={ImgEmail} style = {styleImgEmail} alt="" />
                <a className="footerSectionItem" href="mailto: hello@breezy.email.com" style={styleLink}>hello@breezy.email.com</a>
            </div>
            <textarea className="contactTextArea" style={styleEdit}>Tell us a little about what you are looking for</textarea>
            <div>
                 <input type="text" style={styleEdit} name="name"  value="Name"/>
                 <input type="text" style={styleEdit} name="email" value="Email"/>
            </div>
            <button className="buttonOnPrimeLrg" style = {styleButton}>SEND</button>
        </div>
    );
}

export default contactComponent;