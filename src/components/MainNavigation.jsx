import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for navigation

export default function MainNavigation() {
    const categories = ["HTML", "CSS", "JavaScript", "React", "headless-cms"];
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <nav id="tab-container">
            {categories.map((category) => (
                <button
                    key={category}  
                    className={`btn ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category)}
                >
                    <Link to={`/resources/${category}`}>{category}</Link>
                </button>

                
            ))}
        </nav>

    );
}
