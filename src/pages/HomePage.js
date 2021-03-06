import React from "react";
import MainLayout from "../layout/Main";

const HomePage = () => {
  return (
    <MainLayout>
      <section className="page home" id="page-home">
        <canvas id="field"></canvas>
        <div className="home-content">
          <h1>
            Nguyễn Quốc<span style={{ paddingLeft: "10px" }}> Việt</span>
          </h1>
          <div class="wrapper">
            <span class="typing-demo">I am a Web Developer </span>
          </div>
          {/* <div>
            <span>I am a Web Developer </span>
            <span id="typed" style={{ color: "whtie" }}></span>
            <div id="typed-strings">
              <p>Web Developer</p>
              <p>Freelancer</p>
            </div>
          </div> */}
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
