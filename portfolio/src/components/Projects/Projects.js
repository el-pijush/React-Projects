import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fitmeals from "../../Assets/Projects/fitmeals.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitmeals}
              isBlog={false}
              title="Fitmeals"
              description="Fitmeals is not a diet system that promotes cleanses, pills, preserved foods or any kind of disordered eating habits.
               build with react.js, Material-UI, and Firebase.its an ecommerce fitness website where we can order food hire ditetions
                ."
              link="https://github.com/el-pijush/Fitmeals-Clone"
            />
          </Col>

        
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
