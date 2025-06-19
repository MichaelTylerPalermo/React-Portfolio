import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './Experience.css';
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />


function Experience() {
  useEffect(() => {
    const srtop = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 1000,
      reset: true,
    });

    srtop.reveal('.experience .timeline', { delay: 400 });
    srtop.reveal('.experience .timeline .container', { interval: 400 });
  }, []);

  return (
   <section className="experience" id="experience">

  <h1 className="heading">Experience </h1>

  <div className="timeline">
    <div className="container right">
      <div className="content">
        <div className="tag">
          <h2>Ellumen, Inc.</h2>
        </div>
        <div className="desc">
            <h3>Front End Developer | DHS Contract</h3>
            <p>Dec 2023 - present</p>
        </div>
      </div>
    </div>

    <div className="container left">
      <div className="content">
        <div className="tag">
          <h2>Ellumen, Inc.</h2>
        </div>
        <div className="desc">
            <h3>AWS Cloud Engineer | DOD Contract</h3>
            <p>Mar 2023 – Dec 2023</p>
        </div>
      </div>
    </div>

    <div className="container right">
      <div className="content">
        <div className="tag">
          <h2>LabCorp Drug Development</h2>
        </div>
        <div className="desc">
            <h3>Full Stack Software Developer</h3>
            <p>Sep 2021 – Dec 2022</p>
        </div>
      </div>
    </div>

    <div className="container left">
      <div className="content">
        <div className="tag">
          <h2>Thatcher Technology Group </h2>
        </div>
        <div className="desc">
            <h3>SQL Developer</h3>
            <p>Feb 2021 – Aug 2021</p>
        </div>
      </div>
    </div>

    <div className="container right">
      <div className="content">
        <div className="tag">
          <h2>ComEd</h2>
        </div>
        <div className="desc">
            <h3>Software Development Intern | Internship</h3>
            <p>Jun 2019 – Aug 2019</p>
        </div>
      </div>
    </div>
  </div>

</section>
  );
}

export default Experience;
