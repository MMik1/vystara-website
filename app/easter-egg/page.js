'use client';

import { useEffect, useState } from 'react';
import './randy.css';

export default function Randy() {
    const [score, setScore] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);
    const [deathMessage, setDeathMessage] = useState("");

    useEffect(() => {
        const dino = document.getElementById("dino");
        const cactus = document.getElementById("cactus");

        if (!dino || !cactus) return;

        let scoreInterval;
        let gameLoop;

        const messages = [
            "Viorr is echt een lekkerding",
            ""
        ];

        function jump() {
            if (!dino.classList.contains("jump")) {
                var audio = new Audio('/audio/jump.mp3');
                audio.play();
                dino.classList.add("jump");
                setTimeout(() => {
                    dino.classList.remove("jump");
                }, 300);
            }
        }

        const startGame = () => {
            setIsGameOver(false);
            setScore(0);
            setDeathMessage("");

            scoreInterval = setInterval(() => {
                setScore(prev => prev + 1);
            }, 100);

            gameLoop = setInterval(() => {
                const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
                const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

                if (!isGameOver && cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
                    const audio = new Audio('/audio/dood.mp3');
                    audio.play();
                    endGame();
                }
            }, 10);
        };

        const endGame = () => {
            console.log("Free Gidoo!");
            jump = function() {};
            clearInterval(gameLoop);
            clearInterval(scoreInterval);
            setDeathMessage(messages[Math.floor(Math.random() * messages.length)]);
            setIsGameOver(true);
        };

        const handleKeyDown = () => {
            if (!isGameOver) jump();
        };

        document.addEventListener("keydown", handleKeyDown);
        startGame();

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            clearInterval(scoreInterval);
            clearInterval(gameLoop);
        };
    }, []);

    const handleRestart = () => {
        window.location.reload();
    };

    return (
        <div>
            <div className="header">
                <a href="/home" className="logo">Vystara</a>
                <div className="header-right">
                    <a className="active" href="/PointClickwebgame-main">Nav1</a>
                    <a href="/bouwers">Nav2</a>
                    <a href="/login">Admin Login</a>
                </div>
            </div>

            <div className="parent">
                <div className="Game">
                    <div id="dino"></div>
                    <div
                        id="cactus"
                        className="cactus"
                        style={{ animationPlayState: isGameOver ? 'paused' : 'running' }}
                    ></div>
                </div>
                <div className="score">Score: {score}</div>
                {isGameOver && (
                    <div className="game-over">
                        <h2>Ge Quick DROPT!</h2>
                        <p>{deathMessage}</p>
                        <p>Jouw Score: {score}</p>
                        <button onClick={handleRestart}>Respawn</button>
                    </div>
                )}
            </div>
        </div>
    );
}
