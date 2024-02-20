import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import resources from '../resources/resources';

function Resources() {
    const { category } = useParams(); // Assuming dynamic routing based on category
    const [currentResources, setCurrentResources] = useState([]);

    useEffect(() => {
        // Assuming resources is an object where keys are categories and values are arrays of resources
        // Update currentResources based on the category selected
        const selectedResources = resources[category] || [];
        setCurrentResources(selectedResources);
    }, [category]);

    return (
        <div>
            <h2>{category} Resources</h2>
            <ul>
                {currentResources.map((resource, index) => (
                    <li key={index}>
                        {/* Assuming resource has a name and description */}
                        <h3>{resource.name}</h3>
                        <p>{resource.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Resources;