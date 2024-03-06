import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import resources from '../resources/resources'; // Adjust the path as needed
import NavigationLink from './NavigationLink';


export default function Resources() {
  const { category } = useParams();
  let content = resources.filter(res => res.category === category.toLowerCase());
 
if (!content)  {
  return resources(res => res.category[0])
}


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
