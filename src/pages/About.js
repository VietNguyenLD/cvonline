import React from "react";
import MainLayout from "../layout/Main";

const AboutPage = () => {
  return (
    <MainLayout>
       <section className="page about-me" id="page-about-me">
            <div className="topic">
                <h1>About Me.</h1>
                <span className="lnr lnr-user"></span>
            </div>
            <div className="information">
                <div className="about introduce">
                    <h3>UI/UX Designer & Developer</h3>
                    <p>
                        Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur dolor nisi labore commodi
                        ipsa? Excepturi velit laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium itaque
                        fugiat placeat quas consequatur? Obcaecati natus rerum
                    </p>
                    <p>
                        Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis unde aliquid excepturi
                        laudantium? Illo architecto aliquam velit illo magnam neque perferendis sint Incidunt eius ipsa
                        inventore labore eos velit. Minus hic magni reiciendis necessitatibus ex Quidem officia deleniti
                        accusamus obcaecati dolores. Porro culpa quibusdam impedit porro praesentium excepturi. Alias ab
                        consequatur?
                    </p>
                    <img src="https://watson-vcard.netlify.app/img/signature-white.png" alt="" style={{width: "340px"}} />
                </div>
                <div className="about personal-information">
                    <h3>Personal information</h3>
                    <ul>
                        <li>
                            <span className="title">
                                Name
                            </span>
                            <span className="value">Võ Thành Vĩ</span>
                        </li>
                        <li>
                            <span className="title">
                                Age
                            </span>
                            <span className="value">19</span>
                        </li>
                        <li>
                            <span className="title">
                                Residence
                            </span>
                            <span className="value">New York, USA</span>
                        </li>
                        <li>
                            <span className="title">
                                Address
                            </span>
                            <span className="value">Đà Nẵng - Việt Nam</span>
                        </li>
                        <li>
                            <span className="title">
                                Email
                            </span>
                            <span className="value">vothanhvi.dn248@gmail.com</span>
                        </li>
                        <li>
                            <span className="title">
                                Phone
                            </span>
                            <span className="value">0402001827</span>
                        </li>
                        <li>
                            <span className="title">
                                Freelance
                            </span>
                            <span className="value">Available</span>
                        </li>
                        <li>
                            <a className="btn-about" href="/#">
                                Download Resume
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="subheading">
                <h3>
                    services
                </h3>
            </div>
            <div className="service">
                <div className="service-items">
                    <span className="lnr lnr-laptop"></span>
                    <h4>Web Development</h4>
                    <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut
                        libero.</p>
                </div>
                <div className="service-items">
                    <span className="lnr lnr-eye"></span>
                    <h4>Web Design</h4>
                    <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut
                        libero.</p>
                </div>
                <div className="service-items">
                    <span className="lnr lnr-laptop-phone"></span>
                    <h4>Responsive Design</h4>
                    <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut
                        libero.</p>
                </div>
                <div className="service-items">
                    <span className="lnr lnr-camera"></span>
                    <h4>Photography</h4>
                    <p>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut
                        libero.</p>
                </div>
            </div>
            <div className="subheading">
                <h3>
                    clients
                </h3>
            </div>
            <div className="owl-carousel owl-clients">
                <div className="client-logo">
                    <a href="/#"><img src="https://watson-vcard.netlify.app/img/clients/client-01.png" alt="" /></a>
                </div>
                <div className="client-logo">
                    <a href="/#"><img src="https://watson-vcard.netlify.app/img/clients/client-02.png" alt="" /></a>
                </div>
                <div className="client-logo">
                    <a href="/#"><img src="https://watson-vcard.netlify.app/img/clients/client-03.png" alt="" /></a>
                </div>
                <div className="client-logo">
                    <a href="/#"><img src="https://watson-vcard.netlify.app/img/clients/client-04.png" alt="" /></a>
                </div>
                <div className="client-logo">
                    <a href="/#"><img src="https://watson-vcard.netlify.app/img/clients/client-05.png" alt="" /></a>
                </div>
                <div className="client-logo">
                    <a href="/#"><img src="https://watson-vcard.netlify.app/img/clients/client-06.png" alt="" /></a>
                </div>
                <div className="client-logo">
                    <a href="/#"><img src="https://watson-vcard.netlify.app/img/clients/client-07.png" alt="" /></a>
                </div>
                <div className="client-logo">
                    <a href="/#"><img src="https://watson-vcard.netlify.app/img/clients/client-08.png" alt="" /></a>
                </div>
                <div className="client-logo">
                    <a href="/#"><img src="https://watson-vcard.netlify.app/img/clients/client-09.png" alt="" /></a>
                </div>
            </div>
            <div className="subheading">
                <h3>
                    testimonials
                </h3>
            </div>
            <div className="owl-carousel owl-testimonials">
                <div className="item">
                    <div className="content">
                        <p>
                            Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit.
                            Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.
                        </p>
                    </div>
                    <div className="meta">
                        <img src="https://watson-vcard.netlify.app/img/testimonials/author-1.jpg" alt="" />
                        <div className="meta-info">
                            <h4>
                                Kate Fox
                            </h4>
                            <p>
                                Digital Marketing Executive
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <p>
                            Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit.
                            Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.
                        </p>
                    </div>
                    <div className="meta">
                        <img src="https://watson-vcard.netlify.app/img/testimonials/author-3.jpg" alt="" />
                        <div className="meta-info">
                            <h4>
                                Jack Smith
                            </h4>
                            <p>
                                Marketing Director
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                        <p>
                            Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum deserunt suscipit eos fugit.
                            Consectetur dolorum temporibus facilis impedit exercitationem dignissimos.
                        </p>
                    </div>
                    <div className="meta">
                        <img src="https://watson-vcard.netlify.app/img/testimonials/author-2.jpg" alt="" />
                        <div className="meta-info">
                            <h4>
                                Emma Jones
                            </h4>
                            <p>
                                Creative Director
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </MainLayout>
  );
};

export default AboutPage;
