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
    //Content to the left, images to the right
    LeftToRight: 0,
    //Content to the right, images to the left
    RightToleft: 1
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