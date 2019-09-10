import React, { Component } from 'react';
import {Orientation} from '../Definitions.js';
import FacebookLogo from '../res/icons/fb-logo.png';
import InstagramLogo from '../res/icons/insta-logo.png';
import EtsyLogo from '../res/icons/etsy-logo.png';

class SocialMediaBar extends Component
{
   constructor(props)
   {
       super(props);

       //assign state
       this.state = 
       {
           orientation: null
       }

       // assign orientation
       if(props.orientation === undefined)
           this.state.orientation = Orientation.Horizontal;
       else
           this.state.orientation = props.orientation;
   }

   openFacebookHandler = () =>
   {
       window.open('https://www.facebook.com/BreezyWraps/', '_blank');
   }

   openInstagramHandler = () =>
   {
       window.open('https://www.instagram.com', '_blank');
   }

   openEtsyHandler = () =>
   {
       window.open('https://www.etsy.com', '_blank');
   }

   
    render() 
    {
        // define styles for the container
        const style = 
        {
            display         : 'flex',
            flexDirection   : 'row',
            justifyContent  : 'space-between',
            height          : '2rem',
            width           : '9rem',
        };
    
        // adjust flex direction if it's vertical
        if(this.state.orientation === Orientation.Vertical)
        {
            style.flexDirection = 'column';
            style.height = '9rem';
            style.width  = '2rem'
        }

        //define styles for logo images
        const logoStyle = 
        {
            width:  '2rem',
            height: '2rem',
            cursor: 'pointer'
        }
        //generate component
        return (        
            <div className = "socialMediaBar" style={style}>
                <img src={FacebookLogo}  style = {logoStyle} alt="" onClick = {this.openFacebookHandler}/>
                <img src={InstagramLogo} style = {logoStyle} alt="" onClick = {this.openInstagramHandler}/>
                <img src={EtsyLogo}      style = {logoStyle} alt="" onClick = {this.openEtsyHandler}/>
            </div>
        );
    }
}

export default SocialMediaBar;