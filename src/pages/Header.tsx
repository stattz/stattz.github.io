import { Link } from 'react-router-dom';
import './../assets/css/Header.css'

export default function Header() {
    return <nav>
        <h1><a href="/">Stats NFT</a></h1>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="https://github.com/stattz/stattz.github.io" target="_blank">GitHub</a></li>
        </ul>
    </nav>;
}