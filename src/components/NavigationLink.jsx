export default function NavigationLink({ source }) {
    return (
        <li>
            <a href={source.url}>{source.title}</a>
        </li>
    );
}

