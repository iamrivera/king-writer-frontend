import React from "react";
import { Container, Row, Image, Col } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className="d-flex justify-content-center mt-5">
        <Image
          src="https://myproject-images.s3.us-east-2.amazonaws.com/1995562.png"
          rounded
        />
      </Container>
      <Container>
        <h6 className="d-flex justify-content-center">
          My name is Michael and I like to write...stories and code! I wanted to
          share that passion as part of my programming journey. Monarch Writer
          is my humble attempt at tackling my first React project! Excited to
          have built something I can actually use and look forward to building more 🎉
        </h6>
      </Container>
    </div>
  );
};

export default About;
