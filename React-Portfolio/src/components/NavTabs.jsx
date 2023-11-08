import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <div>
        <ul className="nav nav-tabs">
            <h1 className='name'>Adrian Estrella</h1>
            <li className='nav-item'>
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    About me
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to="/Portfolio"
                    className={currentPage === '/Porfolio' ? 'nav-link active' : 'nav-link'}
                >
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                    to="/Contact"
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </Link>
            </li>
            <li className='nav-item'>
                <Link
                to="/Resume"
                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </Link>
            </li>
        </ul>
        </div>
    );
}

export default NavTabs;