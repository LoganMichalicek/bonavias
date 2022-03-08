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

  return (
    <div className='testimonials-player' style={{
      border: '3px',
      borderStyle: 'dashed',
      borderColor: 'green'
    }}>
      <div className="tp-titles">
        <button className='left-arrow' onClick={() => setTitle(currentTitleIdx - 1)} disabled={currentTitleIdx <= 0}>Left</button>
        <h3 className='tp-title'>{titles[currentTitleIdx]}</h3>
        <button className='right-arrow' onClick={() => setTitle(currentTitleIdx + 1)} disabled={currentTitleIdx >= titles.length - 1}>Right</button>
      </div>
      <div className="tp-quote">
        <button className='left-arrow' onClick={() => setCurrentQuoteIdx(currentQuoteIdx - 1)} disabled={currentQuoteIdx <= 0}>Left</button>
        <Quote quote={quote} />
        <button className='right-arrow' onClick={() => setCurrentQuoteIdx(currentQuoteIdx + 1)} disabled={currentQuoteIdx >= titles.length - 1}>Right</button>
      </div>
    </div>
  );
}

const Quote = (props: { quote: ITestimonialData }) => {
  return (
    <div className='tp-quote'>
      <img src={'./assets/quote-blue.png'}/>
      <div className='tp-quote-text'>
        <p>{props.quote.message}</p>
        <p><i>{props.quote.name}</i></p>
      </div>
    </div>
  );
};