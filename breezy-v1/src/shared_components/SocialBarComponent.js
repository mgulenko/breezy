import React from 'react';
import {Orientation} from '../Definitions.js';
import FacebookLogo from '../res/icons/fb-logo.png';
import InstagramLogo from '../res/icons/insta-logo.png';
import EtsyLogo from '../res/icons/etsy-logo.png';

const socialBarComponent = (props)=>
{
    const style = 
    {
        display         : 'flex',
        flexDirection   : 'row'
    };

    // adjust flex direction if it's vertical
    if(props.orientation === Orientation.Vertical)
        style.flexDirection = 'column';

    //generate component
    return (        
        <div style={style}>
            Media bar
        </div>
    );
}

export default socialBarComponent;