import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">om satote </span>
            from <span className="purple"> Nashik, India.</span>
            <br />
            I am currently pursuing my B.Tech in computer science.
            <br />
             and actively working on real-world tech projects that combine <strong>AI, web development, and innovation</strong>. I love building tools that solve practical problems — especially in the field of <strong>AI and smart technology</strong>.

            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Tech Events & Hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> UI/UX Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Robotics
            </li>
            <li className="about-activity">
              <ImPointRight /> Team Collaboration
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Craft ideas that shake the world!"{" "}
          </p>
          <footer className="blockquote-footer">om satote</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
