import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
    // State variables for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Logic to check if username and password are correct
        if (username === 'admin' && password === 'password') {
            setLoggedIn(true); // Set loggedIn state to true if login is successful
        } else {
            alert('Invalid username or password'); // Show alert for invalid credentials
        }
    };

    // JSX for the login form
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {loggedIn && <p>Welcome, {username}!</p>} {/* Show welcome message if logged in */}
        </div>
    );
};

export default LoginPage;
