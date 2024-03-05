import React from 'react';
import { useParams } from 'react-router-dom';
import resources from '../resources/resources'; // Adjust the path as needed
import NavigationLink from './NavigationLink';

export default function Resources() {
  const { category } = useParams();
  let content = resources.filter(res => res.category === category.toLowerCase());

  return (
    <section id='content'>
      
        <h1>{category}</h1>
        <ul>
          {content.map((source, index) => (
            <NavigationLink key={index} source={source} />
          ))}
        </ul>
      
    </section>
  );
}
