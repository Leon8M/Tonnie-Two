/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "What is the most critical point in the journey towards success?",
    description: "Blog on how the rise in technological innovation influences our way of life.",
    url: "https://medium.com/@anthonykimathi2007/the-unfolding-story-of-zoom-d5e3f6c4b38",
  },
  {
    title:
      "Now or Later? Curriculum Reform In Kenya is Inevitable",
    description:
      "Blog on how software engineers can secure their jobs during this technological age.",
    url: "https://medium.com/@anthonykimathi2007/now-or-later-curriculum-reform-in-kenya-is-inevitable-7e4017bbce78",
  },
];
const Blog = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Blogs</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;