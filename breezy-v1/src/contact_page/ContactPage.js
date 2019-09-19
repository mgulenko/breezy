import React from 'react';
import FooterComponent from '../shared_components/footer/FooterComponent';
import ContactComponent from '../shared_components/contact/ContactComponent';

const contactPageComponent = (props)=>
{
    return(
        <div>
            <ContactComponent contactPage={true}/>
            <FooterComponent/>
        </div>
    );
}

export default contactPageComponent;