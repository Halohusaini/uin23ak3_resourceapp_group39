import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook for navigation

export default function MainNavigation() {
    const categories = ["HTML", "CSS", "JavaScript", "React", "headless-cms"];
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const navigate = useNavigate(); // Use the useNavigate hook for navigation

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        navigate(`/resources/${category}`); // Navigate programmatically
    };

    return (
        <nav id="tab-container">
            {categories.map((category) => (
                <button
                    key={category}  
                    className={`btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category)} // Use the new handler function
                >
                    {category}
                </button>
            ))}
        </nav>
    );
}
