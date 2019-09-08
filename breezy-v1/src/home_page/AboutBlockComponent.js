import React from 'react';
import '../index.css';
import './AboutBlockComponent.css';
import {Orientation} from '../Definitions.js';
import {InformationBlockType} from '../Definitions.js';
import ImgAboutProduct from '../res/home_page/img_about_product.jpg';
import ImgAboutMaterials from '../res/home_page/img_about_materials.jpg';
import ImgAboutCompany from '../res/home_page/img_about_company.jpg';

const aboutComponent = (props)=>
{
    const header      = props.header;
    const content     = props.content;
    const btnLabel    = props.btnLabel;
    const orientation = props.orientation;
    
    // Check for the block type to load appropriate image.
    // It's fucking gross but I couldn't figure out how to pass an instance or path to an image dynamically.
    // This should change for sure!!!
    const blockType = props.blockType;
    let imgSource   = null;
    //process type to load an image
    switch(blockType)
    {
        case InformationBlockType.HomePage.AboutProduct:
            imgSource = ImgAboutProduct;
            break;
        case InformationBlockType.HomePage.AboutMaterials:
            imgSource = ImgAboutMaterials;
            break;
        case InformationBlockType.HomePage.AboutCompany:
            imgSource = ImgAboutCompany;
            break;
        default:
            break;
    }
    // determine orientation of the component's content
    const containerLayout = orientation === Orientation.LeftToRight ? 'containerRow' : 'containerRowReverse';

    //generate component
    return (        
        <div className = {containerLayout} >
           <img src={imgSource} className="Image" alt=""/>
           <div className="containerContentRow">
               <div className = "blockContent">
                    <h1 className="blockHeader">{header}</h1>
                    <p> {content}</p>
                    <button className="buttonOnBkgLrg">
                        {btnLabel}
                    </button>
                </div>  
           </div>
        </div>
    );
}

export default aboutComponent;