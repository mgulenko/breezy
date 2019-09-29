import React from 'react';
import FooterComponent from '../shared_components/footer/FooterComponent';
import ContactComponent from '../shared_components/contact/ContactComponent';
import HeaderComponent from '../shared_components/header/HeaderComponent';
import { PageType } from '../Definitions';

const materialsPageComponent = (props)=>
{
    return(
          <div>
            <HeaderComponent pageType = {PageType.Materials}/>
            <h1>MATERIALS CONTENT GOES HERE</h1>
            <FooterComponent/>
        </div>
    );
}

export default materialsPageComponent;