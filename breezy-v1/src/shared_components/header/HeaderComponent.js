import React from 'react';
import ImgArtworkBkg from '../../res/artwork_page/artwork-bkg.jpg';
import ImgMaterialsBkg from '../../res/materials_page/materials-bkg.jpg';
import ImgAboutBkg from '../../res/about_page/about-bkg.jpg';
import ImgContactBkg from '../../res/contact_page/contact-bkg.jpg';
import { PageType } from '../../Definitions';

const headerComponent = (props)=>
{
    //load background image and title
    let imgBkgSrc = null;
    let title     = "";
    switch(props.pageType)
    {
      case PageType.ArtWork:
        imgBkgSrc = ImgArtworkBkg;
        title     = "ART WORK";
        break;
      case PageType.Materials:
        imgBkgSrc = ImgMaterialsBkg;
        title     = "MATERIALS";
        break;
      case PageType.About:
        imgBkgSrc = ImgAboutBkg;
        title     = "ABOUT US";
        break;
      case PageType.Contact:
        imgBkgSrc = ImgContactBkg;
        title     = "GET IN TOUCH";
        break;
      default:
        imgBkgSrc = null;
        title     = "";
        break;
    }
    
    return(
        <div>
            {title}
        </div>
    );
}

export default headerComponent;