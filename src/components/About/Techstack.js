import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJava,
  DiPython,
  DiReact,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiMongodb,
} from "react-icons/di";
import { SiFigma, SiBootstrap, SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb";       // Updated import
import { FaMicrochip } from "react-icons/fa";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      {/* API icon - now clearly shows "API" */}
      <Col xs={4} md={2} className="tech-icons">
        <TbApi />
      </Col>
      {/* Hardware icon */}
      <Col xs={4} md={2} className="tech-icons">
        <FaMicrochip />
      </Col>
    </Row>
  );
}

export default Techstack;
