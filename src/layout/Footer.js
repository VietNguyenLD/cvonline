import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
          <ul className="social">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/viet.jonny.14/"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/vi%E1%BB%87t-nguy%E1%BB%85n-qu%E1%BB%91c-705373190/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
          <p className="copy">
            2021 © ThorNguyen
            <br />
            All Right Reserved.
          </p>
        </footer>
     
    )
}

export default Footer
