import React, { useEffect } from "react";
import "./Home.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function App() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(".hero-content", {
      x: "-100px",
      ease: "power4.out",
      opacity: "0",
      duration: 3,
      delay: 0.5,
    });
  }, []);
  return (
    <section className="Hero">
      <div className="hero-left">
        <p className="hero-welcome-batch">WELCOME</p>
        <div className="hero-caousel-container">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={75}
            totalSlides={3}
            interval={5000}
            isPlaying={true} 
          >
            <Slider>
              <Slide index={0}>
                <p className="hero-title">
                  The #1 Provider of
                  <br />
                  ORACLE EPM
                  <br />
                  Managed Services.
                </p>
                <p className="hero-description">
                  We believe your financial systems are the backbone of your
                  organization, and your team is the heartbeat. That's why our
                  dedicated support team serves as an extension of your team,
                  bringing technical and functional expertise to solve your
                  toughest challenges. We proactively enhance your systems,
                  enrich your data, and empower your team to do their best work.
                </p>
              </Slide>
              <Slide index={1}>
                <p className="hero-title">
                  The #1 Provider of
                  <br />
                  ORACLE EPM
                  <br />
                  Managed Services.
                </p>
                <p className="hero-description">
                  We believe your financial systems are the backbone of your
                  organization, and your team is the heartbeat. That's why our
                  dedicated support team serves as an extension of your team,
                  bringing technical and functional expertise to solve your
                  toughest challenges. We proactively enhance your systems,
                  enrich your data, and empower your team to do their best work.
                </p>
              </Slide>
              <Slide index={2}>
                <p className="hero-title">
                  The #1 Provider of
                  <br />
                  ORACLE EPM
                  <br />
                  Managed Services.
                </p>
                <p className="hero-description">
                  We believe your financial systems are the backbone of your
                  organization, and your team is the heartbeat. That's why our
                  dedicated support team serves as an extension of your team,
                  bringing technical and functional expertise to solve your
                  toughest challenges. We proactively enhance your systems,
                  enrich your data, and empower your team to do their best work.
                </p>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
      </div>
      <div className="hero-right">
        <img
          src="/Assets/herorightimg.png"
          alt="hero-img"
          className="hero-img"
        />
      </div>
    </section>
  );
}
