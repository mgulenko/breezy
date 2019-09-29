import React from 'react';
import FooterComponent from '../shared_components/footer/FooterComponent';
import ContactComponent from '../shared_components/contact/ContactComponent';
import HeaderComponent from '../shared_components/header/HeaderComponent';
import { PageType } from '../Definitions';

const artworkPageComponent = (props)=>
{
    return(
          <div>
            <HeaderComponent pageType = {PageType.ArtWork}/>
            <h1>ARTWORK CONTENT GOES HERE</h1>
            <FooterComponent/>
        </div>
    );
}

export default artworkPageComponent;