import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        // Handle sign up logic here
    };

    const handleGoogleSignUp = () => {
        // Handle Google sign up logic here
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign Up</button>
            </form>
            <button className="google-signup-button" onClick={handleGoogleSignUp}>
                <img src="/images/google-logo.png" alt="Google logo" />
                Sign Up with Google
            </button>
        </div>
    );
}

export default SignUp;