import React from 'react';

export default function Donate() {
  return (
    <>
      <h2>Make a Donation</h2>
      <h3>Donations are not yet tax deductible...</h3>
      <h3>We are working on our 501(c)(3) charity status.</h3>
      <p>
        Your generous donations go directly to sharing expert resources and services that we offer FREE OF CHARGE to the
        general public in order to provide equal opportunities to everyone. We go to great lengths to minimize expenses
        so that our clients receive as much value from your donation as possible. In fact, most of our staff and subject
        matter experts work as volunteers who are committed to sharing their personal knowledge and professional skills
        as a means of giving back to their communities after their own successful careers. We want everyone to have the
        opportunity to enjoy that same success.
      </p>
      <hr />
      <h3>Check or Money Order by Mail</h3>
      <p>
        Please make out checks or money orders to "The Bona Vias Foundation" and send them to the mailing address on our
        contact page. Be sure to save any check stubs or make copies of the check before sending it as we cannot mail
        receipts of your donation. Please do not send cash.
      </p>
      <h3>Credit Card by PayPal</h3>
      <p>
        Please use PayPal to make a donation to "donations@bonavias.org" using a credit card or your own account. For
        your convenience, the quick donation links below are available in the denominations shown. To make a donation of
        any other amount, simply select a denomination increment and increase the desired quantity before checkout. Your
        cart may contain only one denomination at a time. If you have any problems, try viewing your cart and removing
        the unwanted amount.
      </p>
      <hr />
      <p>{'[VIEW CART]'}</p>
      <p>{'[$5.00] [$10.00] [$20.00] [$50.00]'}</p>
    </>
  );
}
