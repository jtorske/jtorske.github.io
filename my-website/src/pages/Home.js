import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Home.css'

function Home() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const phrases = ["Hello, I'm Jordan.", "Welcome to my personal website."];

    useEffect(() => {
        let timer;
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];
            const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(30);
                }, 800);
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(100);
            }

            timer = setTimeout(handleTyping, isDeleting ? 30 : 100);
        };

        timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, phrases]);

    return (
        <>
            <div className="section">
                <p className="typing" style={{ animationDelay: '4s', fontSize: '2rem' }}>{text}</p>
            </div>
            <div className="socials">
                <a href="https://github.com/jtorske" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/jordan-torske/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div></>
    );
}

export default Home;
