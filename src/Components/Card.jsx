import React from "react";


const projectList = [
    {
      title: "My Resume Site",
      description: "This is the Github repo containing all code for this site. Though not responsive, it shows skills in Js among others",
      github: "https://github.com/Leon8M/Portfolio",
      url: "https://github.com/Leon8M/Leon_portfolio_2",
    }, 
    {
      title: "Anthony Njeru's Portfolio",
      description:
        "Portfolio website for a customer, Anthony, who is an auditor. Contains all infomation required for his hiring.",
      github: "https://github.com/Leon8M/Tonnie-Portfolio",
      url: "https://anthonykimathi.netlify.app/",
    },
    {
      title: "Mamika Creations Website",
      description:
        "Website to cater for the business of Mamika Creations, an art company for all things abstract and acrylic.",
      github: "https://github.com/Leon8M/Mamika",
      url: "https://mamikacreations.netlify.app/",
    },
    {
        title: "My Original Portfolio",
        description: "Github repo containing all the code for my first instance of a Portfolio.",
        github: "https://github.com/Leon8M/Tonnie-Portfolio",
      },
    {
      title: "First React Project",
      description: "First react project I did in preparation to join Mazi showing skills in React.js and React Router",
      github: "https://github.com/Leon8M/Mazi-App",
    },
    {
      title:
        "Url-saver-for chrome",
      description:
        "One of my first Javascript projects implementing my experience in basics of Js and also Dom Manipulation",
      github: "https://github.com/Leon8M/Url-saver-for-chrome",
    },
  ];


const Card = () => {
    return (
<div className="cards">
          {projectList.map((project) => (
            <div className="card" key={project.title}>
              <div className="xter">
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
               <p className="small">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
    );
};

export default Card;