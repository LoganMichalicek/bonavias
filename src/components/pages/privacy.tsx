import React from 'react';

export default function Privacy() {
  return (
    <div style={{
      backgroundImage: `url("${require('../../assets/contour-blue.gif')}")`
    }}>
      <h2>Privacy Policy</h2>
      <p>{'To protect your privacy to the fullest extent possible, we do not store, use or share any records of any private information regarding any of our clients. It is the responsibility of each individual client to maintain all information and tools that may be downloaded, compiled or developed anytime before, during or after any counseling session. We will not be able to provide any backup information should it be lost.'}</p>
    </div>
  );
}
