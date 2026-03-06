
import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import "./Skills.css";

// Example logos (import your actual logos)
import reactLogo from "../assets/img/react.png";
import djangoLogo from "../assets/img/django.png";
import flaskLogo from "../assets/img/flask.png";
import bootstrapLogo from "../assets/img/bootstrap.svg";
import tailwindLogo from "../assets/img/tailwind.png";
import pythonLogo from "../assets/img/python.png";
import jsLogo from "../assets/img/javascript.png";
import pytorchLogo from "../assets/img/pytorch.jpg";
import flutterLogo from "../assets/img/flutter.png";
import tkinter from "../assets/img/tkinter.jpg"
import rpi from "../assets/img/raspberry.png"
import mysql from "../assets/img/mysql.png"

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Tech stack logos with name
  const techStacks = [
    { name: "ReactJS", logo: reactLogo },
    { name: "Django", logo: djangoLogo },
    { name: "Flask", logo: flaskLogo },
    { name: "Bootstrap", logo: bootstrapLogo },
    { name: "TailwindCSS", logo: tailwindLogo },
    { name: "Python", logo: pythonLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "PyTorch", logo: pytorchLogo },
    { name: "Flutter", logo: flutterLogo },
    { name: "Tkinter", logo: tkinter },
    { name: "Raspberry Pi", logo: rpi },
    { name: "MySQL", logo: mysql },
    // add more logos as needed
  ];

  return (
    <>
      <h2 className="text-center fw-bold text-3xl text-info mb-6" id="skills">Skills and Expertise</h2>

      {/* Tech Stacks with Logos */}
<div className="my-5 container tech-carousel">
  <div className="tech-track">

    {[...techStacks, ...techStacks].map((tech, idx) => (
      <div
        key={idx}
        className={`tech-logo-card p-2 rounded-lg flex flex-col items-center justify-center text-center animate__animated ${inView ? "animate__fadeIn" : ""}`}
      >
        <img
          src={tech.logo}
          alt={tech.name}
          className="w-24 h-24 object-contain mb-2"
        />
        <span className="text-white text-xl">{tech.name}</span>
      </div>
    ))}

  </div>
</div>


      <section
        ref={ref}
        className={`container p-5 experience-card body-font ${inView ? "animate__animated animate__fadeInUp" : ""}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-white">
          <div>
            <h3 className="text-xl text-info fw-bold mb-2">Technical Skills:</h3>
            <ul className="list-disc ml-5 space-y-1 text-lg">
              <li>Prompt Engineering</li>
              <li>Full-stack Web Development</li>
              <li>Android App Development (Basic)</li>
              <li>IoT Integration</li>
              <li>Web-Scraping</li>
              <li>Microprocessor Programming (Raspberry Pi)</li>
              <li>RESTful API Development</li>
              <li>Machine and Deep Learning</li>
              <li>Desktop App Development</li>
              <li>Socket Programming</li>
              <li>Database Management (Basic)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-info fw-bold mb-2">Programming Languages:</h3>
            <p className=" text-lg">Python, MicroPython, Java, Dart (Basic), JavaScript, ARM Assembly (Basic), HTML/CSS, C/C++, MySQL, SQLite</p>

            <h3 className="text-xl text-info fw-bold mt-4 mb-2">Tools:</h3>
            <p className=" text-lg">GitHub, Docker (Basic), WebRTC</p>

            <h3 className="text-xl text-info fw-bold mt-4 mb-2">Others:</h3>
            <p className=" text-lg">MS Word, Excel, PowerPoint, LaTeX</p>
          </div>
        </div>
        <div>
        <h3 className="text-xl text-info fw-bold text-info font-semibold mb-2">Tech-Stacks:</h3>
        <ul className="list-disc ml-5 space-y-2 text-lg text-white">
          <li>
            <strong>Web Development:</strong> ReactJS, Django, Django REST Framework, Flask, Bootstrap, TailwindCSS, Axios
          </li>
          <li>
            <strong>Web-Scraping and Automation:</strong> BeautifulSoup, Selenium
          </li>
          <li>
            <strong>Mobile App Development:</strong> Flutter (Basic skill), Kivy (Python)
          </li>
          <li>
            <strong>Desktop App Development:</strong> Tkinter, Kivy, JavaFx
          </li>
          <li>
            <strong>Machine Learning and AI:</strong> PyTorch, OpenCV, Matplotlib, Numpy, Pandas, ScikitLearn, CNNs, Computer Vision, LLM, NLP
          </li>
          <li>
            <strong>Database (Basic skill):</strong> MySQL, SQLite
          </li>
        </ul>
      </div>
      </section>

      
    </>
  );
}

export default Skills;