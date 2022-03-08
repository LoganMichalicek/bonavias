import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
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
        {/* <h4>Choose your path...</h4> */}
      </div>
      <div className='home-bottom-block' style={{
        // backgroundImage: `url("${require('../../assets/contour-blue.gif')}")`
      }}>
        <div className='hbb-left-side'>
          <h2>What can we do for you?</h2>
          <p>
            To help you find your best path to personal prosperity, we provide FREE educational resources and counseling services in the areas of:<br/><br/>

            1) Academic Development,<br/>
            2) Professional Advancement and<br/>
            3) Financial Management.
          </p>
          <hr />
          <p>Once you have the tools and skills you need,</p>
          <p>"we hope you never need to see us again!"</p>
          <hr />
          <p>{'[ABOUT] [GALLERY] [TESTIMONIALS] [CONTACT]'}</p>
          {['About', 'Gallery', 'Testimonials', 'Contact'].map((page, idx) => {
            return <Link key={idx} to={'/' + page.toLowerCase()}><button>{page}</button></Link>
          })}
        </div>
        <img src='https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-%EC%83%98%ED%94%8C-%EC%A7%80-%EB%B9%A8%EA%B0%84%EC%83%89-%EB%9D%BC%EC%9A%B4%EB%93%9C-%EC%8A%A4%ED%83%AC%ED%94%84.jpg'/>
      </div>
    </div>
  );
}
