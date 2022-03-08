import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className='about-us' style={{
      // backgroundImage: `url("${require('../../assets/contour-blue.gif')}")`
    }}>
      <AboutUs />
      <hr/>
      <HereToHelp />
      <hr/>
      <SubjectMatterExperts />
      <hr/>
      <BoardOfDirectors />
    </div>
  );
}

function AboutUs() {
  return (
    <div className='about-us-block'>
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
      {['Gallery', 'Testimonials', 'Donate', 'Contact'].map((page, idx) => {
          return <Link key={idx} to={'/' + page.toLowerCase()}><button>{page}</button></Link>
        })}
    </div>
  );
}

function HereToHelp() {
  return (
    <div className='here-to-help-block'>
        <h2>We are here to help you in these key areas:</h2>
        <div className='help-aca-dev'>
          <h3>Academic Development</h3>
          <p>Your education and work-related skills are the foundation of your marketability for the rest of your life, so it's important to stay focused and drive toward your objectives instead of just going along for the ride and waiting to see where you end up. An optimized academic plan is the first step on your best path and it is much more than just earning good grades in school. What may seem like trivial decisions could have lasting effects on your career and you will be much better off in the long run if you make those decisions with the right tools and information that best suit your needs. It's never too late to discover what makes you happy and how to earn a living doing it.</p>
          <Link to='/testimonials'><button>Testimonials</button></Link>
        </div>
        <div className='help-pro-adv'>
          <h3>Professional Advancement</h3>
          <p>Your professional career will span many decades...<br/><br/>STILL UNDER CONSTRUCTION</p>
          {/* <Link to='/testimonials'><button>Testimonials</button></Link> */}
          <button onClick={() => alert('Still under construction!')}>Read more</button>
        </div>
        <div className='help-fin-man'>
          <h3>Financial Management</h3>
          <p>Your knowledge of basic financial management will guide you through some of the toughest decisions...<br/><br/>STILL UNDER CONSTRUCTION</p>
          {/* <Link to='/testimonials'><button>Testimonials</button></Link> */}
          <button onClick={() => alert('Still under construction!')}>Read more</button>
        </div>
      </div>
  );
}

function SubjectMatterExperts() {
  return (
    <div className='subject-matter-experts-block'>
      <h2>Subject Matter Experts</h2>
      <p>Our resources and services are provided by experts in their fields who have significant experience working with people who very likely asked the same questions and needed the same information as you.  Your counselor may vary depending on your needs, so please be specific when you contact us for more information and when scheduling your appointment.  We want to make sure you get in touch with the right person.</p>
      <Link to='/contact'><button>Get More Information</button></Link>
      <br/>
      <h3>Do you want to join us?</h3>
      <p>Are you a subject matter expert in the areas described above who is willing to work with people in need of your expertise to help them find their best path to personal prosperity?  If so, please contact us and let's talk about how we can make that work for the benefit of everyone involved.  This is a very rewarding opportunity to give back to your community and you will have fun doing it!</p>
      <Link to='/contact'><button>Join Us</button></Link>
    </div>
  );
}

function BoardOfDirectors() {
  return (
    <div className='board-of-directors-block'>
      <h2>Board of Directors</h2>
      <h3>Click on any tile to read the full biography.</h3>
      <p>[Dr. Adrian Michalicek, President]</p>
      <p>[Dr. Teresa Nuñez, Vice-President]</p>
      <p>[Jon Rager, Secretary]</p>
      <p>[Aileda Lindal, Treasurer]</p>
      <p>[Kimber Laurence]</p>
    </div>
  );
}