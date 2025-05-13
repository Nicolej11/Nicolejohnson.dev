/*
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './hero.css';

const Hero = () => {
  // State to track if the typewriter effect is complete
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // List of phrases to rotate through
  const phrases = ["a Python Developer", "a Data Scientist", "an AI Enthusiast"];
  
  // State to track the current phrase index
  const [index, setIndex] = useState(0);

  // State to determine when to start the rotation animation
  const [showRotating, setShowRotating] = useState(false);

  /* 
   * Loop through phrases after typing completes.
   * Waits for 2 seconds before switching to the next phrase.
   *//*
  useEffect(() => {
    let intervalId;

    if (isTypingComplete) {
      setShowRotating(true);  // Enables the rotating effect
      intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 2000); // Changes phrase every 2 seconds
    }

    return () => clearInterval(intervalId);
  }, [isTypingComplete, phrases.length]);

  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        {/* Main Typewriter Effect *//*}
        <h1 className={`typewriter-text ${isTypingComplete ? 'static-text' : ''}`}>
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              delay: 50,
              cursor: '',
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello, I'm Nicole")
                .callFunction(() => {
                  setIsTypingComplete(true); // Triggers the rotation start
                })
                .start();
            }}
          />
        </h1>

        {/* Rotating Phrases *//*}
        {showRotating && (
          <div className="animated-subtext">
            {/* Flex Container to keep I am and the phrase together *//*}
            <div className="phrase-wrapper">
              <span className="i-am-text">I am</span>

              {/* Container for rotating phrases *//*}
              <div className="rotating-phrase-container">
                <div
                  className="rotating-phrase"
                  style={{ transform: `translateY(-${index * 2.5}rem)` }}
                >
                  {phrases.map((phrase, i) => (
                    <div key={i} className="phrase-item">
                      {phrase}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
*/

import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import './hero.css';
import headshot from '../assets/headshot.jpeg'; // Adjust the path if needed

const Hero = () => {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const phrases = ["a Python Developer", "a Data Scientist", "an AI Enthusiast"];
  const [index, setIndex] = useState(0);
  const [showRotating, setShowRotating] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isTypingComplete) {
      setShowRotating(true);
      intervalId = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [isTypingComplete, phrases.length]);

  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        
        {/* Profile Image */}
        <img src={headshot} alt="Profile" className="profile-pic" />

        {/* Main Typewriter Effect */}
        <h1 className={`typewriter-text ${isTypingComplete ? 'static-text' : ''}`}>
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              delay: 50,
              cursor: '',
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hello, I'm Nicole")
                .callFunction(() => {
                  setIsTypingComplete(true);
                })
                .start();
            }}
          />
        </h1>

        {/* Rotating Phrases */}
        {showRotating && (
          <div className="animated-subtext">
            <div className="phrase-wrapper">
              <span className="i-am-text">I am</span>
              <div className="rotating-phrase-container">
                <div
                  className="rotating-phrase"
                  style={{ transform: `translateY(-${index * 2.5}rem)` }}
                >
                  {phrases.map((phrase, i) => (
                    <div key={i} className="phrase-item">
                      {phrase}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

