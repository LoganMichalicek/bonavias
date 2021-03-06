import React from 'react';

export default function Gallery() {
  return (
    <div className='gallery' style={{
      backgroundImage: `url("${require('../../assets/contour-blue.gif')}")`
    }}>
      <Photos />
      <hr/>
      <Videos />
    </div>
  );
}

function Photos() {
  return (
    <div className='gallery-photos'>
      <h2>Photos</h2>
      <p>Please send us any photos you would like us to consider adding to our gallery.</p>
      {'[PHOTOS]'}
    </div>
  );
}

function Videos() {
  return (
    <div className='gallery-videos'>
      <h2>Videos</h2>
      <p>Please send us any videos you would like us to consider adding to our gallery.</p>
      <h3>STILL UNDER CONSTRUCTION</h3>
      <p>Links to tutorial videos will be posted once our experts compile their FAQ topics.</p>
    </div>
  );
}