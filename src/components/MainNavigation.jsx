import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link for navigation

export default function MainNavigation() {
    const categories = ["HTML", "CSS", "JavaScript", "React", "Sanity"];
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    return (
        <nav>
            <Link to="/category/HTML" className="tablinker" id="html">
          HTML
        </Link>
        <Link to="/category/CSS" className="tablinker" id="css">
          CSS
        </Link>
        <Link to="/category/JavaScript" className="tablinker" id="javascript">
          JavaScript
        </Link>
        <Link to="/category/React" className="tablinker" id="react">
          React
        </Link>
        <Link to="/category/Sanity and headless CMS" className="tablinker" id="sanity-and-headless-cms">
          Sanity and headless CMS
        </Link>
        </nav>
    );
}
