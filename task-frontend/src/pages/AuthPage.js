import React, { useState } from 'react';

const AuthPage = ({ onLogin, onSignup }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const success = onLogin(email, password);
    if (success) {
      
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("❌ Passwords do not match.");
      return;
    }
    const success = onSignup(email, password);
    if (success) {
      setIsLogin(true); 
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

        <form onSubmit={isLogin ? handleLogin : handleSignup} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
            />
          )}
          <button type="submit" style={styles.button}>
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p style={{ marginTop: 20 }}>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setEmail('');
              setPassword('');
              setConfirmPassword('');
            }}
            style={styles.toggleButton}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    background: 'white',
    padding: 30,
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: 320,
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
  },
  input: {
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
    borderRadius: 4,
    border: '1px solid #ccc',
  },
  button: {
    padding: 10,
    fontSize: 16,
    borderRadius: 4,
    border: 'none',
    backgroundColor: '#4CAF50',
    color: 'white',
    cursor: 'pointer',
  },
  toggleButton: {
    border: 'none',
    background: 'none',
    color: '#0066cc',
    cursor: 'pointer',
    textDecoration: 'underline',
    fontSize: 14,
  },
};

export default AuthPage;
