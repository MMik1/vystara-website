'use client';

import './home.css';
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';

export default function Home() {
    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const players = [
        {
            name: 'Viorr',
            role: 'Prins',
            image: '/img/Viorr.png',
            playtime: '50 Dagen',
            kills: '50+',
            land: 'Vystara',
            bijnaam: 'Geen idee'
        },
        {
            name: 'vJonas',
            role: 'Hertog',
            image: '/img/vJonas.png',
            playtime: '50 Dagen',
            kills: '50+',
            land: 'Vystara',
            bijnaam: 'DJONAS'
        },
        {
            name: 'Uxify',
            role: 'Hertog',
            image: '/img/Uxify.png',
            playtime: '30+ Dagen',
            kills: '50+',
            land: 'Vystara',
            bijnaam: 'Geen idee'
        },
        {
            name: 'Rebuldir',
            role: 'Hertog',
            image: '/img/Rebuldir.png',
            playtime: '50 Dagen',
            kills: '50+',
            land: 'Vystara',
            bijnaam: 'DJONAS'
        },
        {
            name: 'Viniq',
            role: 'Generaal',
            image: '/img/Viniq.png',
            playtime: '30+ Dagen',
            kills: '50+',
            land: 'Vystara',
            bijnaam: 'Geen idee'
        },
        {
            name: 'Viniq',
            role: 'Generaal',
            image: '/img/Viniq.png',
            playtime: '50 Dagen',
            kills: '50+',
            land: 'Vystara',
            bijnaam: 'Geen idee'
        },
        {
            name: 'Viniq',
            role: 'Generaal',
            image: '/img/Viniq.png',
            playtime: '50 Dagen',
            kills: '50+',
            land: 'Vystara',
            bijnaam: 'Geen idee'
        },
        {
            name: 'Viniq',
            role: 'Generaal',
            image: '/img/Viniq.png',
            playtime: '50 Dagen',
            kills: '50+',
            land: 'Vystara',
            bijnaam: 'Geen idee'
        },
        {
            name: 'Viniq',
            role: 'Generaal',
            image: '/img/Viniq.png',
            playtime: '50 Dagen',
            kills: '50+',
            land: 'Vystara',
            bijnaam: 'Geen idee'
        },
        {
            name: 'Viniq',
            role: 'Generaal',
            image: '/img/Viniq.png',
            playtime: '50 Dagen',
            kills: '50+',
            land: 'Vystara',
            bijnaam: 'Geen idee'
        },
        {
            name: 'Viniq',
            role: 'Generaal',
            image: '/img/Viniq.png',
            playtime: '50 Dagen',
            kills: '50+',
            land: 'Vystara',
            bijnaam: 'Geen idee'
        },
        {
            name: 'Viniq',
            role: 'Generaal',
            image: '/img/Viniq.png',
            playtime: '50 Dagen',
            kills: '50+',
            land: 'Vystara',
            bijnaam: 'Geen idee'
        },
        {
            name: 'Viniq',
            role: 'Generaal',
            image: '/img/Viniq.png',
            playtime: '50 Dagen',
            kills: '50+',
            land: 'Vystara',
            bijnaam: 'Geen idee'
        },
        {
            name: 'Seedcell',
            role: 'Speler',
            image: '/img/vJonas.png',
            playtime: '50 Dagen',
            kills: '50+',
            land: 'Midusa',
            bijnaam: 'Hertog Djagdy'
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target); // only animate once
                }
            });
        }, { threshold: 0.2 });

        const cards = document.querySelectorAll('.card');
        cards.forEach(card => observer.observe(card));

        return () => {
            cards.forEach(card => observer.unobserve(card));
        };
    }, [search]);

    useEffect(() => {
        const scrollBox = document.querySelector('.player-scroll-box');
        const div5 = document.querySelector('.div5');

        let lastPageScroll = window.scrollY

        const handleScroll = () => {
            if (scrollBox.scrollTop > 10) {
                div5.classList.add('moved-up');
            } else  if (window.scrollY > lastPageScroll) {
                div5.classList.remove('moved-up');
            }
        };

        const handlePageScroll = () => {
            if (window.scrollY < lastPageScroll) {
                // User is scrolling up
                div5.classList.remove('moved-up');
            }
            lastPageScroll = window.scrollY;
        };

        scrollBox.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', handlePageScroll);

        return () => {
            scrollBox.removeEventListener('scroll', handleScroll);
            window.removeEventListener('scroll', handlePageScroll);
        };
    }, []);

    const openModal = (player) => {
        setSelectedPlayer(player);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedPlayer(null);
        setShowModal(false);
    };

    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="header">
                <a href="#default" className="logo">Vystara</a>
                <div className="header-right">
                    <a className="active" href="#home">Nav1</a>
                    <a href="/bouwers">Nav2</a>
                    <a href="/login">Admin Login</a>
                </div>
            </div>

            <div className="parent">
                <div className="div1">
                    <div className="hero-overlay">
                        <div className="diagonal-line"/>
                        <h1 className="text-white mb-4 font-extrabold" style={{fontSize: '5em'}}>
                            <TypeAnimation
                                sequence={[
                                    'The Kingdom',
                                    4000,
                                    'Vystara',
                                    5000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h1>
                    </div>
                </div>

                <div className="div-group-horizontal">
                    <div className="div2">
                        <h2>Introductie</h2>
                        <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                    <div className="div3">
                        <h2>Text title</h2>
                        <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                    <div className="div4">
                        <h2>Youtube</h2>
                        <p>Lorem ipsum dolor sit amet...</p>
                    </div>
                </div>

                <div className="div5">
                    <input
                        type="text"
                        placeholder="Filter op naam"
                        className="search-input"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="player-scroll-box">
                        <div className="card-container">
                            {players
                                .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
                                .map((player, i) => (
                                    <div key={i} className="card">
                                        <img src={player.image} alt={player.name}/>
                                        <div className="title">{player.name}</div>
                                        <div className="role">{player.role}</div>
                                        <button className="info-button" onClick={() => openModal(player)}>info</button>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                <div className="div6">
                    <h5>Footer</h5>
                    <p>Contact us at: example@company.com</p>
                </div>

                {showModal && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <div className="modal-header">
                                <button className="close-btn" onClick={closeModal}>Sluit</button>
                            </div>
                            <div className="modal-body">
                                <h2 className="modal-title">{selectedPlayer.name}</h2>
                                <div className="modal-section">
                                    <strong>Rank</strong>
                                    <div className="modal-box">{selectedPlayer.role}</div>
                                </div>
                                <div className="modal-section">
                                    <strong>Kills</strong>
                                    <div className="modal-box">{selectedPlayer.kills}</div>
                                </div>
                                <div className="modal-section">
                                    <strong>Playtime</strong>
                                    <div className="modal-box">{selectedPlayer.playtime}</div>
                                </div>
                                <div className="modal-section">
                                    <strong>Bijnaam</strong>
                                    <div className="modal-box">{selectedPlayer.bijnaam}</div>
                                </div>
                                <div className="modal-section">
                                    <strong>Land van oorsprong</strong>
                                    <div className="modal-box">{selectedPlayer.land}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
