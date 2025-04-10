import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/AuthPage.css'; // Adjust the path as necessary

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (!response.ok) {
                throw new Error('Sign up failed. Please try again.');
            }

            const data = await response.json();
            // Handle successful sign-up (e.g., redirect to login page)
            history.push('/login'); // Redirect to login page after sign-up
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSignUp}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
                <p>
                    <a href="/login">Already have an account? Log in</a>
                </p>
            </form>
        </div>
    );
};

export default SignUpPage;
