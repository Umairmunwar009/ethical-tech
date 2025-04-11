import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/AuthPage.css';

const AuthPage = () => {
    const [activeTab, setActiveTab] = useState('login'); // State to toggle between tabs
    const history = useHistory();

    // Login form state
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    // Sign Up form state
    const [signUpName, setSignUpName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpError, setSignUpError] = useState('');

    // Handle Login
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError('');

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: loginEmail, password: loginPassword }),
            });

            if (!response.ok) {
                throw new Error('Login failed. Please check your credentials.');
            }

            const data = await response.json();
            history.push('/'); // Redirect to home page after login
        } catch (err) {
            setLoginError(err.message);
        }
    };

    // Handle Sign Up
    const handleSignUp = async (e) => {
        e.preventDefault();
        setSignUpError('');

        try {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name: signUpName, email: signUpEmail, password: signUpPassword }),
            });

            if (!response.ok) {
                throw new Error('Sign up failed. Please try again.');
            }

            const data = await response.json();
            history.push('/login'); // Redirect to login page after sign-up
        } catch (err) {
            setSignUpError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-box"> {/* Wrap the content in the auth-box */}
                {/* Tabs */}
                <div className="tabs">
                    <button
                        className={activeTab === 'login' ? 'active' : ''}
                        onClick={() => setActiveTab('login')}
                    >
                        Login
                    </button>
                    <button
                        className={activeTab === 'signup' ? 'active' : ''}
                        onClick={() => setActiveTab('signup')}
                    >
                        Sign Up
                    </button>
                </div>

                {/* Login Form */}
                {activeTab === 'login' && (
                    <div className="form-container">
                        <form onSubmit={handleLogin}>
                            <div>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input
                                    type="password"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Login</button>
                        </form>
                    </div>
                )}

                {/* Sign Up Form */}
                {activeTab === 'signup' && (
                    <div className="form-container">
                        <form onSubmit={handleSignUp}>
                            <div>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    value={signUpName}
                                    onChange={(e) => setSignUpName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Email:</label>
                                <input
                                    type="email"
                                    value={signUpEmail}
                                    onChange={(e) => setSignUpEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label>Password:</label>
                                <input
                                    type="password"
                                    value={signUpPassword}
                                    onChange={(e) => setSignUpPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit">Sign Up</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AuthPage;