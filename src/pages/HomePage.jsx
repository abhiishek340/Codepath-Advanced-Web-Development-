import React, { useState } from 'react';
import ContentCreatorCard from '../components/ContentCreatorCard';
import ViewCreator from './ViewCreator';

function HomePage({ handleViewAllClick }) {
    return (
        <div className="home-page">
            {/* Link to view all creators */}
            <Link to="/" className="home-page-link" onClick={handleViewAllClick}>
                View All Creators
            </Link>
            
            {/* Link to add a new creator */}
            <Link to="/new" className="home-page-link">
                Add New Creator
            </Link>
        </div>
    );
}

export default HomePage;
