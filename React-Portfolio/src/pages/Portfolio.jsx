import { Link } from 'react-router-dom';
import notetaker from '../assets/notetaker.png';
import pinit from '../assets/PinIt.png';
import techblog from '../assets/techblog.png';
import regex from '../assets/regex.png';

export default function Portfolio() {
    return (
    <div>
        <div className='flex flexbox'>
        <Link
        to="https://github.com/aestrella0140/Note-Taker-Challenge-9"
        >
            <h1>click me</h1>
            <img src={notetaker}></img>
        </Link>
        </div>
        <div className='flex flexbox'>
        <Link
        to="https://github.com/aestrella0140/SVG-Logo-Maker-Challenge-8"
        >
            <h1>click me</h1>
            <img src={pinit}></img>
        </Link>
        </div>
        <div className='flex flexbox'>
        <Link
        to="https://github.com/aestrella0140/MVC-Tech-Blog"
        >
            <h1>click me</h1>
            <img src={techblog}></img>
        </Link>
        </div>
        <div className='flex flexbox'>
        <Link
        to="https://gist.github.com/aestrella0140/6f4e474cd1e52cc4102bc3c3f8253ad9"
        >
            <h1>click me</h1>
            <img src={regex}></img>
        </Link>
        </div>
    </div>
    )
}