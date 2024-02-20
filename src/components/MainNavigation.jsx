import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import resources from '../resources/resources';


export default function MainNavigation() {
    const [activeSource, setActiveSource] = useState("HTML");
    const categories = ["HTML", "CSS", "JavaScript", "React", "Sanity and headless CMS"];

    useEffect(() => {
        console.log(activeSource);
    }, [activeSource]);

    const handleSourceChange = (source) => {
        setActiveSource(source);
    };

    return (
        <div id="tab-container">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => handleSourceChange(category)}
                    className={activeSource === category ? 'active' : ''}
                >
                    {category}
                </button>
            ))}
        </div>
    );

    // Funksjon for å håndtere kildeendring og oppdatere den aktive tilstanden


}