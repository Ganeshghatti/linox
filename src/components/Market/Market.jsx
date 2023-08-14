import React from "react";
import "./Market.scss";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Navbar from "../Navbar/Navbar";
import Faq from "react-faq-component";

export default function Market() {
  const data = {
    rows: [
      {
        title: "Oracle Planning and Budgeting Cloud (PBCS)",
        content: `A cloud-based solution for budgeting, forecasting, and 
        planning that enables collaboration, real-time adjustments, and scenario modeling.`,
      },
      {
        title: "Oracle Enterprise Data Management Cloud (EDMCS)",
        content:
          "A cloud-based platform for managing master data across the organization, ensuring data consistency and accuracy",
      },
      {
        title: "Oracle Financial Consolidation and Close Cloud (FCCS)",
        content: `A cloud application that simplifies financial close 
        and consolidation processes, providing real-time visibility and compliance `,
      },
      {
        title: "Oracle Account Reconciliation Cloud (ARCS)",
        content: `An automated solution for reconciling accounts, improving 
        accuracy, and accelerating financial reporting.`,
      },
      {
        title: "Oracle Profitability and Cost Management Cloud (PCMCS)",
        content: `A cloud-based solution for modeling and 
        analyzing profitability and cost allocation across business segments.`,
      },
      {
        title: "Oracle Tax Reporting Cloud (TRCS)",
        content: `A cloud-based application for automating and streamlining the tax 
        provision and reporting process.`,
      },
      {
        title: "Oracle Narrative Reporting Cloud (NRCS)",
        content: `A comprehensive solution for narrative and financial 
        reporting, providing collaboration, disclosure management, and regulatory compliance.`,
      },
      {
        title: "Oracle Planning and Forecasting Cloud (EPBCS)",
        content: `A cloud application that offers pre-built financial and 
        operational planning templates, streamlining planning processes`,
      },
      {
        title: "Oracle Strategic Workforce Planning Cloud (SWP)",
        content: `A cloud solution for strategic workforce planning, 
        enabling organizations to align workforce strategies with financial goals.`,
      },
      {
        title: "Oracle Sales Planning Cloud (SPLCS)",
        content: ` A cloud-based application that enables organizations to create 
        accurate sales forecasts, align sales strategies, and improve quota management`,
      },
      {
        title: "Oracle Project Financial Planning Cloud (PFP)",
        content: `A cloud application designed to streamline project 
        financial planning, helping organizations manage project costs and budgets effectively`,
      },
      {
        title: "Oracle Financial Close and Consolidation Cloud (FCCS)",
        content: `: A cloud-based solution for financial close and 
        consolidation processes, offering automation, visibility, and compliance.`,
      },
      {
        title: "Oracle Financial Reporting Compliance Cloud (FRCS)",
        content: `A cloud solution that streamlines financial 
        reporting compliance with industry standards and regulations.`,
      },
      {
        title: "Oracle Narrative Reporting Cloud (NRCS)",
        content: `A comprehensive solution for narrative and financial 
        reporting, offering collaboration, disclosure management, and regulatory compliance.`,
      },
      {
        title: "Oracle Strategic Modeling Cloud (SMC)",
        content: `Oracle Strategic Modeling Cloud (SMC)A cloud-based solution that facilitates financial modeling and 
        scenario analysis to support strategic decision-making`,
      },
    ],
  };
  const styles = {
    bgColor: "#D8E6F1",
    rowTitleColor: "#1f3557",
    // rowTitleTextSize: 'medium',
    // rowContentColor: 'grey',
    rowContentTextSize: "16px",
    // rowContentPaddingTop: '10px',
    rowContentPaddingBottom: "10px",
    rowContentPaddingLeft: "50px",
    rowContentRadius: "50px",
    // rowContentPaddingRight: '150px',
    arrowColor: "#1f3557",
    //transitionDuration: "1s",
    // timingFunc: "ease"
  };
  return (
    <section className="market">
      <Navbar />
      <div className="market-carousel">
        <img
          src="/Assets/market/img3.png"
          alt="y"
          className="market-carousel-oracle1"
        />
      </div>
      <p className="market-title-text">Title</p>
      <div className="market-faq-container">
        <Faq data={data} styles={styles} />
      </div>
    </section>
  );
}
