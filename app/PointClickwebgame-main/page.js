'use client';

import { useEffect } from 'react';
import './main.css';

export default function BouwersPage() {
    useEffect(() => {
        const sec = 1000;
        const offsetCharacter = 16;

        const mainTitle = document.getElementById("mainTitle");
        if (mainTitle) mainTitle.innerText = "WTF is CREATIVITY?";

        const gameWindow = document.getElementById("gameWindow");
        const mainCharacter = document.getElementById("mainCharacter");
        const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");
        const counterSpeech = document.getElementById("counterSpeech");
        const counterSpeech2 = document.getElementById("counterSpeech2");
        const mcAudio = document.getElementById("mcAudio");
        const cAudio = document.getElementById("cAudio");
        const kAudio = document.getElementById("kAudio");
        const krAudio = document.getElementById("krAudio");
        const dAudio = document.getElementById("dAudio");
        const pAudio = document.getElementById("pAudio");
        const draakAudio = document.getElementById("draakAudio");
        const inventoryList = document.getElementById("inventoryList");
        const inventoryBox = document.getElementById("inventoryBox");
        const sign = document.getElementById("sign");

        const counterAvatarImg = document.getElementById("counterAvatarImg");
        const counterAvatarImg2 = document.getElementById("counterAvatarImg2");

        const gameState = {
            door2locked: true,
            door1locked: true,
            booklocked: true,
            inventory: [],
        };

        function changeInventory(itemName, action) {
            if (!itemName || !action) return;

            if (action === 'add') {
                gameState.inventory.push(itemName);
            } else if (action === 'delete') {
                gameState.inventory = gameState.inventory.filter(item => item !== itemName);
            }
            updateInventory(gameState.inventory, inventoryList);
        }

        function updateInventory(inventory, inventoryList) {
            inventoryList.innerHTML = '';
            inventory.forEach(item => {
                const li = document.createElement('li');
                li.id = "inv-" + item;
                li.innerText = item;
                inventoryList.appendChild(li);
            });
        }

        function showMessage(targetBalloon, targetSound, message) {
            targetSound.currentTime = 0;
            targetSound.play();
            targetBalloon.style.opacity = "1";
            targetBalloon.innerText = message;
            setTimeout(() => hideMessage(targetBalloon, targetSound), 4 * sec);
        }

        function hideMessage(targetBalloon, targetSound) {
            targetSound.pause();
            targetBalloon.style.opacity = "0";
        }

        if (gameWindow) {
            gameWindow.onclick = function (e) {
                const rect = gameWindow.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                if (e.target.id !== "mcImage") {
                    mainCharacter.style.left = x - offsetCharacter + "px";
                    mainCharacter.style.top = y - offsetCharacter + "px";
                }

                console.log(e.target.id);

                switch (e.target.id) {
                    case "koelkast":
                        if (gameState.door2locked) {
                            if (document.getElementById("inv-ijsstaf")) {
                                gameState.door2locked = false;
                                changeInventory('ijsstaf', 'delete');
                                showMessage(mainCharacterSpeech, mcAudio, "Prinses Elsa");
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Ik kom u redden"), 8 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "*Gebruikt ijsstaf* "), 13 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "*Loopt de ijstrap op*"), 19 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "*Breekt Het ijskooi*"), 25 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "*Geeft Elsa een kus*"), 30 * sec);
                                setTimeout(() => { window.location.href = 'secondlvl.html'; }, 36000);
                            } else {
                                alert("Je moet eerst nog je ijskrachten krijgen voordat je prinses kan redden.");
                            }
                        }
                        break;

                    case "sign":
                        if (gameState.booklocked) {
                            if (document.getElementById("inv-rescue")) {
                                gameState.booklocked = false;
                                changeInventory('rescue', 'delete');
                                sign.style.opacity = 0.5;
                                showMessage(mainCharacterSpeech, mcAudio, "Het ijspaleis ik ben er.");
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Het ziet hier verlaten uit."), 5 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Elsa ben je hier?"), 10 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Oke de volgende kamer haar slaap kamer eerst even kloppen"), 15 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, kAudio, "*Klop klop*"), 20 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, dAudio, "*Opent de deur*"), 28 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Het ziet hier rommelig uit en waarom zie ik hier kapote kleding stukjes?"), 35 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Er ligt hier een briefje op de tafel."), 40 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, pAudio, "*Pakt het briefje*"), 45 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Beste Persoon die dit leest..."), 50 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Als u dit leest..."), 65 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Ga naar de ijsdraak..."), 75 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Oke dus ik moet naar de ijsdraak..."), 80 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Opdracht: ga naar de ijsdraak."), 86 * sec);
                                const book = document.getElementById("book");
                                if (book) {
                                    book.remove();
                                    changeInventory('book', 'add');
                                }
                            } else {
                                alert("Poort is gesloten");
                            }
                        }
                        break;

                    case "door1":
                        if (gameState.door1locked) {
                            if (document.getElementById("inv-book")) {
                                gameState.door1locked = false;
                                changeInventory('book', 'delete');
                                changeInventory('ijsstaf', 'add');
                                sign.style.opacity = 0.5;
                                showMessage(mainCharacterSpeech, mcAudio, "De ijsdraak");
                                setTimeout(() => counterAvatarImg2.style.opacity = 1, 5 * sec);
                                setTimeout(() => showMessage(counterSpeech, draakAudio, "*Gromt*."), 5 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Ijsdraak ik heb uw hulp nodig..."), 10 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Is gevangen genomen door de ijskoning."), 15 * sec);
                                setTimeout(() => showMessage(counterSpeech, draakAudio, "De ijskoning *gromt hard*"), 20 * sec);
                                setTimeout(() => showMessage(counterSpeech, draakAudio, "Ik geef u de ijskrachten heer Polar piet "), 25 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Hoe kent u mijn naam?"), 30 * sec);
                                setTimeout(() => showMessage(counterSpeech, draakAudio, "Ik was de persoon die u de visioenen gaf"), 35 * sec);
                                setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Weet u ook waar Elsa zich bevindt?"), 40 * sec);
                                setTimeout(() => showMessage(counterSpeech, draakAudio, "Elsa zit in de skull grot gevangen in een ijskooi "), 45 * sec);
                                setTimeout(() => counterAvatarImg2.style.opacity = 0, 50 * sec);
                                const book = document.getElementById("book");
                                if (book) book.remove();
                            } else {
                                alert("Draak moet nog opladen");
                            }
                        }
                        break;

                    case "rescue":
                        showMessage(mainCharacterSpeech, mcAudio, "Eindelijk polar peaks gevonden!");
                        setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Na lang zoeken naar dit Kasteel?"), 4 * sec);
                        setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Waar zal prinses Elsa zich bevinden?"), 9 * sec);
                        setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "*schreeuwt* ELSAAA! waar ben je?"), 15 * sec);
                        setTimeout(() => counterAvatarImg.style.opacity = 1, 20 * sec);
                        setTimeout(() => showMessage(counterSpeech, krAudio, "*Krekel geluiden*"), 20 * sec);
                        setTimeout(() => counterAvatarImg.style.opacity = 0, 24 * sec);
                        setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Dit is geen goed teken"), 26 * sec);
                        setTimeout(() => showMessage(mainCharacterSpeech, mcAudio, "Ik denk dat ik naar de poort van het ijs paleis moet gaan checken."), 32 * sec);
                        const rescue = document.getElementById("rescue");
                        if (rescue) {
                            rescue.remove();
                            changeInventory('rescue', 'add');
                        }
                        break;

                    default:
                        sign.style.opacity = 1;
                        break;
                }
            };
        }
    }, []);

    return (
        <>
            <div id="title"><h1 id="mainTitle" /></div>
            <div id="gameWindow">
                <div id="dialogBar" className="foreground">
                    <div id="setMainDialog">
                        <div id="mainCharacterAvatar" className="foreground"><img src="../../public/img/portairt.png" alt="main character avatar" /></div>
                        <div id="mainCharacterSpeech" className="foreground speech-bubble">...</div>
                        <div id="counterSpeech" className="foreground speech-bubble">...</div>
                        <div id="counterSpeech2" className="foreground speech-bubble">...</div>
                        <div id="counterAvatar" className="foreground"><img id="counterAvatarImg" src="../../public/img/ghost_speak.png" alt="counter avatar" /></div>
                        <div id="counterAvatar2" className="foreground"><img id="counterAvatarImg2" src="../../public/img/Jaydeededraak.png" alt="counter avatar2" /></div>
                        <div id="brownBar" />
                    </div>
                </div>

                <div id="inventoryBox" className="foreground">
                    <p>Inventory</p>
                    <ul id="inventoryList"></ul>
                </div>

                <div id="key1" className="foreground" />
                <div id="book" className="foreground" />
                <div id="door1" className="foreground" />
                <div id="ijsstaf" className="foreground" />
                <div id="door2" className="foreground" />
                <div id="koelkast" className="foreground" />
                <div id="sign" className="foreground" />
                <div id="rescue" className="foreground" />

                <div id="mainCharacter" className="heroCharacter">
                    <img id="mcImage" draggable="false" src="/img/animated-character-1-idle.gif" alt="main character" />
                </div>

                <div id="tilemap" className="background">
                    <img src="/img/tilemap1.jpg" draggable="false" alt="tilemap level 1" />
                </div>
            </div>

            <audio id="mcAudio"><source src="/audio/Gibberish - Sound Effect_01.mp3" type="audio/mpeg" /></audio>
            <audio id="cAudio"><source src="/audio/high pitch voice.mp3" type="audio/mpeg" /></audio>
            <audio id="kAudio"><source src="/audio/knock.mp3" type="audio/mpeg" /></audio>
            <audio id="krAudio"><source src="/audio/Jaydee.mp3" type="audio/mpeg" /></audio>
            <audio id="dAudio"><source src="/audio/Deur opening.mp3" type="audio/mpeg" /></audio>
            <audio id="pAudio"><source src="/audio/papier.mp3" type="audio/mpeg" /></audio>
            <audio id="draakAudio"><source src="/audio/Draakje.mp3" type="audio/mpeg" /></audio>
        </>
    );
}