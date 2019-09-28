import React from 'react';
import { Palette, companyLogo, Orientation } from '../../Definitions';
import './FooterComponent.css'
import SocialMediaBar from '../controls/SocialMediaBarComponent.js';
import ImgRating from '../../res/icons/rating-icon.png'

const footerComponent = (props)=>
{
    //container additional styles
    const styleContainer = 
    {
        backgroundColor : Palette.PrimaryColor,
        height: '18rem',
        color: Palette.OnPrimaryColor,
    }
    //text additional styles
    const styleText = 
    {
        color: Palette.OnPrimaryColor,
        textDecoration: 'none',
    }

    const styleBorder = 
    {
        borderColor: Palette.OnPrimaryColor,
    }

    const reviewSection = generateReviewSection();
   
    //generate component
    return (
        <div style ={styleContainer}>
            <div className="footerContainer" style={styleBorder}> 
                <div className="footerLogo">{companyLogo()}</div>
                {reviewSection}
                <div className="footerContactInfoContainer" style ={styleText}>
                    <div className="footerSectionContactHeader">CONTACT</div>
                    <div className="footerSectionItem">1-802-123-4567</div>
                    <a className="footerSectionItem" href="mailto: hello@breezy.email.com" style={styleText}>hello@breezy.email.com</a>
                    <div className="footerSectionSocialMedia">
                        <SocialMediaBar orientation = {Orientation.Horizontal}/>
                    </div>
                </div>
            </div>
            <div className="footerSectionLegal">All rights reserved 2019</div>
        </div>        
       
    );
}

const generateReviewSection = () =>
{
    const review   = requestReview();
    let rating   = review.rating;
    const comment  = review.comment;
    const author   = review.author;
    const location = review.location;

    // Define styles for the read more link
    const styleReadMore = 
    {
        color: Palette.OnPrimaryColor,
        textDecoration: 'none',
        marginTop : '6%',
    };

    //define styles for the rating visualisation sections (starts)
    const styleRating = 
    {
        width: '1rem',
        height: '1rem',
        marginRight: '2px',
    }

    //generate amount of starts we need to display basaed on the raitn vale
    rating = rating > 10 ? 10 : rating;
    const ratingVisual = [];
    for(let i =0; i < rating; i++)
    {
        ratingVisual.push( <img src={ImgRating}  style = {styleRating} alt=""/>);
    }

    //finally geerate the section
    return(
        <div className="footerReviewSectionContainer">
            <div className="footerSectionReviewHeader">LATEST GOOGLE REVIEW</div>
            <div className="footerSectionRating">
               {ratingVisual}
            </div>
            <div className="footerSectionItem">{comment}</div>
            <div className="footerSectionReviewAuthor">{author + ', ' + location}</div>
            <a href="" className="footerSectionItem" style = {styleReadMore}>Read more ></a>
        </div>
    );
}

const requestReview = () =>
{
    return getTestReview();
}

const getTestReview = () =>
{
    const review = 
    {
        rating    : 5, 
        comment   : "Love the bracelet, definitely gonna order more in the future.",
        author    : "Michael Gulenko",
        location  : "Burlinton, Vermont"
    }

    return review;
}

export default footerComponent;