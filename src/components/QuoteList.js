import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const QuoteList = (props) => {
  return (
    <div className="container-fluid mt-4">
      <Row xs={1} md={2} className="g-4">
        {props.quotes.map((quote, idx) => (
          <Col>
            <Card key={idx}>
              {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
              <Card.Body>
                <Card.Title>A Few Words For Thought</Card.Title>
                <Card.Text>
                  {quote.content}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default QuoteList;
