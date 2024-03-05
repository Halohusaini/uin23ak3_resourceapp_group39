import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for navigation

export default function MainNavigation() {
    const categories = ["HTML", "CSS", "JavaScript", "React", "headless-cms"];
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <nav>
            <ul>
                
            {categories.map((category) => (
            
                   <li key={category}
                    className={`btn ${activeCategory === category ? 'active' : ''}`}
                    
                >
                    <Link to={`/resources/${category}`}>{category}</Link>
                </li>
            ))}
            </ul>
        </nav>

    );
}
