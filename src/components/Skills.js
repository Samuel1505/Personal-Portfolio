import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


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
                        <h2>Technical Skills</h2>
                        <p>Proficient in front-end development using HTML, CSS, and JavaScript to build responsive and interactive web applications. Experienced in React for building dynamic user interfaces. Adept with the Microsoft Office Suite, including Excel, Word, and PowerPoint, for productivity and data analysis.</p>
                        <Carousel responsive={responsive} infinite={false} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>REACT</h5>
                            </div>
                             <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>MICROSOFT OFFICE SUITE</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
  )
}
