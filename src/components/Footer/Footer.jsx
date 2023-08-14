// CFooter.jsx
import React from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import "./Footer.scss";

export default function CustomFooter() {
  return (
    <Footer
      columns={[
        {
          icon: (
            <img src="/Assets/logo/insta.png" alt="Icon" />
          ),
          title: "Instagram",
          url: "https://greensock.com/docs/v3/Eases",
          description: '知识创作与分享工具',
          openExternal: true,
        },
        {
          icon: (
            <img src="/Assets/logo/linkedin.png" alt="Icon" />
          ),
          title: "Linkedin",
          url: "https://greensock.com/docs/v3/Eases",
          description: '知识创作与分享工具',
          openExternal: true,
        },
        {
          icon: (
            <img src="/Assets/logo/linkedin.png" alt="Icon" />
          ),
          title: "Linkedin",
          url: "https://greensock.com/docs/v3/Eases",
          description: '知识创作与分享工具',
          openExternal: true,
        },
        {
          icon: (
            <img src="/Assets/logo/linkedin.png" alt="Icon" />
          ),
          title: "Linkedin",
          url: "https://greensock.com/docs/v3/Eases",
          description: '知识创作与分享工具',
          openExternal: true,
        },
      ]}
      
      bottom="Made with ❤️ by Linox consoluting"
    />
  );
}
