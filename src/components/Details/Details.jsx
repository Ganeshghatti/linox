import React from "react";
import "./Details.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Details() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <section className="details">
      <p className="details-testimonials-text">Testimonials</p>
      <div className="details-container">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={false}
          customTransition="all 5"
          transitionDuration={500}
          arrows={false}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          focusOnSelect={false}
        >
          <div className="Michael details-container-card">
            <p className="details-card-Michael-name details-card-name">
              Michael Williams
            </p>
            <p className="details-card-Michael-post details-card-post">
              Finance Director, Streamline Industries
            </p>
            <p className="details-card-Michael-message details-card-message">
              "Partnering with Linox Consulting for our EPM needs was a
              cost-effective decision that delivered exceptional value. Their
              team took the time to understand our budget constraints and
              provided us with a tailored Oracle EPM Cloud solution that
              addressed our requirements without unnecessary frills. Not only
              did they deliver a system that fit our budget, but they also
              ensured it was scalable and aligned with our growth growth
              trajectory. Linox Consulting proves that cost-effective solutions
              don't mean compromising on quality."
            </p>
          </div>
          <div className="Amanda details-container-card">
            <p className="details-card-Amanda-name details-card-name">
              Amanda Lee
            </p>
            <p className="details-card-Amanda-post details-card-post">
              Operations Manager, BrightHorizon Ventures
            </p>
            <p className="details-card-Amanda-message details-card-message">
              "We were pleasantly surprised by the cost-effective yet
              comprehensive Oracle EPM Cloud implementation provided by Linox
              Consulting. They meticulously assessed our needs, identified areas
              where we could optimize costs, and designed a solution that
              perfectly balanced our budget with our goals. Their team's ability
              to find creative solutions without sacrificing functionality was
              impressive. We now have a powerful EPM system that enhances our
              decision-making, all while staying within our financial
              parameters."
            </p>
          </div>
          <div className="Robert details-container-card">
            <p className="details-card-Robert-name details-card-name">
              Robert Carter
            </p>
            <p className="details-card-Robert-post details-card-post">
              CFO, Cornerstone Manufacturing
            </p>
            <p className="details-card-Robert-message details-card-message">
              "Working with Linox Consulting was a revelation in cost-effective
              EPM solutions. We were initially hesitant due to budget
              constraints, but their team demonstrated how Oracle EPM Cloud
              could be customized to fit our needs without breaking the bank.
              The result? An EPM solution that drives efficiency, collaboration,
              and data accuracy—all at a price point that aligned with our
              financial goals. Linox Consulting proves that EPM excellence
              doesn't have to come with a hefty price tag."
            </p>
          </div>
          <div className="Lisa details-container-card">
            <p className="details-card-Lisa-name details-card-name">
              Lisa Thompson
            </p>
            <p className="details-card-Lisa-post details-card-post">
              Finance Manager, Dynamic Innovations Group
            </p>
            <p className="details-card-Lisa-message details-card-message">
             "Linox Consulting stands out as a partner that truly understands
              the importance of cost-effective solutions. They took the time to
              understand our financial limitations and then delivered an Oracle
              EPM Cloud implementation that met our needs without compromising
              quality. Their dedication to maximizing our investment and
              optimizing our processes has brought us both short-term savings
              and long-term benefits. Thanks to Linox Consulting, we've achieved
              remarkable cost efficiencies in our financial operations."
            </p>
          </div>
          <div className="Daniel details-container-card">
            <p className="details-card-Daniel-name details-card-name">
              Daniel Martin
            </p>
            <p className="details-card-Daniel-post details-card-post">
              CEO, NovaTech Solutions
            </p>
            <p className="details-card-Daniel-message details-card-message">
              "Linox Consulting is a shining example of cost-effective excellence
              in the realm of Oracle EPM Cloud solutions. Their team not only
              provided us with a solution that fit our budget, but they also
              ensured it was tailored to our unique business needs. The ability
              to achieve such a balance is a testament to their expertise. With
              Linox Consulting, we've realized that cost-effective doesn't mean
              compromise—it means getting the best value for our investment."
            </p>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
