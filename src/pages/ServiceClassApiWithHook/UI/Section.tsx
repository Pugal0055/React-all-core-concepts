import React from "react";
import classes from "./Section.module.css";

const Section: React.FC<{ children: any }> = (props) => {
  return <section className={classes.section}>{props.children}</section>;
};

export default Section;
