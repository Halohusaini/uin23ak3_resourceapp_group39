import React from 'react';
import { useParams } from 'react-router-dom';
import resources from '../resources/resources'; // Adjust the path as needed
import NavigationLink from './NavigationLink';

export default function Resources() {
    const { category } = useParams();
    let content = resources.filter(res => res.category === category);
    
    if (content.length==0){
        return <p>Category not found</p>
    }


    
    

    return (
        <section>
           

                <h1>{content?.category}</h1>
                <p>{content?.text}</p>
                <ul>
                    {content?.sources.map((source, index) => (
                        <NavigationLink key={index} source={source} />
                    ))}
                </ul>
            
        </section>
    );
}
