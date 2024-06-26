import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Container } from "react-bootstrap";

export const PlayingSong = ({ currentSongImage ,currentSong}) => {
  return (
    
    <div className="ps sticky-bottom">
    <Container>
        <Row>
          <Col md={2}>
            {" "}
            <Card style={{ width: "15rem", border: 0 }} className="mt-3">
              <Card.Img variant="top" src={currentSongImage} className="p-3 " />
              <div className="animation">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </Card>
          </Col>
          <Col md={10}>
            <div class="container-audio">
              <audio controls loop autoplay>
                <source
                  src={currentSong}
                  type=''
                />
              </audio>
            </div>
            <Col md={10} className="text-center">
              <i class="bi bi-heart song-icon"></i>
              <i class="bi bi-skip-backward song-icon"></i>
              <i class="bi bi-play-fill song-icon"></i>
              <i class="bi bi-fast-forward song-icon"></i>
            </Col>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </div>
     
  );
};
