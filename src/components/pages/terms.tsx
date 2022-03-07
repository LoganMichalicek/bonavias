import React from 'react';

export default function Terms() {
  return (
    <div style={{
      backgroundImage: `url("${require('../../assets/contour-blue.gif')}")`
    }}>
      <h2>Terms of Service</h2>
      <p>{'By using this website, contacting us and/or accessing any of our resources or services, you understand and agree that all resources and services are provided for educational purposes only, with no warranties of any kind either expressed or implied, and that you hold harmless anyone affiliated with The Bona Vias Foundation who may have provided those resources or services to you.'}</p>
    </div>
  );
}