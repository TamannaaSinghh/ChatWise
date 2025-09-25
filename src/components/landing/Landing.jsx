import React from "react";
import "./landing.css";
import Login from "../login/Login";
import { useUserStore } from "../../lib/userStore";

const LandingHeader = ({ username }) => {
  return (
    <header className="landing-header">
      <div className="branding">
        <span className="brand-logo" aria-hidden>
          💬
        </span>
        <h1 className="brand-title gradient-text">ChatWise</h1>
      </div>
      <nav className="primary-nav">
        <a href="#features" className="nav-link">
          Features
        </a>
        <a href="#auth" className="nav-link">
          Sign in
        </a>
      </nav>
      {username && (
        <div className="session-badge" aria-live="polite">
          Signed in as {username}
        </div>
      )}
    </header>
  );
};

const LandingFooter = () => {
  return (
    <footer className="landing-footer">
      <p className="footer-copy">
        © {new Date().getFullYear()} ChatWise • Stay connected, securely.
      </p>
      
    </footer>
  );
};

const Landing = () => {
  const { currentUser } = useUserStore();

  return (
    <div className="landing-root">
      <LandingHeader username={currentUser?.username} />

      <main className="landing-main">
        {/* Hero */}
        <section className="hero-section" aria-label="Intro">
          <div className="hero-content">
            <h2 className="hero-title">
              Fast, private, and simple chat for everyone
            </h2>
            <p className="hero-subtitle">
              Real-time messaging, media sharing, and seamless sync — all in one
              place.
            </p>
            
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="features-section"
          aria-label="Highlights"
        >
          <ul className="features-list">
            <li className="feature-item">
              ⚡ Instant messaging with a clean, focused interface
            </li>
            <li className="feature-item">🖼 Share your thoughts and media effortlessly</li>
            <li className="feature-item">
              🔔 Stay in control with notifications and details
            </li>
          </ul>
        </section>

        {/* Auth */}
        <section
          id="auth"
          className="auth-section"
          aria-label="Sign in or create account"
        >
          <div className="auth-wrapper">
            <div className="auth-info">
              <h2 className="brand-title gradient-text">Join ChatWise</h2>
              <p className="auth-description">
                Sign in to continue or create a new account. Your conversations
                are just a click away.
              </p>
              <img src="./screenshot.png" alt="" className="screenshot"/>
            </div>
            <div className="auth-form">
              <Login />
              
            </div>
            
          </div>
          <LandingFooter />
        </section>
        
      </main>

      
    </div>
  );
};

export default Landing;
