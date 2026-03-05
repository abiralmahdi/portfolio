import React from "react";
import { useInView } from "react-intersection-observer";
import ExperienceCard from "./ExperienceCard";
import configuration from "../assets/configurations.json";
import marks from "../assets/img/marks.png";
import bdarmy from "../assets/img/bdarmy.png";
import "./Experience.css";

function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only the first time it scrolls into view
    threshold: 0.2,    // 20% of the section visible triggers animation
  });

  return (
    <>
      <h2 className="text-center fw-bold text-4xl text-info mb-6"id="experience">Work Experience</h2>

      <section
        ref={ref}
        className={`container experience-card body-font ${inView ? "animate__animated animate__zoomIn" : ""}`}
      >
        <div className="container py-5 my-12 mx-auto flex flex-wrap">
          <ExperienceCard
            logo={marks}
            companyName="Marks Automation Ltd"
            post="Junior Software Engineer (Jan, 2025 - on going)"
            jobDesc={configuration.jobDescMarksJSWE}
          />
          <ExperienceCard
            logo={marks}
            companyName="Marks Automation Ltd"
            post="Intern Software Developer (May, 2025 - Dec, 2025)"
            jobDesc={configuration.jobDescMarksIntern}
          />
          <ExperienceCard
            logo={bdarmy}
            companyName="Bangladesh Army"
            post="Officer Cadet (Jan, 2022 - March, 2022)"
            jobDesc={configuration.jobDescBMA}
          />
        </div>
      </section>
    </>
  );
}

export default Experience;