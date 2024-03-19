import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export default function MainNavigation() {
    const categories = ["HTML", "CSS", "JavaScript", "React", "headless-cms"];
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const navigate = useNavigate(); 

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        navigate(`/resources/${category}`); 
    };

    return (
        <nav id="tab-container">
            {categories.map((category) => (
                <button
                    key={category}  
                    className={`btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category)} 
                >
                    {category}
                </button>
            ))}
        </nav>
    );
}
