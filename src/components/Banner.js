//import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import DownloadButton from "./DownloadButton";

export const Banner = () => {
 /* const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;*/
  const fileUrl = '/documents/CV_Andry_2024_English.pdf';
  const fileName = 'CV_Andry_2024_English.pdf';
/*
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
     // setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
  //    setIndex(1);
      setDelta(500);
    } else {
  //    setIndex(prevIndex => prevIndex + 1);
    }
  }*/

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>Hi! I'm Andry, ReactJS Developper</h1>
                  <p  style={{ padding: '20px' }}>With 9 years of experience in CMS management and web design, and a proven track record as a team leader for the past three years, I bring a wealth of expertise and creativity to every project. Let's create something amazing together.
                    <br />For more details, you can download my CV. <DownloadButton fileUrl={fileUrl} fileName={fileName} />
                  </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
