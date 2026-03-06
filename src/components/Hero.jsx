import dp from "../assets/img/dp.png";
import configuration from "../assets/configurations.json";
import CustomButton from "./CustomButton.jsx";
import "./Hero.css"

function Hero() {
    return(
      <>
      <section className="text-light body-font mt-12 pt-12" id="top">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <img
        className="object-cover object-center rounded-full border-4 border-info animate__animated animate__fadeInLeft"
        alt="hero"
        src={dp}
      />
    </div>
    <div className="hero-text lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center animate__animated animate__fadeInRight">
      <p className="mb-2 leading-relaxed text-2xl">Hello! I'm</p>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-info animate__animated animate__fadeIn">Abir Al Mahdi Akhand</h1>
      <p className="mb-8 leading-relaxed text-xl">{configuration.introBio}</p>
      <div className="flex flex-wrap justify-center">
        <CustomButton title="Contact Me" href="" iconClass="fa-solid fa-phone me-2"/>
        <CustomButton title="Download Resume" href="" iconClass="fa-solid fa-download me-2"/>
      </div>
    </div>
  </div>
</section>
      </>
    )
  }
  
  export default Hero;