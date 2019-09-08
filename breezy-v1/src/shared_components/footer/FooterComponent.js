import React from 'react';
import { Palette, companyLogo } from '../../Definitions';

const footerComponent = (props)=>
{
    const style = 
    {
        display         : 'flex',
        flexDirection   : 'row',
        height          : '20rem',
        backgroundColor : Palette.PrimaryColor,
    }
   
    //generate component
    return (        
       <div style={style}> 
           {companyLogo()}
       </div>
    );
}

export default footerComponent;