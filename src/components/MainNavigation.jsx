import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import resources from "../resources/resources";

export default function MainNavigation() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const uniqueCategories = resources
      .reduce((acc, current) => {
        const x = acc.find((item) => item.category === current.category);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, [])
      .map((resources) => resources.category);

    setCategories(uniqueCategories);
    setActiveCategory(uniqueCategories[0]);
  });

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    navigate(`/resources/${category}`);
  };

  return (
    <nav id="tab-container">
      {categories.map((category) => (
        <button
          key={category}
          className={`btn ${activeCategory === category ? "active" : ""}`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}
