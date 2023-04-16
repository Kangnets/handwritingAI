import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
    return (
        <ul>
            <Link to={'/home'}>Home</Link>
            <Link to={'/board'}>Board</Link>
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/Intro'}>Introducing</Link>
            <Link to={'/AI'}>AI</Link>
        </ul>
    );
}

export default Nav;
