import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-tabs">
            <li>
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                  About me
                </Link>
            </li>
            <li>
                <Link
                to="/Portfolio"
                className={currentPage === '/Porfolio' ? 'nav-link active' : 'nav-link'}
                >
                  Portfolio  
                </Link>
            </li>
            <li>
                <Link
                to="/Contact"
                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                >
                </Link>
            </li>
        </ul>
    );
}

export default NavTabs;