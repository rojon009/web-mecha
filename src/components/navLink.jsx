import { Link } from 'react-router-dom';
const NavLinks = (props) => {
    const pathName = props.location.pathname.toString();
    const match = (url) => {
        if (url === pathName) return true;
    }
    console.log(pathName);
    const { p } = props;

    return (
        <li className="px-2 relative flex flex-col items-center">
            <Link className={`hover:text-blue-400 transition-colors ${match(p) ? 'active pointer-events-none' : ''}`} to={p}>{props.children}</Link>
            {
                match(p) ? (<span className="arrow-up absolute bottom-0 "></span>) : ''
            }
        </li>
    )
}

export default NavLinks