'use client';

import './login.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();

        // Simple hardcoded login
        if (username === 'admin' && password === '1234') {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        } else {
            setError('Foute gebruikersnaam of wachtwoord');
        }
    };

    return (
        <div className="container">
            <h1>Vystara Inlog</h1>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Account"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Wachtwoord"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Inlog</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}
