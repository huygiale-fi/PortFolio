import React, { useEffect } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import "./About.scss";
import { useState } from "react";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <div className="app__about">
      <h2 className="head-text">
        I Know that <span>Good Design</span> <br />
        means <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            key={about.index + index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, type: "tween" }}
            className="app__about-item"
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2
              className="bold-text"
              style={{ marginTop: "20", marginBottom: "10" }}
            >
              {about.title}
            </h2>
            <p className="p-text">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
