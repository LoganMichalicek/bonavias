import React from 'react';

export default class Contact extends React.Component {

  constructor(props: null) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e: React.SyntheticEvent): void {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      first: { value: string };
      last: { value: string };
      email: { value: string };
      subject: { value: string };
      message: { value: string };
    };

    const first = target.first.value;
    const last = target.last.value;
    const email = target.email.value;
    const subject = target.subject.value;
    const message = target.message.value;

    // some ajax call
  }

  render() {
    return (
      <>
        <h2>Contact Information</h2>
        <p>Please contact us using any of the following methods...</p>
        <h3>Mailing Address</h3>
        <p>9975 Wadsworth Parkway, Westminster, CO 80021</p>
        <h3>Email Address</h3>
        <p>Please use the form below or email us at info@bonavias.org for more information.</p>
        <hr />
        <ContactForm handleSubmit={this.handleSubmit} />
      </>
    )
  }
}

const ContactForm = (props: { handleSubmit: (e: React.SyntheticEvent) => void }) => {
  return (
    <>
      <h2>Send Us A Message</h2>
      <p>We will respond as soon as possible.</p>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label>
            First Name:
            <input type="text" name="first"/>
          </label>
        </div>
        <div>
          <label>
            Last Name:
            <input type="text" name="last"/>
          </label>
        </div>
        <div>
          <label>
            Your Email Address:
            <input type="email" name="email"/>
          </label>
        </div>
        <div>
          <label>
            Email Subject:
            <input type="text" name="subject"/>
          </label>
        </div>
        <div>
          <label>
            Your Message
            <input type="text" name="message"/>
          </label>
        </div>
        <input type="submit" value="Send Message" />
      </form>
    </>
  )
}