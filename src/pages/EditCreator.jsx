import React, { useState } from "react";
import { supabase } from "../../client";
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import ConfirmDeleteDialog from "../components/ConfirmDeleteDialog";
import 'react-confirm-alert/src/react-confirm-alert.css';

function EditCreator({ creatorToEdit }) {
    // State variables to manage form input fields
    const [name, setName] = useState(creatorToEdit.name); 
    const [description, setDescription] = useState(creatorToEdit.description);
    const [imageURL, setImageURL] = useState(creatorToEdit.imageURL); 
    const [youtube, setYoutube] = useState(creatorToEdit.youtube);
    const [instagram, setInstagram] = useState(creatorToEdit.instagram);
    const [twitter, setTwitter] = useState(creatorToEdit.twitter);

    // Function to handle form submission
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const updatedCreator = { name, description, imageURL, youtube, instagram, twitter };
        
        try {
            // Update the content creator's info in the database
            const { data, error } = await supabase 
                .from('creators')
                .update(updatedCreator)
                .eq('id', creatorToEdit.id);

            if (!error) {
                alert('Successfully edited content creator!');
                window.location = '/';
            } else {
                alert('Error editing content creator');
            }
        } catch (error) {
            alert('Error editing content creator');
            console.error('Error:', error);
        }
    }

    // Function to handle content creator deletion
    const handleDelete = async () => {
        console.log('proceed to delete');
        const { error } = await supabase    
            .from('creators')
            .delete()
            .eq('id', creatorToEdit.id);

        if (error) {
            throw error;
        } else { 
            alert('Successfully deleted creator!');
            window.location = '/';
        }
    }

    return (
        <div className="edit-creator-container">
            <h2>Edit Content Creator</h2>
            <form onSubmit={handleEditSubmit} className="edit-creator-form">
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" autoComplete="name" required value={name} onChange={e => setName(e.target.value)} />
                <br />

                <label htmlFor="description">Description: </label>
                <textarea rows="5" cols="50" id="description" name="description" required value={description} onChange={e => setDescription(e.target.value)} />
                <br />
                
                <label htmlFor="imageUrl">Image URL (optional):</label>
                <input type="text" id="imageUrl" name="imageUrl" value={imageURL} onChange={e => setImageURL(e.target.value)} />
                <br />
                
                <label htmlFor="youtubeHandle"><AiFillYoutube /> Youtube: </label>
                <input type="text" id="youtube" name="youtube" value={youtube} onChange={e => setYoutube(e.target.value)} />
                <br />

                <label htmlFor="instagramHandle"><AiFillInstagram /> Instagram: </label>
                <input type="text" id="instagram" name="instagram" value={instagram} onChange={e => setInstagram(e.target.value)} />
                <br />

                <label htmlFor="twitterHandle"><AiOutlineTwitter /> Twitter: </label>
                <input type="text" id="twitter" name="twitter" value={twitter} onChange={e => setTwitter(e.target.value)} />
                <br />

                <div className="buttons-container">
                    <button className="submit-edit-button" type="submit">Save Changes</button> &nbsp;
                    <button id="delete-button" onClick={handleDelete}>Delete</button>
                </div>
            </form>
        </div>
    )
}

export default EditCreator;
