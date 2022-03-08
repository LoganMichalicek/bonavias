import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props: { pages: string[]; initialPage?: string }) {
  return (
    <div className='footer'>
      <p>© {new Date().getFullYear()} The Bona Vias Foundation <Link to='/privacy'>Privacy Policy</Link> <Link to='/terms'>Terms of Service</Link> | Follow Us [LINKS]</p>
    </div>
  );
}

// TODO: Add Privacy Policy
// To protect your privacy to the fullest extent possible, we do not store, use or share any records of any private information regarding any of our clients. It is the responsibility of each individual client to maintain all information and tools that may be downloaded, compiled or developed anytime before, during or after any counseling session. We will not be able to provide any backup information should it be lost.

// TODO: Add Terms of Service
// By using this website, contacting us and/or accessing any of our resources or services, you understand and agree that all resources and services are provided for educational purposes only, with no warranties of any kind either expressed or implied, and that you hold harmless anyone affiliated with The Bona Vias Foundation who may have provided those resources or services to you.

// TODO: Add Social Media Links
// Facebook, Twitter, Instagram, YouTube
