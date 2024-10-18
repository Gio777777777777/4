import React, { useState } from 'react';
import './App.css';

const Card = ({ title, image, description }) => {
    const [showContent, setShowContent] = useState(true);

    const toggleContent = () => {
        setShowContent(prevShowContent => !prevShowContent);
    };

    return (
        <div className="card">
            <h3>{title}</h3>
            {showContent && (
                <>
                    <img src={image} alt={title} />
                    <p>{description}</p>
                </>
            )}
            <button onClick={toggleContent}>
                {showContent ? 'Hide' : 'Show'}
            </button>
        </div>
    );
};

export default Card;
