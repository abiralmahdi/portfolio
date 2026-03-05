import HorizontalCard from "./HorizontalCard";
import nsuLogo from "../assets/img/nsu.png";
import accLogo from "../assets/img/acc.svg";
import acpsLogo from "../assets/img/acps.png";
import configuration from "../assets/configurations.json";

function Education() {
  return (
    <>
    <h2 className="text-center fw-bold text-4xl text-info mb-4" id="education">Educational Qualifications</h2>
    <div className=" flex flex-wrap">
      <HorizontalCard
        logo={nsuLogo}
        title="North South University"
        subject="B.Sc in Computer Science and Engineering, (May, 2022-December, 2025)"
        grade="CGPA: 3.57 on a scale of 4"
        description={configuration.nsuDesc}
        animation="animate__fadeInLeft"
      />
      <HorizontalCard
        logo={accLogo}
        title="Adamjee Cantonment College"
        subject="Higher Secondary Certificate (HSC), 2021"
        grade="GPA: 5 out of 5"
        description={configuration.accDesc}
        animation="animate__fadeInRight"
      />
      <HorizontalCard
        logo={acpsLogo}
        title="Adamjee Cantonment Public School"
        subject="Secondary School Certificate(SSC), 2019"
        grade="GPA: 5 out of 5"
        description={configuration.acpsDesc}
        animation="animate__fadeInLeft"
      />
    </div>
    </>
  );
}

export default Education;