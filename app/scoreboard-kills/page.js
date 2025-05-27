'use client';

import './leaderboard.css';
import { TypeAnimation } from "react-type-animation";
import React from 'react';
import Countdown from 'react-countdown';

export default function scoreboard() {
    const playerNames = [
        "1KillvoorMij", "Player2", "Player3", "Player4", "Player5",
        "Player6", "Player7", "Player8", "Player9", "Player10"
    ];

    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <header className="header">
                <a href="/home" className="logo">Vystara</a>
                <nav className="header-right">
                    <a href="/home">Nav1</a>
                    <a href="/bouwers">Nav2</a>
                    <a href="/login">Admin Login</a>
                </nav>
            </header>
            <div className="parent">
                <div className="hero-overlay">
                    <div className="diagonal-line" />
                    <h1 className="text-white mb-4 font-extrabold" style={{ fontSize: '5em' }}>
                        <TypeAnimation
                            sequence={['Leaderboard', 4000, 'Kills', 5000, 'Juni', 5000]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                </div>

                <div className="div1">
                    <div className="div2"></div>
                    <div className="leaderboard-rows">
                        {playerNames.map((name, index) => (
                            <div className="leaderboard-row" key={index}>
                                <div className="leaderboard-rank">#{index + 1}</div>
                                <div className="leaderboard-name">{name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="div3">
                    <h1>Einde maand</h1>
                    <Countdown className="timer" date={new Date('2025-06-30T00:00:00')} />
                </div>
            </div>
        </div>
    );
}
