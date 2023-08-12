import React, { useState } from "react";
import { supabase } from '../../client';
import { AiFillYoutube, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

function AddCreator() {
    // State variables to manage form input fields
    const [name, setName] = useState(''); 
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState(''); 
    const [youtube, setYoutube] = useState('');
    const [instagram, setInstagram] = useState('');
    const [twitter, setTwitter] = useState('');

    // Access the history object to manage navigation
    const history = useHistory();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const newCreator = { name, description, imageURL, youtube, instagram, twitter };
        console.log(newCreator); 
        
        try {
            // Use the supabase client to upsert (add or update) the new creator data
            const { data, error } = await supabase
                .from('creators')
                .upsert(newCreator);

            if (!error) {
                alert('Successfully added creator!');
                // Navigate back to the main page after successful addition
                history.push('/');
            } else {
                alert('Error adding creator');
            }
        } catch (error) {
            alert('Error adding creator');
            console.error('Error:', error);
        }
    }

    return (
        <div className="add-creator-container">
            {/* Page title */}
            <h2>Add a New Content Creator</h2>
            
            {/* Form for adding a new creator */}
            <form onSubmit={handleSubmit} className="add-creator-form">
                {/* Name */}
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" required value={name} onChange={e => setName(e.target.value)} /><br />

                {/* Description */}
                <label htmlFor="description">Description:</label>
                <textarea id="description" rows="5" required value={description} onChange={e => setDescription(e.target.value)} /><br />

                {/* Image URL */}
                <label htmlFor="imageURL">Image URL (optional):</label>
                <input type="text" id="imageURL" value={imageURL} onChange={e => setImageURL(e.target.value)} /><br />

                {/* Social Media Links */}
                <label htmlFor="youtube">Youtube:</label>
                <input type="text" id="youtube" value={youtube} onChange={e => setYoutube(e.target.value)} /><br />
                
                <label htmlFor="instagram">Instagram:</label>
                <input type="text" id="instagram" value={instagram} onChange={e => setInstagram(e.target.value)} /><br />
                
                <label htmlFor="twitter">Twitter:</label>
                <input type="text" id="twitter" value={twitter} onChange={e => setTwitter(e.target.value)} /><br />
                
                {/* Submit button */}
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddCreator;
