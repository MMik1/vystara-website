'use client';

import './sollicitatie.css';
import { TypeAnimation } from "react-type-animation";
import React from 'react';

export default function sollicitatie() {
    const autoResize = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

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
                        Sollicitatie
                    </h1>
                </div>

                <div className="div1">
                    <form action="/home" method="POST">
                        <label htmlFor="naam">Naam</label>
                        <input type="text" id="naam" name="naam" placeholder="Naam.." />

                        <label htmlFor="ign">Ingame Naam</label>
                        <input type="text" id="ign" name="ign" placeholder="IGN.." />

                        <label htmlFor="discord">Discord Naam</label>
                        <input type="text" id="discord" name="discord" placeholder="Discord#0000" />

                        <label htmlFor="ervaring">Ervaring met Kingdom</label>
                        <input type="text" id="ervaring" name="ervaring" placeholder="Bijv. survival, bouwen..." />

                        <label htmlFor="motivatie">Motivatie</label>
                        <textarea
                            id="motivatie"
                            name="motivatie"
                            placeholder="Vertel ons waarom je Vystara wilt joinen?"
                            onInput={autoResize}
                            rows={2}
                            className="auto-textarea"
                        ></textarea>

                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}
