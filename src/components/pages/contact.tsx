import React from 'react';

interface ISubmittable {
  handleSubmit: (e: React.SyntheticEvent) => void;
}

// TODO: Debounce the submit button
export default class Contact extends React.Component {
  constructor(props: null) {
    super(props);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.handleSubscribeSubmit = this.handleSubscribeSubmit.bind(this);
  }

  handleMessageSubmit(e: React.SyntheticEvent): void {
    /**
     * 1. Prevent the default 'submit' action
     * 2. Type-check and type-coerce the results
     * 3. Pull the values
     * 4. TEMPORARY: console log the results
     *       - Will eventually be an ajax call
     */
    e.preventDefault();

    const target = e.target as typeof e.target & {
      first: { value: string };
      last: { value: string };
      email: { value: string };
      subject: { value: string };
      message: { value: string };
      subscribe: { checked: boolean };
    };

    const first = target.first.value;
    const last = target.last.value;
    const email = target.email.value;
    const subject = target.subject.value;
    const message = target.message.value;
    const subscribe = target.subscribe.checked;

    const values = { first, last, email, subject, message, subscribe };

    console.log(values);
  }

  handleSubscribeSubmit(e: React.SyntheticEvent): void {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      subscriptionEmail: { value: string };
    };

    const subscriptionEmail = target.subscriptionEmail.value;

    console.log(subscriptionEmail);
  }

  render() {
    return (
      <div className='contact' style={{
        backgroundImage: `url("${require('../../assets/contour-blue.gif')}")`
      }}>
        <ContactInfo />
        <hr />
        <ContactForm handleSubmit={this.handleMessageSubmit} />
        <hr />
        <FollowUs />
        <hr />
        <SubscribeSection handleSubmit={this.handleSubscribeSubmit} />
      </div>
    );
  }
}

const ContactInfo = () => {
  return (
    <div className='contact-info'>
      <h2>Contact Information</h2>
      <p>Please contact us using any of the following methods...</p>
      <br/>
      <h3>Mailing Address</h3>
      <p>9975 Wadsworth Parkway, Westminster, CO 80021</p>
      <br/>
      <h3>Email Address</h3>
      <p>Please use the form below or email us at info@bonavias.org for more information.</p>
      <br/>
      <h3>No Walk-In Services</h3>
      <p>
        At this time, and until COVID-19 restrictions are lifted permanently, we do not maintain any walk-in office
        space. Instead, all resources are provided by email and all services are scheduled by appointment only and may
        be conducted virtually. In person appointments and group seminars are only available in the vicinity of Denver,
        Colorado.
      </p>
    </div>
  );
};

const ContactForm = (props: ISubmittable) => {
  return (
    <div className='contact-form'>
      <h2>Send Us A Message</h2>
      <p>We will respond as soon as possible.</p>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>
            First Name:
            <input type="text" name="first" />
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" name="last" />
          </label>
        </div>
        <div>
          <label>
            Your Email Address:
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Email Subject:
            <input type="text" name="subject" />
          </label>
        </div>
        <div>
          <label>
            Your Message:
            <input type="text" name="message" />
          </label>
        </div>
        <div>
          <input type="checkbox" name="subscribe" /> Check this box if you also want to receive our email notifications.
          You may unsubscribe at any time.
        </div>
        <div>{'[RECAPTCHA]'}</div>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};

const FollowUs = () => {
  return (
    <div className='follow-us'>
      <h2>Follow Us On Social Media</h2>
      <p>{'[Facebook] [Twitter] [Instagram] [YouTube]'}</p>
    </div>
  );
};

const SubscribeSection = (props: ISubmittable) => {
  return (
    <div className='subscribe'>
      <h2>Subscribe</h2>
      <h3>Sign up for our email notifications:</h3>
      <form onSubmit={props.handleSubmit}>
        <div>
          <input type="email" placeholder="Enter your e-mail address" name="subscriptionEmail" />
          <input type="submit" value="Subscribe" />
        </div>
        {'[RECAPTCHA]'}
        <div>
          <p>
            By submitting your information, you are granting us permission to send you our email notifications. You may
            unsubscribe at any time.
          </p>
        </div>
      </form>
    </div>
  );
};
