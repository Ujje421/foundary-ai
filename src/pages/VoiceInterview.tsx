import { useState } from 'react';
import { Mic, MicOff, Phone, Pause, Play } from 'lucide-react';
import { AppShell } from '../components/layout/AppShell';
import { voiceTranscript } from '../data/mockData';
import './VoiceInterview.css';

export function VoiceInterview() {
  const [isActive, setIsActive] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <AppShell
      breadcrumbs={[{ label: 'Voice Interview', path: '/voice' }, { label: 'Behavioral — Leadership' }]}
      fullWidth
    >
      <div className="voice-layout">
        {/* Main - Voice Area */}
        <div className="voice-main">
          <div className="voice-center">
            {/* AI Avatar */}
            <div className="voice-avatar-area">
              <div className={`voice-avatar ${isActive ? 'active' : ''}`}>
                <div className="voice-avatar-ring" />
                <div className="voice-avatar-inner">AI</div>
              </div>
              <div className="voice-avatar-label">AI Interviewer</div>
              <div className="voice-avatar-status">
                {isActive ? (
                  <><span className="status-dot status-dot-success status-dot-pulse" /> Listening...</>
                ) : (
                  <><span className="status-dot status-dot-neutral" /> Paused</>
                )}
              </div>
            </div>

            {/* Waveform */}
            <div className="voice-waveform">
              {Array.from({ length: 40 }).map((_, i) => (
                <div
                  key={i}
                  className={`voice-wave-bar ${isActive ? 'active' : ''}`}
                  style={{
                    animationDelay: `${i * 50}ms`,
                    height: `${Math.random() * 32 + 4}px`,
                  }}
                />
              ))}
            </div>

            {/* Timer */}
            <div className="voice-timer">04:32</div>

            {/* Controls */}
            <div className="voice-controls">
              <button
                className={`voice-control-btn ${isMuted ? 'danger' : ''}`}
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
              </button>
              <button
                className="voice-control-btn"
                onClick={() => setIsActive(!isActive)}
              >
                {isActive ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button className="voice-control-btn danger" onClick={() => setIsActive(false)}>
                <Phone size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar - Transcript */}
        <div className="voice-transcript-panel">
          <div className="voice-transcript-header">
            <span className="heading-subsection">Live Transcript</span>
            <span className="badge badge-primary">Recording</span>
          </div>
          <div className="voice-transcript-content">
            {voiceTranscript.map(entry => (
              <div key={entry.id} className="voice-transcript-entry">
                <div className="voice-transcript-speaker">
                  <span>{entry.speaker}</span>
                  <span className="voice-transcript-time">{entry.time}</span>
                </div>
                <div className="voice-transcript-text">{entry.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
