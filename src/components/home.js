import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <h4 className="mt-5 mb-4">
        Welcome to Monarch Writer 👑 A place for anyone and everyone to find
        inspiration and 📝 stories. Here's a few words of advice from
        one of the Monarchs of Literature, Neil Gaiman!
      </h4>
      <Container className="mt-5 text-primary bg-dark" fluid="m">
        <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/qg0_FinB6EE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Container>
    </div>
  );
};

export default Home;
