import dp from "../assets/img/dp.png";
import configuration from "../assets/configurations.json";
import CustomButton from "./CustomButton.jsx";
import "./Hero.css"

function Hero() {
    return(
      <>
      <section className="text-light body-font mt-12 pt-6" id="top">
  <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-center">
  <img
    className="border-4 border-info animate__animated animate__fadeInLeft dp"
    alt="hero"
    src={dp}
  />
</div>
    <div className="hero-text lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center animate__animated animate__fadeInRight">
      <p className="mb-2 leading-relaxed text-xl">Hello! I'm</p>
      <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-info animate__animated animate__fadeIn">Abir Al Mahdi Akhand</h1>
      <p className="mb-8 leading-relaxed text-lg">{configuration.introBio}</p>
      <div className="flex flex-wrap justify-center">
        <CustomButton title="Contact Me" href="/contact" iconClass="fa-solid fa-phone me-2"/>
        <CustomButton title="Download Resume" href="/resume" iconClass="fa-solid fa-download me-2"/>
      </div>
    </div>
  </div>
</section>
      </>
    )
  }
  
  export default Hero;