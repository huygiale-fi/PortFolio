import React, { useState } from "react";
import images from "../../constants/images";
import "./Navbar.scss";
import { AiOutlineMenu, AiOutlineGithub } from "react-icons/ai";
import { HiX } from "react-icons/hi";
import { motion } from "framer-motion";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-github">
        <a href="https://github.com/huygiale-fi" target={"_blank"}>
          <AiOutlineGithub />
        </a>
      </div>
      <div className="app__navbar-menu">
        <AiOutlineMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0], y: [20, 0] }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <a href="https://github.com/huygiale-fi" target={"_blank"}>
              <AiOutlineGithub />
            </a>
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
