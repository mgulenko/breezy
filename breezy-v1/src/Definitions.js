import React from 'react';

/////////////////COLOR PALETTE ///////////////////////

/**
 * Defines color scheme used within the app. Do not define any other colors anywhere else.
 * if there is a need for a new color add it's definition here. 
 */
export const Palette = 
{
    PrimaryColor            : '#339999',
    PrimaryVariantColor     : '#339999',
    SecondaryColor          : '#00CCBB',
    SecondaryVariantColor   : '#00CCBB',
    BackgroundColor         : '#FFFFFF',
    BackgroundVariantColor  : '#FFFFFF',
    OnPrimaryColor          : '#FFFFFF',
    OnSecondaryColor        : '#FFFFFF',
    OnBackgroundColor       : '#663333'
}

/**
 * Defines orientation of the content within different components. 
 */
export const Orientation = 
{
    Horizontal : 0,
    Vertical   : 1,
    LeftToRight: 2,
    RightToleft: 3,
}

/**
 * Defines types of informatio blocks are used within the applicatio. This is a work around for loading dynamic local images. 
 * Subject to change if we find better solution. I wasn't able to for a moment. 
 */
export const InformationBlockType = 
{
    HomePage :
    {
        AboutProduct    : 0,
        AboutMaterials  : 1,
        AboutCompany    : 2,
    }
}

/**
 * Generates company logo string. When the actual logo is created remove that. 
 */
export const companyLogo = () =>
{
    const style = 
    {
        fontWeight  : '1000',
        fontSize    : '1.7em',
        color       : Palette.OnPrimaryColor
    };

    return(
        <div style = {style}>
            breezy
        </div>
    );
}