import React from "react";

const ThemeOptipn = (props) => {
  return (
    <>
      <div className="color-Ctr">
        <div className="toggle-button">
          <span>
            <i className="fas fa-cog"></i>
          </span>
        </div>
        <div className="color-menu">
          <h4>page animation</h4>
          <select className="select" id="anim-type">
            <option value="-1">Choose</option>
            <option value="0">Random</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
          </select>
          <div className="color-theme">
            <h4>colors</h4>
            <ul>
              <li style="background-color: #00a3e1;"></li>
              <li style="background-color: #E82A2A;"></li>
              <li style="background-color: #6AC054;"></li>
              <li style="background-color: #d1a71d;"></li>
              <li style="background-color: #ff1493;"></li>
              <li style="background-color: #5078ff;"></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="header-secondary">
        <a href="/" className="togglemenu-btn"><i class="fas fa-bars"></i></a>
        <h2>Philip Watson</h2>
    </div>

    </>
  );
};

export default ThemeOptipn;
