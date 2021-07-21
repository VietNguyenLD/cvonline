import React, { useState } from "react";
import MainLayout from "../layout/Main";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal/Modal";
import ProjectDetail from "./ProjectDetail";
import { projects } from "../data";

const Project = () => {
  const { isShow, toggle } = useModal();
  const [projectChoose, setProjectChoose] = useState({});

  const onClickProject = (item) => {
    setProjectChoose(item);
    toggle();
  };

  console.log(projects);

  return (
    <MainLayout>
      <section className="page portfolio" id="page-portfolio">
        <div className="topic">
          <h1>Project.</h1>
          <span className="lnr lnr-briefcase"></span>
        </div>

        <div className="row blogs-masonry">
          {projects.map((project) => (
            <div class="project-item" onClick={() => onClickProject(project)}>
              <div class="blog-item">
                <div class="blog-image">
                  <img src={project.images[0]} alt="" />
                </div>
                <div class="blog-content">
                  {project.freelance && <span class="cat">Freelance</span>}
                  <h4 class="blog-title">{project.name}</h4>
                  {project.from_work && project.to_work && (
                    <div class="blog-date">{`${project.from_work} - ${project.to_work}`}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Modal isShowing={isShow} hide={toggle}>
        <ProjectDetail project={projectChoose} />
      </Modal>
    </MainLayout>
  );
};

export default Project;
