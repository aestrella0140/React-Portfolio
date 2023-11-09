import { Link } from 'react-router-dom';
import notetaker from '../assets/notetaker.png';
import pinit from '../assets/PinIt.png';
import techblog from '../assets/techblog.png';
import regex from '../assets/regex.png';

export default function Portfolio() {
    return (
    <div className='flex-container'>
        <div className='flex flexbox'>
        <Link
        to="https://github.com/aestrella0140/Note-Taker-Challenge-9"
        >
            <h1>Note Taker</h1>
            <img className="project" src={notetaker}></img>
        </Link>
        </div>
        <div className='flex flexbox'>
        <Link
        to="https://github.com/aestrella0140/SVG-Logo-Maker-Challenge-8"
        >
            <h1>SVG Logo Maker</h1>
            <img className="project" src={pinit}></img>
        </Link>
        </div>
        <div className='flex flexbox'>
        <Link
        to="https://github.com/aestrella0140/MVC-Tech-Blog"
        >
            <h1>Mvc Tech Blog</h1>
            <img className="project" src={techblog}></img>
        </Link>
        </div>
        <div className='flex flexbox'>
        <Link
        to="https://gist.github.com/aestrella0140/6f4e474cd1e52cc4102bc3c3f8253ad9"
        >
            <h1>Regex Tutorial</h1>
            <img className="project" src={regex}></img>
        </Link>
        </div>
    </div>
    )
}