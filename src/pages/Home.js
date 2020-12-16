import React from "react";
import { Col, Row, Container } from "../components/Grid";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <CreatePostForm />
        </Col>
        <Col size="md-6 sm-12">
          <PostsList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
