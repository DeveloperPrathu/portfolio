import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/flipkart.png"
          title="Flipkart Clone"
          description="A Flipkart Clone made using ReactJS, Redux, Firebase, and Material UI. It has features like Google Authentication, Add to Cart, Remove from Cart, and Checkout."
        />
        <ProjectCard
          src="/athlete.png"
          title="Athlete Club"
          description="Gym Website made using ReactJS, Tailwind CSS, and React Router. It has features like Responsive Design, Smooth Scrolling, and Animated Navigation Bar."
        />
        <ProjectCard
          src="/school.png"
          title="School Management System"
          description="A School Management System made using ReactJS, Redux, Firebase, and Material UI. It has features like Google Authentication, Add Student, Remove Student, and Update Student."
        />
      </div>
    </div>
  );
};

export default Projects;
