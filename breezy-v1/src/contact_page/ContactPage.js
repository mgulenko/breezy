import React from 'react';
import FooterComponent from '../shared_components/footer/FooterComponent';
import ContactComponent from '../shared_components/contact/ContactComponent';
import HeaderComponent from '../shared_components/header/HeaderComponent';
import { PageType } from '../Definitions';

const contactPageComponent = (props)=>
{
    return(
          <div>
            <HeaderComponent pageType = {PageType.Contact}/>
            <ContactComponent contactPage={true}/>
            <FooterComponent/>
        </div>
    );
}

export default contactPageComponent;