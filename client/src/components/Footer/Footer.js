import React from "react";

const Footer = _ => {
  return (
    <>
      <section class="copyright py-4 text-center text-black">
        <div class="container">
          <small className="name">Copyright &copy; 2019 Kumiko Nomura</small>
        </div>
      </section>
      <div class="scroll-to-top d-lg-none position-fixed ">
        <a
          class="js-scroll-trigger d-block text-center text-black rounded"
          href="#page-top"
        >
          <i class="fa fa-chevron-up" />
        </a>
      </div>
    </>
  );
};

export default Footer;
