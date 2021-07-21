import React, { useState, useEffect } from "react";

const ProjectDetail = ({ project }) => {
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    if (project.images && project.images.length > 0) {
      setMainImage(project.images[0]);
    }
  }, []);

  return (
    <div className="page-detail">
      <div className="detail-left">
        <div className="images">
          <img className="main-image" src={mainImage} alt="" />
        </div>
        <div className="sub-image">
          {project.images.map((img, index) => (
            <div
              className={`sub-image-item ${img === mainImage ? "active" : ""}`}
              key={index}
              onClick={() => setMainImage(img)}
            >
              <img src={img} className="image" alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="detail-right">
        <div className="about personal-information">
          <h3>Project Information</h3>
          <ul>
            <li>
              <span className="title">Name</span>
              <span className="value">{project.name}</span>
            </li>
            <li>
              <span className="title">Description</span>
              <span className="value">{project.description}</span>
            </li>
            <li>
              <span className="title">Position</span>
              <span className="value">{project.position}</span>
            </li>
            <li>
              <span className="title">Member</span>
              <span className="value">{project.member}</span>
            </li>
            <li>
              <span className="title">Technologies</span>
              <span className="value">{project.technologies}</span>
            </li>
            <li>
              <a
                className="btn-about"
                rel="noreferrer"
                href={project.link}
                target="_blank"
              >
                See project
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
