import React, { useState, useEffect } from "react";
import AboutMenuItem from "./AboutMenuItem";
import AboutSubheading from "./AboutSubheading";
import subheadingsData from "./subheadingsData";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";
import careerIcon from "../assets/triple-corn.png";

const AboutMenu = () => {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
  const [activeSubheading, setActiveSubheading] = useState(0);

  const menuItems = ["PERSONAL", "EDUCATION", "CAREER"];
  const activeMenuTitle = menuItems[activeMenuItem];
  const activeMenuIcon =
    activeMenuTitle === "PERSONAL"
      ? personalIcon
      : activeMenuTitle === "EDUCATION"
      ? educationIcon
      : careerIcon;

  const subheadings = subheadingsData[activeMenuItem];

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setActiveSubheading(0);
  };

  const handleSubheadingClick = (subheading) => {
    setActiveSubheading(subheading);
  };

  return (
    <>
      <div className="menu">
        {menuItems.map((item, index) => (
          <AboutMenuItem
            key={index}
            title={item}
            active={activeMenuItem === index}
            onClick={() => handleMenuItemClick(index)}
          />
        ))}
      </div>
      <div className="sub-container">
        <div className="icon-title-container">
          <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
          <h3>{activeMenuTitle}</h3>
        </div>
        {subheadings.map((subheading, index) => (
          <AboutSubheading
            key={index}
            title={subheading.title}
            content={subheading.content}
            active={activeSubheading === index}
            onClick={() => handleSubheadingClick(index)}
            menuItem={activeMenuItem}
          />
        ))}
      </div>
    </>
  );
};

export default AboutMenu;
