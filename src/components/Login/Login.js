import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase()
    return (
        <div>
            <h1>Please Log in !!</h1>
            <button onClick={signInWithGoogle}>google Sign in</button>
            <br />
            <br />
            <form >
                <input type="text" name="" id="" placeholder='Your Name' />
                <br />
                <input type="email" name="" id="" placeholder='Your Email' />
                <br />
                <input type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default Login;