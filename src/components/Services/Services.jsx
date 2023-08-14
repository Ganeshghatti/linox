import React from "react";
import "./Services.scss";

export default function Services() {
  const AS = [
    {
      name: "Oracle Hyperion On-Prem Managed Services",
      bgcolor: "#728fce",
      color: "white",
      description:
        "Expert support for optimizing, maintaining, and securing Hyperion applications, ensuring efficient performance and reliability.",
    },
    {
      name: "Oracle EPM Cloud Managed Services",
      bgcolor: "#89c35c",
      color: "white",
      description:
        "expert support and maintenance for seamless management of Oracle Enterprise Performance Management applications.",
    },
    {
      name: "Oracle Hyperion Infrastructure Services",
      bgcolor: "#ffe6e8",
      color: "black",
      description:
        " essential support and resources for seamless management and optimization of Hyperion applications.",
    },
  ];
  const Implementation = [
    {
      name: "Implement new Applications",
      bgcolor: "rgb(44, 38, 38,0.85)",
      color: "white",
      description:
        "Develop and integrate novel applications to enhance functionality and user experience across web platforms.",
    },
    {
      name: "EPM Cloud Advisory",
      bgcolor: "#97B9FF",
      color: "black",
      description:
        "Expert guidance for optimal utilization of Oracle EPM Cloud, enhancing financial management and performance.",
    },
    {
      name: "Upgrade On-Prem Application",
      bgcolor: "purple",
      color: "white",
      description:
        "Enhance existing on-premises app: features, performance, security, and user experience for optimal functionality",
    },
  ];

  return (
    <section className="services">
      <p className="services-intro-text">intro</p>
      <p className="services-title-text">Let's build your next idea</p>
      <div className="Application-Support-container">
        <p className="Application-Support-container-title">
          Application Support
        </p>
        <div className="Application-Support-container-cards">
          {AS.map((item, index) => (
            <div
              className="Application-Support-container-card"
              key={index}
              style={{ backgroundColor: item.bgcolor }}
            >
              <p
                className="Application-Support-container-card-title"
                style={{ color: item.color }}
              >
                {item.name}
              </p>
              <p
                className="Application-Support-container-card-description"
                style={{ color: item.color }}
              >
                {item.description}
              </p>
              <hr />
              <button className="Application-Support-container-card-button">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="Implementation-container">
        <p className="Implementation-container-title">Implementation</p>
        <div className="Implementation-container-cards">
          {Implementation.map((item, index) => (
            <div
              className="Implementation-container-card"
              key={index}
              style={{ backgroundColor: item.bgcolor }}
            >
              <p
                className="Implementation-container-card-title"
                style={{ color: item.color }}
              >
                {item.name}
              </p>
              <p
                className="Implementation-container-card-description"
                style={{ color: item.color }}
              >
                {item.description}
              </p>
              <hr />
              <button className="Implementation-container-card-button">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="Implementation-container">
        <p className="Implementation-container-title">Implementation</p>
        <div className="Implementation-container-cards">
          {Implementation.map((item, index) => (
            <div
              className="Implementation-container-card"
              key={index}
              style={{ backgroundColor: item.bgcolor }}
            >
              <p
                className="Implementation-container-card-title"
                style={{ color: item.color }}
              >
                {item.name}
              </p>
              <p
                className="Implementation-container-card-description"
                style={{ color: item.color }}
              >
                {item.description}
              </p>
              <hr />
              <button className="Implementation-container-card-button">
                Learn more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
