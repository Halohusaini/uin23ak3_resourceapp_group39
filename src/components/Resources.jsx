import React from 'react';
import { useParams } from 'react-router-dom';
import resources from '../resources/resources'; // Adjust the path as needed
import NavigationLink from './NavigationLink';

export default function Resources() {
    const { category } = useParams();
    let content = resources.find(res => res.category === category);

    return (
        <section>
            <article>
                <h1>{content?.category}</h1>
                <p>{content?.text}</p>
                <ul>
                    {content?.sources.map((source, index) => (
                        <NavigationLink key={index} source={source} />
                    ))}
                </ul>
            </article>
        </section>
    );
}
