import { Link } from 'react-router-dom';
import image from '../assets/notetaker.png';

export default function Portfolio() {
    return (
    <div>
        <Link
        to="https://github.com/aestrella0140"
        >
            <h1>click me</h1>
            <img src={image}></img>
        </Link>
    </div>
    )
}