import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#28a745', color: 'white', paddingTop: '40px', paddingBottom: '20px' }}>
      <Container>
        <Row>
          {/* Column 1: Our Company */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">OUR COMPANY</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Contact Us</li>
              <li>Sitemap</li>
            </ul>
          </Col>

          {/* Column 2: Our Policies */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">OUR POLICIES</h5>
            <ul className="list-unstyled">
              <li>Privacy Hub</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Payment Terms</li>
              <li>Corporate & Bulk Purchases</li>
            </ul>
          </Col>

          {/* Column 3: Contact & Rewards */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">EARN REWARDS</h5>
            <p>Earn Rewards Everytime You Shop</p>
            <p><FaPhoneAlt /> +254111184200</p>
            <p><FaMapMarkerAlt /> P.O. BOX 61600 - 00200, Nairobi, Kenya</p>
            <p><FaEnvelope /> info@metropolis.online</p>
          </Col>

          {/* Column 4: App & Socials */}
          <Col md={3} sm={6} className="mb-4">
            <h5 className="fw-bold mb-3">DOWNLOAD APP</h5>
            <div className="mb-3" style={{ border: '1px solid white', padding: '5px', textAlign: 'center' }}>
                Download App Now
            </div>
            <h6 className="mt-4">Connect with us:</h6>
            <div className="d-flex gap-3 fs-4">
              <FaFacebook /> <FaTwitter /> <FaInstagram /> <FaWhatsapp />
            </div>
          </Col>
        </Row>

        <hr style={{ borderTop: '1px solid rgba(255,255,255,0.2)' }} />

        <Row>
          <Col className='text-center'>
            <p className="mb-0">Payment methods | Copyright &copy; {currentYear} Metropolis Limited</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;