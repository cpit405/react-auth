import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from '../firebase';
import './SignIn.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            navigate("/main");
          } catch (error) {
            console.error(error);
          }
    };

    const handleGoogleSignIn = () => {
        // Handle Google sign in logic here
    };

    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
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