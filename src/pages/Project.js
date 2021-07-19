import React from "react";
import MainLayout from "../layout/Main";
const Project = () => {
  return (
    <MainLayout>
      <section className="page portfolio" id="page-portfolio">
        <div className="topic">
          <h1>Project.</h1>
          <span className="lnr lnr-briefcase"></span>
        </div>
        <div className="button-portfolio">
          <span className="btn active-port">
            all
          </span>
          <span className="btn" >
            NHAT TIN LOGISTICS
          </span>
          <span className="btn" >
            Freelancer
          </span>
        </div>
        <div className="grid-portfolio">
          <div className="product brand show">
            <a href="https://watson-vcard.netlify.app/img/portfolio/img-1.jpg">
              <figure className="effect-img">
                <img
                  src="https://watson-vcard.netlify.app/img/portfolio/img-1.jpg"
                  alt=""
                />
                <figcaption>
                  <h4>Book Design</h4>
                  <p>Graphic</p>
                </figcaption>
              </figure>
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Project;
