import React from 'react';
import * as data from '../data/testimonials.json';

interface ITestimonialData {
  message: string;
  name: string;
}

export default function Testimonials() {
  const keys = Object.keys(data).filter(key => key !== 'default');
  const testimonials = data as Record<string, ITestimonialData[]>;
  return (
    <div style={{
      backgroundImage: `url("${require('../../assets/contour-blue.gif')}")`
    }}>
      <h2>Testimonials</h2>
      <p>
        We have helped thousands of clients over our working history, but some have provided feedback that we can share
        to let you know how much they valued the resources and services they received. Under each subject matter
        category, here is what they had to say about us:
      </p>
      {keys.map((title, idx) => {
        return <Quotes key={idx} title={title} messages={testimonials[title]} />;
      })}
      <hr />
      <h2>Letters</h2>
      <p>Some of our clients have gone so far as to write letters expressing their gratitude for our services:</p>
      <Letters />
      <hr />
      <p>If you have received help from us...</p>
      <h2>We would like to hear from you!</h2>
      <p>
        Please contact us if you would like to provide feedback that we can use to improve our website or any of our
        subject resources or services. If you would like to add your testimonial to the list above, briefly tell us:
      </p>
      <p>{'1) what resources or services you received,'}</p>
      <p>{'2) how you felt before, during and/or after working with us and'}</p>
      <p>{'3) how you think it may have impacted you.'}</p>
      <p>
        Feel free to identify any of our staff, volunteers or counselors if you feel someone did an outstanding job.
      </p>
      <p>
        PLEASE NOTE: If we add your feedback to our testimonials, we will show ONLY your first name and we will redact
        any other personal or identifiable information before sharing it publicly.
      </p>
      <p>{'[CONTACT US]'}</p>
    </div>
  );
}

const Quotes = (props: { title: string; messages: ITestimonialData[] }) => {
  return (
    <>
      <hr />
      <h3>{props.title}</h3>
      {props.messages.map((msg, idx) => {
        return <Quote key={idx} message={msg.message} name={msg.name} />;
      })}
    </>
  );
};

const Quote = (props: ITestimonialData) => {
  return (
    <>
      <p>{props.message}</p>
      <p>- {props.name}</p>
    </>
  );
};

const Letters = () => {
  return <p>{'[LETTER A] [LETTER B]'}</p>;
};
