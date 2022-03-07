import React from 'react';

export default function About() {
  return (
    <div style={{
      backgroundImage: `url("${require('../../assets/contour-blue.gif')}")`
    }}>
      <h2>About Us</h2>
      <h3>{'We are working toward our 501(c)(3) charitable organization status.'}</h3>
      <h3>
        We provide FREE educational resources and counseling services to help you find your best path to personal
        prosperity.
      </h3>
      <p>
        What started in 1993 as a volunteer tutor service for underprivileged students has grown into something much
        larger. We learned along the way that "prosperity" means much more than just financial success and that the best
        way to thrive is to take an active role in shaping the elements that define your version of success. Those
        particular elements may not be shared among all cultures, but it seems that most cultures share one common
        problem... not everyone is taught what they need to know to realize a meaningful way of life, or at least not
        early enough to avoid making costly mistakes and learning critical lessons the hard way. We are committed to
        addressing that problem and to helping you find a plan that maximizes your physical, emotional and psychological
        well-being. Still, let's be honest, that's much easier to do if you build wealth instead of debt, so let's
        discuss your academic, professional and financial needs. There is always something to learn that you wish you
        had known sooner.
      </p>
      <p>
        If you struggle in any of these areas, as we all do sometimes, please contact us and let's figure out how we can
        help you. Once you are on your way to achieving your goals, "we hope you never need to see us again!"
      </p>
      <p>{'[GALLERY] [TESTIMONIALS] [DONATE] [CONTACT]'}</p>
      <p>...</p>
    </div>
  );
}
