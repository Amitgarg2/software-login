import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="container">
      {/* Features Section */}
      <div className="features-section">
        <h2>Features</h2>
        <ul>
          <li>Collaborative Learning Environment</li>
          <li>User-Friendly Resource Sharing</li>
          <li>Class Creation and Participation</li>
          <li>Access to a Diverse Range of Study Materials</li>
        </ul>
      </div>

      {/* Login/Register Form Section */}
      <div className="form-section">
        <h2>Name of project</h2>

        {/* Toggle between Sign In and Sign Up */}
        <div className="form-toggle">
          <button onClick={() => setIsSignIn(true)} className={isSignIn ? "active" : ""}>Sign In</button>
          <button onClick={() => setIsSignIn(false)} className={!isSignIn ? "active" : ""}>Create Account</button>
        </div>

        {isSignIn ? (
          // Sign In Form
          <div className="form">
            <h3>Welcome Back</h3>
            <p>Hello there, sign in to continue</p>
            <input type="text" placeholder="Username or email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
          </div>
        ) : (
          // Sign Up Form
          <div className="form">
            <h3>Create Account</h3>
            <p>Hello there, fill in below to create an account</p>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Phone Number" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
