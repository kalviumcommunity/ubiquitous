import React from 'react';

function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to SkillSwap</h1>
      <p>
        A place where you can exchange your skills with others. Learn photography while teaching React!
      </p>

      <button
        onClick={() => alert('Explore Page Coming Soon!')}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          marginTop: '1rem',
          cursor: 'pointer'
        }}
      >
        Explore Skills
      </button>
    </div>
  );
}

export default Home;
