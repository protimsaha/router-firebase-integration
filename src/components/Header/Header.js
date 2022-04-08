import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const { user, handleSignout } = useFirebase()
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/orders'>Orders</Link>
            <Link to='/register'>Register</Link>
            {
                user.uid ? <button onClick={handleSignout}>Sign out</button> :
                    <Link to='/login'>login</Link>
            }
            <span style={{ margin: 50 }}>{user.displayName && user.displayName}</span>

        </nav>
    );
};

export default Header;