import React from 'react';
import ImgBackground from '../res/home_page/bkg.jpg';
import {Orientation} from '../Definitions.js';
import {InformationBlockType} from '../Definitions.js';
import {Palette} from '../Definitions.js';
import MainSection from './MainSectionComponent.js';
import SubSection from './SubSectionComponent.js';
import AboutBlock from './AboutBlockComponent.js';
import FooterComponent from '../shared_components/footer/FooterComponent';
import ContactComponent from '../shared_components/contact/ContactComponent';

const mainPageComponent = (props)=>
{
    const style =
    {
      backgroundImage: "url(" + ImgBackground + ")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition : 'center center',
      backgroundAttachment : 'fixed'
    };
    
    return (
        <div style={style}>
        <MainSection/>
        <SubSection
              bkgColor     = {Palette.PrimaryColor}
              opacity      = {0.14}
              headerText   = {'GOLDEN RETRIEVER'}
              contentText  = {'BRITISH-TYPE GOLDEN RETRIEVERS ARE PREVALENT THROUGHOUT EUROPE AND AUSTRALIA. THE SKULL IS BROADER AND THE FOREQUARTERS ARE MORE MUSCULAR THAN IN OTHER TYPES. '}
        />
        <SubSection
              bkgColor     = {Palette.SecondaryColor}
              opacity      = {0.8}
              headerText   = {'GOLDEN RETRIEVER'}
              contentText  = {'BRITISH-TYPE GOLDEN RETRIEVERS ARE PREVALENT THROUGHOUT EUROPE AND AUSTRALIA. THE SKULL IS BROADER AND THE FOREQUARTERS ARE MORE MUSCULAR THAN IN OTHER TYPES. '}
        />
        <AboutBlock
              blockType   = {InformationBlockType.HomePage.AboutProduct}
              orientation = {Orientation.LeftToRight}
              header      = 'About the product'
              content     = 'The Golden Retriever is a large-sized gun dog that retrieves shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.
                             The Golden Retriever is a large-sized gun dog that retrieves shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.
                             The Golden Retriever is a large-sized gun dog that retrieves shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.'
              btnLabel    = 'VIEW ALL'
          />
          <AboutBlock
              blockType   = {InformationBlockType.HomePage.AboutMaterials}
              orientation = {Orientation.RightToleft}
              header      = 'About materials'
              content     = 'The Golden Retriever is a large-sized gun dog that retrieves shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.'
              btnLabel    = 'LEARN A BIT MORE '
          />
           <AboutBlock
              blockType   = {InformationBlockType.HomePage.AboutCompany}
              orientation = {Orientation.LeftToRight}
              header      = 'About the company'
              content     = 'The Golden Retriever is a large-sized gun dog that retrieves shot waterfowl, such as ducks and upland game birds, during hunting and shooting parties.'
              btnLabel    = 'FIND OUT MORE'
          />
          <ContactComponent/>
          <FooterComponent/>
      </div>
    );

}

export default mainPageComponent;

