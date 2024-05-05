import React, { useState } from 'react';
import './SignIn.css';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        // Handle sign in logic here
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign in logic here
    };

    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign In</button>
            </form>
            <button className="google-signin-button" onClick={handleGoogleSignIn}>
                <img src="/images/google-logo.png" alt="Google logo" />
                Sign In with Google
            </button>
        </div>
    );
}

export default SignIn;