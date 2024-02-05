// src/components/ImageGallery/ImageGallery.jsx
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ImageGallery = ({ images }) => (
  <Container className="mt-3">
    <Row className="image-container">
      {images.map((image, index) => (
        <Col key={index} xs={12} md={4} lg={3}>
          <div className="aspect-ratio-box">
            <Image src={image} alt={`Image ${index}`} thumbnail fluid className='fixed-height-image'/>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
);

export default ImageGallery;
