import React from 'react';
import GitHubCalendar from 'react-github-calendar';

function App() {
  return (
    <div style={{ 
      backgroundColor: '#14121F',
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <GitHubCalendar username="adarsh-2003" />
    </div>
  );
}

export default App;
