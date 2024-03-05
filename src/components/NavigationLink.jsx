// Corrected NavigationLink.jsx to display a single resource link
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationLink({ source }) {
    return (
        <li>
            <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a>
        </li>
    );
}


/* // Inside NavigationLink.jsx

import React from 'react';

const NavigationLink = ({ source }) => {
  return (
    <li>
      <a href={source.url} target="_blank" rel="noopener noreferrer">
        {source.title}
      </a>
    </li>
  );
};

export default NavigationLink;
*/