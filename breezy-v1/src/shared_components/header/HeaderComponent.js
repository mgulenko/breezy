import React from 'react';
import ImgArtworkBkg from '../../res/artwork_page/artwork-bkg.jpg';
import ImgMaterialsBkg from '../../res/materials_page/materials-bkg.jpg';
import ImgAboutBkg from '../../res/about_page/about-bkg.jpg';
import ImgContactBkg from '../../res/contact_page/contact-bkg.jpg';
import { PageType } from '../../Definitions';
import NavBar from '../controls/NavigationBarComponent';

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

    const style =
    {
      backgroundImage: "url(" + imgBkgSrc + ")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition : 'center center',
      backgroundAttachment : 'fixed',
      height: "100%"
    };
    
    console.log(style);
    return(
        <div style={style}>
            <NavBar/>
            <div>
                {title}
            </div>
        </div>
    );
}

export default headerComponent;