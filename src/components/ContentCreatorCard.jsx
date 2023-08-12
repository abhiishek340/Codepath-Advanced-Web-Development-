import React from "react";
import { AiTwotoneEdit, AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { IoInformationCircle } from 'react-icons/io5';
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
// Component to contain a creator's info

function ContentCreatorCard({ contentCreator, handleCurrentCreator, handleEditCreator }) {
    // console.log(contentCreator.imageUrl);

    const handleViewCreatorClick = () => {
        const currentCreator = contentCreator;
        handleCurrentCreator(currentCreator);
    }

    const handleEditCreatorClick = () => {
        const creatorToEdit = contentCreator;
        handleEditCreator(creatorToEdit);
    }

    return (
        <>
            {/* Display their name, url, description, and image */}
            <div className="content-creator-card">
                <div className="content-creator-card-image">
                    <img src={contentCreator.imageURL} alt={contentCreator.name} />
                </div>
                <div className="content-creator-card-details">
                    <b>{contentCreator.name}</b> <br />
                    <Link to={'/' + contentCreator.id} data-tooltip-id="info-tooltip" data-tooltip-content="Display creator's info">
                        <IoInformationCircle size={30} onClick={handleViewCreatorClick} />
                        <Tooltip id="info-tooltip" />
                    </Link> &nbsp; 
                    <Link to={'/edit/' + contentCreator.id} data-tooltip-id="edit-tooltip" data-tooltip-content="Edit the creator's info">
                        <AiTwotoneEdit size={30} onClick={handleEditCreatorClick} className="pointer-link" />
                        <Tooltip id="edit-tooltip" />
                    </Link>
                    <p className="description">{contentCreator.description}</p>
                    
                    {contentCreator.youtube !== null && contentCreator.youtube !== '' ? (
                        <a href={'https://youtube.com/@' + contentCreator.youtube} target='__blank'>
                            <AiFillYoutube size={30} />
                        </a>
                    ) : ""} &nbsp;
                    {contentCreator.instagram !== null && contentCreator.instagram !== '' ? (
                        <a href={'https://www.instagram.com/' + contentCreator.instagram}>
                            <AiFillInstagram size={30} />
                        </a>
                    ): ""} &nbsp;
                    {contentCreator.twitter !== null && contentCreator.twitter !== "" ? (
                        <a href={'https://twitter.com/' + contentCreator.twitter}>
                            <AiOutlineTwitter size={30} />
                        </a>
                    ): ""}

                </div>
            </div>
        </>
    );
}

export default ContentCreatorCard;