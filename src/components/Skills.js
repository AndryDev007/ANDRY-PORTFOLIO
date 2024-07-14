import meter95 from "../assets/img/meter95.svg";
import meter80 from "../assets/img/meter80.svg";
import meter70 from "../assets/img/meter70.svg";
import meter75 from "../assets/img/meter75.svg";
import meter60 from "../assets/img/meter60.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
//import arrow1 from "../assets/img/arrow1.svg";
//import arrow2 from "../assets/img/arrow2.svg";
//import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I love challenging myself and testing new horizons.<br></br> "Listening is a master skill for personal and professional greatness." <br />Robin S. Sharma</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter95} alt="metter 95%" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="metter 80%" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="metter 80%" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="metter 80%" />
                                <h5>ReactJs</h5>
                            </div>
                            <div className="item">
                                <img src={meter70} alt="metter 70%" />
                                <h5>Node</h5>
                            </div>
                            <div className="item">
                                <img src={meter60} alt="metter 60" />
                                <h5>API</h5>
                            </div>
                            <div className="item">
                                <img src={meter75} alt="metter 75%" />
                                <h5>SQL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
       {/* <img className="background-image-left" src={colorSharp} alt="Image" />*/}
    </section>
  )
}
