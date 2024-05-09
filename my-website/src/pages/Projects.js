import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faJava } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff, faFeather, faDatabase } from '@fortawesome/free-solid-svg-icons';

function Projects() {
    return (
        <div className="projects-container">
            <h1 className="projects-title">Projects</h1>
            <div className="projects-box">
                <div className="quadrant">
                    <div className="title-container">
                        <h2>Prepper</h2>
                        <div className="icons">React <FontAwesomeIcon icon={faReact} /></div>
                        <div className="icons">Java <FontAwesomeIcon icon={faJava} /></div>
                        <div className="icons">SpringBoot <FontAwesomeIcon icon={faPowerOff} /></div>
                        <div className="icons">Maven <FontAwesomeIcon icon={faFeather} /></div>
                        <div className="icons">MySQL <FontAwesomeIcon icon={faDatabase} /></div>
                    </div>
                    <ul>
                        <li><strong>Meal Planning Made Easy:</strong> The application aims to make meal planning stress-free for people learning to live independently. It provides a daily planner and an Instagram-like format for users to plan their meals and get inspiration from others.</li>
                        <li><strong>Comprehensive Meal Information:</strong> Users can view meal photos, ingredients, and recipe details, including the time required to recreate a dish. This feature helps users make informed decisions about their meals.</li>
                        <li><strong>Integration with Calendar:</strong> Once users have decided on their meals, they can select and upload them to their calendar. This integration helps users stay organized and plan their meals effectively.</li>
                    </ul>
                </div>
                <div className="quadrant">
                    <div className="title-container">
                        <h2>Wildlife Rescue Schedule Generator</h2>
                        <div className="icons">Java <FontAwesomeIcon icon={faJava} /></div>
                        <div className="icons">MySQL <FontAwesomeIcon icon={faDatabase} /></div>
                    </div>
                    <ul>
                        <li><strong>Automated Scheduling:</strong> The application automates the scheduling process for volunteers caring for injured and orphaned wild animals. It reads from a database updated throughout the day to schedule tasks such as feeding, medical treatments, and cage cleaning.</li>
                        <li><strong>Efficiency Optimization:</strong> The program optimizes efficiency by grouping similar tasks together and provides a list of tasks to complete within each hour of the day. It also notifies the backup volunteer if the available time is insufficient to complete all tasks.</li>
                        <li><strong>Objective:</strong> The primary goal of the application is to ensure that injured and orphaned wild animals receive the necessary care while making the scheduling process more efficient for volunteers.</li>
                    </ul>
                </div>
                <div className="quadrant">
                    <div className="title-container">
                        <h2>Flight Reservation System</h2>
                        <div className="icons">Java <FontAwesomeIcon icon={faJava} /></div>
                        <div className="icons">MySQL <FontAwesomeIcon icon={faDatabase} /></div>
                    </div>
                    <ul>
                        <li><strong>Efficient Flight Reservation:</strong> Simplifies the flight reservation process for various stakeholders, including tourism agents, passengers, and airline agents.</li>
                        <li><strong>Comprehensive Management:</strong> Manages flight information, seat selection, payments, cancellations, and flight operations efficiently.</li>
                        <li><strong>Modular and Scalable Design:</strong> Utilizes a modular design for maintainability and scalability, ensuring easy addition and removal of functionalities.</li>
                    </ul>
                </div>
                <div className="quadrant">
                    <div className="title-container">
                        <h2>Scene It</h2>

                    </div>
                    <ul>
                        <li>W.I.P.</li>
                    </ul>
                </div>
            </div>
            <div className="footer">
                All projects listed on my Github profile: <a href="https://github.com/jtorske" target="_blank" rel="noopener noreferrer"> jtorske <FontAwesomeIcon className="github-icon" icon={faGithub} /></a>
            </div>
        </div>
    );
}

export default Projects;
