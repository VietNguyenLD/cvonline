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

        <div class="row blogs-masonry">
          <div class="project-item">
            <a href="blog-dark.html" class="blog-item">
              <div class="blog-image">
                <img src="./image/img-1.jpeg" alt="" />
              </div>
              <div class="blog-content">
                <span class="cat">Web Design</span>
                <h4 class="blog-title">Best Way to Design</h4>
                <div class="blog-date">August 15, 2018</div>
              </div>
            </a>
          </div>

          <div class="project-item">
            <a href="blog-dark.html" class="blog-item">
              <div class="blog-image">
                <img src="./image/img-1.jpeg" alt="" />
              </div>
              <div class="blog-content">
                <span class="cat">Web Design</span>
                <h4 class="blog-title">Best Way to Design</h4>
                <div class="blog-date">August 15, 2018</div>
              </div>
            </a>
          </div>

          <div class="project-item">
            <a href="blog-dark.html" class="blog-item">
              <div class="blog-image">
                <img src="./image/img-1.jpeg" alt="" />
              </div>
              <div class="blog-content">
                <span class="cat">Web Design</span>
                <h4 class="blog-title">Best Way to Design</h4>
                <div class="blog-date">August 15, 2018</div>
              </div>
            </a>
          </div>

          <div class="project-item">
            <a href="blog-dark.html" class="blog-item">
              <div class="blog-image">
                <img src="./image/img-1.jpeg" alt="" />
              </div>
              <div class="blog-content">
                <span class="cat">Web Design</span>
                <h4 class="blog-title">Best Way to Design</h4>
                <div class="blog-date">August 15, 2018</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Project;
