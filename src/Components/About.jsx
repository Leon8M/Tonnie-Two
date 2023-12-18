/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */


/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Actuary turned Changemaker | Valued pensions, led software launch, built finance teams, slashed debt, exposed fraud, mastered sustainable loans. I thrive on driving impact.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Actuarial Valuations & Predictions",
  "Project Management",
  "Financial Analysis",
  "Risk Management & Analysis",
  "Financial & Compliance Audit",
  "Sustainable Finance",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Change Agent Analyst seeking impactful role. Master's in Finance. Expertise in risk, valuations, audits, and data analysis. Drive business growth through insightful communication of financial data. Adaptable, methodical, and ready to tackle complex challenges. Let's catalyze your success!";

const About = () => {
  return (
    <section className="padding" id="about">
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;