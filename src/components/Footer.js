import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
//import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/*<MailchimpForm />*/}
          <Col size={12} sm={6}>
            Andry RAKOTOSAMIMANANA
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/andry-fanomezana-rakotosamimanana-a25bb2109" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="linkdin icon" /></a>
                <a href="mailto:andryfanomezana77@gmail.com"><img src={navIcon2} alt="G Mail icon" /></a>
                <a href="https://wa.me/qr/PZ7CDLN56SF6A1" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Whatsapp me icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
