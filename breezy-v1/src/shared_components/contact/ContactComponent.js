import React from 'react';
import './ContactComponent.css'
import { Palette } from '../../Definitions';
import ImgPhone from '../../res/icons/phone-icon.png';
import ImgEmail from '../../res/icons/email-icon.png';
import ImgPhoneDark from '../../res/icons/phone-icon-dark.png'
import ImgEmailDark from '../../res/icons/email-icon-dark.png'

const contactComponent = (props)=>
{
    //main cotainer styles
    let styleContainer = 
    {
        backgroundColor     : Palette.SecondaryColor,
        color               : Palette.OnSecondaryColor,
    };

    //link styles
    let styleLink = 
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

     let styleEdit = 
     {
         backgroundColor    : Palette.SecondaryVariantColor,
         color              : Palette.OnSecondaryColor
     }

     let btnClassName = "buttonOnPrimeLrg";
     let imgPhoneSrc = ImgPhone;
     let imgEmailSrc = ImgEmail;
     // apply color scheme for the cobtact page
     if(props.contactPage)
     {
        styleContainer.backgroundColor = Palette.BackgroundColor;
        styleContainer.color           = Palette.OnBackgroundColor;
        styleLink.color                = Palette.OnBackgroundColor;
        styleEdit.backgroundColor      = Palette.BackgroundVariantColor;
        styleEdit.color                = Palette.OnBackgroundColor;
        btnClassName                   = "buttonOnBkgLrg";
        imgPhoneSrc                    = ImgPhoneDark;
        imgEmailSrc                    = ImgEmailDark;
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
                <img src={imgPhoneSrc} style = {styleImgPhone} alt="" />
                <div>
                    1-802-123-4567
                </div>
                <img src={imgEmailSrc} style = {styleImgEmail} alt="" />
                <a className="footerSectionItem" href="mailto: hello@breezy.email.com" style={styleLink}>hello@breezy.email.com</a>
            </div>
            <textarea className="contactTextArea" style={styleEdit}>Tell us a little about what you are looking for</textarea>
            <div>
                 <input type="text" style={styleEdit} name="name"  value="Name"/>
                 <input type="text" style={styleEdit} name="email" value="Email"/>
            </div>
            <button className={btnClassName} style = {styleButton}>SEND</button>
        </div>
    );
}

export default contactComponent;