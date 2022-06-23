import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pijush Bera </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />I am a Full Stack Web developer  and a Competitve programmer
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Footbal
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Shoot for the stars, when you cant make a killing"{" "}
          </p>
          <footer className="blockquote-footer">Pijush</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
