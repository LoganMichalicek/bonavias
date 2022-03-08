import React, { useState, useEffect } from 'react';
import { ITestimonialData } from './testimonials';
import '../../assets/quote-blue.png';

type TestimonialsPlayerProps = { quotes: Record<string, ITestimonialData[]> };
export default function TestimonialsPlayer(props: TestimonialsPlayerProps) {
  const [currentTitleIdx, setCurrentTitleIdx] = useState(0);
  const [currentQuoteIdx, setCurrentQuoteIdx] = useState(0);

  const titles = Object.keys(props.quotes).filter(key => key !== 'default');

  function setTitle(newIdx: number) {
    // also set quote idx to zero
    setCurrentQuoteIdx(0);
    setCurrentTitleIdx(newIdx);
  }

  const quote = props.quotes[titles[currentTitleIdx]][currentQuoteIdx];
  const quoteCount = props.quotes[titles[currentTitleIdx]].length;

  return (
    <div className='testimonials-player'>
      <button className='title-left' onClick={() => setTitle(currentTitleIdx - 1)} disabled={currentTitleIdx <= 0}>Left</button>
      <h3 className='title-text'>{titles[currentTitleIdx]}</h3>
      <button className='title-right' onClick={() => setTitle(currentTitleIdx + 1)} disabled={currentTitleIdx >= titles.length - 1}>Right</button>
      <button className='quote-left' onClick={() => setCurrentQuoteIdx(currentQuoteIdx - 1)} disabled={currentQuoteIdx <= 0}>Left</button>
      <img src={'./assets/quote-blue.png'}/>
      <div className='quote-text'>
        <p>{quote.message}</p>
        <p><i>{quote.name}</i></p>
      </div>
      <button className='quote-right' onClick={() => setCurrentQuoteIdx(currentQuoteIdx + 1)} disabled={currentQuoteIdx >= quoteCount - 1}>Right</button>
    </div>
  );
}