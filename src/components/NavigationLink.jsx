// Corrected NavigationLink.jsx to display a single resource link
import React from 'react';
import { Link } from 'react-router-dom';

export default function NavigationLink({ source }) {
    return (
        <li id>
            <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a>
        </li>
    );
}
