// src/components/AudioPlayer/AudioPlayer.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

const AudioPlayer = ({ trackUrl }) => (
  <Card className="mt-3">
    <Card.Body>
      <Card.Title>Now Playing</Card.Title>
      {trackUrl ? (
        <audio controls autoPlay src={trackUrl}>
          Your browser does not support the audio element.
        </audio>
      ) : (
        <p>Select a song to play</p>
      )}
    </Card.Body>
  </Card>
);

export default AudioPlayer;
