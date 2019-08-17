import React from "react";
import "./Footer.css";

const Footer = _ => {
  return (
    <>
    <section className='copyright bg-dark py-4 text-center text-white'>
      <h3 id='copyright'>Copyright @ 2019 Kumiko Nomura</h3>
      <div className="container">
        <div className="text-center center-block">
          <a target="_blank" href="https://www.linkedin.com/in/kumikonomura">
            <i id='social-fb' class="fa fa-3x fa-linkedin" />
          </a>
          <a target="_blank" href="https://github.com/kumikonomura">
            <i id='social-tw' class="fa fa-3x fa-github" />
          </a>
          <a href="mailto:knomurap@gmail.com">
            <i id='social-gp' className="fa fa-3x fa-envelope" />
          </a>
        </div>
      </div>
      </section>
    </>
    /* // <>
    //   <section id='lab_social_icon_footer className="copyright bg-dark py-4 text-center text-white">
    //     <div className="container">
    //       <div>
    //       <small id='copyright' className="name">Copyright &copy; 2019 Kumiko Nomura</small>
    //     </div>
    //     {/* <div className='icons'> */
    /* //     <a target="_blank" href="https://www.linkedin.com/in/kumikonomura">
    //           <i class="fa fa-3x fa-linkedin" />
    //         </a>
    //         <a target="_blank" href="https://github.com/kumikonomura">
    //           <i class="fa fa-3x fa-github" />
    //         </a>
    //         <a href="mailto:knomurap@gmail.com">
    //           <i className="fa fa-3x fa-envelope" />
    //         </a>
    //         </div> */
    //     {/* </div> */}
    /* //   </section> */
    // </> 
  );
};

export default Footer;
