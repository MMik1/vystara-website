'use client';

import './globals.css';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
    return (
        <div>
            <div className="header">
                <a href="#default" className="logo">CompanyLogo</a>
                <div className="header-right">
                    <a className="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="parent">
                <div className="div1">
                    <h1
                        className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold"
                        style={{ fontSize: '5em', display: 'inline-block' }}
                    >
                        <br />
                        <TypeAnimation
                            sequence={[
                                'The Kingdom',
                                4000,
                                'Vystara',
                                5000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                </div>
                <div className="div2">
                    <h1>Test</h1>
                    <p>Lorem ipsum dolor sit amet. Qui molestias optio ut debitis dolor et magni galisum. Sit similique fugit ut voluptatem numquam 33 facere itaque et explicabo dolorum.</p>
                </div>
                <div className="div3">
                    <h2>Test</h2>
                    <p>Lorem ipsum dolor sit amet. Qui molestias optio ut debitis dolor et magni galisum. Sit similique fugit ut voluptatem numquam 33 facere itaque et explicabo dolorum.</p>
                </div>
                <div className="div4">
                    <h3>Test</h3>
                    <p>Lorem ipsum dolor sit amet. Qui molestias optio ut debitis dolor et magni galisum. Sit similique fugit ut voluptatem numquam 33 facere itaque et explicabo dolorum.</p>
                </div>

                {/* Full page div5 section */}
                <div className="div5">
                    <h4>New Section</h4>
                    <p>This is a new section that will fill the full viewport.</p>
                </div>

                {/* Footer */}
                <div className="div6">
                    <h5>Footer</h5>
                    <p>Contact us at: example@company.com</p>
                </div>
            </div>
        </div>
    );
}
