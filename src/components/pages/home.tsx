import React from 'react';

export default function Home() {
  // return (
  //   <div style={{
  //     width: "100%",
  //     height: "50%",
  //     // backgroundImage: `url("${require("../../assets/home-shaded-dark.jpg")}")`
  //     backgroundImage: `url("${require('../../assets/home-shaded-dark.jpg')}")`
  //   }}></div>
  // )
  return (
    <div className='home-root'>
      <div className='home-top-block' style={{
        // backgroundImage: `url("${require('../../assets/home-shaded-dark.jpg')}")`,
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center center',
        // backgroundSize: '100% auto'
      }}>
        <h2>Our mission is to promote and enable economic equality and personal prosperity for all people.</h2>
        <p>Yes, that includes you!</p>
        <h4>Choose your path...</h4>
      </div>
      <div className='home-bottom-block' style={{
        backgroundImage: `url("${require('../../assets/contour-blue.gif')}")`
      }}>
        <p>What can we do for you?</p>
        <p>
          To help you find your best path to personal prosperity, we provide FREE educational resources and counseling
          services in the areas of:
        </p>
        <p>{'1) Academic Development,'}</p>
        <p>{'2) Professional Advancement and'}</p>
        <p>{'3) Financial Management.'}</p>
        <p>Once you have the tools and skills you need,</p>
        <p>"we hope you never need to see us again!"</p>
        <p>{'[ABOUT] [GALLERY] [TESTIMONIALS] [CONTACT]'}</p>
      </div>
    </div>
  );
}
