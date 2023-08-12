import React from 'react';
import { AiTwotoneEdit, AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';

function ViewCreator({ contentCreator, handleEditCreator }) {
    // Function to handle the "Edit" button click
    const handleEditCreatorClick = () => {
        // Pass the selected content creator to the parent component's edit handler
        const creatorToEdit = contentCreator;
        handleEditCreator(creatorToEdit);
    }

    return (
        <div className='ViewOne'>
            <div className="ViewOne-container">
                <div className='creator-first'>
                    <div>
                        {/* Display the content creator's image and name */}
                        <img src={contentCreator.imageURL} alt={contentCreator.name} />
                        <h2 style={{ margin: 0 }}>{contentCreator.name}</h2>
                    </div>
                    <div className='social-btns'>
                        {/* Display YouTube link if available */}
                        {contentCreator.youtube !== null && contentCreator.youtube !== '' && (
                            <a className='btns' href={'https://youtube.com/@' + contentCreator.youtube} target='_blank'>
                                <AiFillYoutube size={30} /> {contentCreator.youtube}
                            </a>
                        )}
                        {/* Display Instagram link if available */}
                        {contentCreator.instagram !== null && contentCreator.instagram !== '' && (
                            <a className='btns' href={'https://www.instagram.com/' + contentCreator.instagram} target='_blank'>
                                <AiFillInstagram size={30} /> {contentCreator.instagram}
                            </a>
                        )}
                        {/* Display Twitter link if available */}
                        {contentCreator.twitter !== null && contentCreator.twitter !== '' && (
                            <a className='btns' href={'https://twitter.com/' + contentCreator.twitter} target='_blank'>
                                <AiOutlineTwitter size={30} /> {contentCreator.twitter}
                            </a>
                        )}
                    </div>
                    <hr />
                </div>
                <div>
                    {/* Display the content creator's description */}
                    <p>{contentCreator.description}</p>
                </div>
                {/* "Edit" button to allow editing the content creator */}
                <button className="submit-edit-button" onClick={handleEditCreatorClick}>Edit</button> &nbsp;
            </div>
        </div>
    );
}

export default ViewCreator;
