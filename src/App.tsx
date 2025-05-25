import React, { useState } from 'react';
import './App.css';

interface ChannelStatus {
  isOnline: boolean;
  channelName: string;
  checked: boolean;
}

function App() {
  const [channelName, setChannelName] = useState('');
  const [status, setStatus] = useState<ChannelStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const checkChannelStatus = async () => {
    if (!channelName.trim()) {
      setError('Please enter a channel name');
      return;
    }

    setLoading(true);
    setError(null);
    setStatus(null);

    try {
      // Note: Due to CORS restrictions, this requires a backend proxy in production
      // For demonstration, we'll simulate the API response
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simulate random online/offline status for demonstration
      const isOnline = Math.random() > 0.5;
      
      setStatus({
        isOnline: isOnline,
        channelName: channelName.trim(),
        checked: true
      });
      
      // Show a note about the CORS limitation
      if (status === null) {
        console.log('Note: This is a simulated response. In production, you would need a backend proxy to access the Kick.com API due to CORS restrictions.');
      }
    } catch (err) {
      setError('Failed to check channel status. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    checkChannelStatus();
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Kick Channel Checker</h1>
        <p className="subtitle">Check if a Kick.com channel is currently live</p>
        
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <input
              type="text"
              value={channelName}
              onChange={(e) => setChannelName(e.target.value)}
              placeholder="Enter channel name"
              className="input"
              disabled={loading}
            />
            <button 
              type="submit" 
              className="button"
              disabled={loading}
            >
              {loading ? 'Checking...' : 'Check Status'}
            </button>
          </div>
        </form>

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {status && status.checked && (
          <div className={`status ${status.isOnline ? 'online' : 'offline'}`}>
            <div className="status-indicator">
              <span className={`indicator ${status.isOnline ? 'online' : 'offline'}`}></span>
              <span className="channel-name">{status.channelName}</span>
            </div>
            <div className="status-text">
              {status.isOnline ? 'LIVE' : 'OFFLINE'}
            </div>
          </div>
        )}
        
        <div className="note">
          <p><strong>Note:</strong> This is a demo version with simulated responses.</p>
          <p>For production use with real Kick.com data, you'll need to set up a backend proxy server to handle API requests due to CORS restrictions.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
