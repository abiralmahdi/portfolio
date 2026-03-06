import React from "react";
import { useInView } from "react-intersection-observer";
import "animate.css";
import "./HorizontalCard.css";


function HorizontalCard({ logo, title, subject, grade, description, animation = "animate__fadeInUp" }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
  ref={ref}
  className={`card-horizontal p-4 mb-4 ${inView ? `animate__animated ${animation}` : ""}`}
  style={{ maxWidth: "1200px", margin: "0 auto", transitionDelay: inView ? "0.2s" : "0s" }}
>
  <div className="row g-0 align-items-center">
    {/* Image */}
    <div className="col-md-4 text-center p-3">
      <img
        src={logo}
        alt="logo"
        className="img-fluid rounded"
        style={{ maxHeight: "150px", objectFit: "cover" }}
      />
    </div>

    {/* Card Body */}
    <div className="col-md-8">
      <div className="card-body card-text-area">
        <h5 className="text-2xl fw-bold text-info">{title}</h5>
        <div className="text-lg gap-2 mb-2">
          <span className="text-light fw-bold">{subject}</span><br/>
          <span className="text-light fw-bold">{grade}</span>
        </div>
        <p className="card-text text-light text-lg">{description}</p>
      </div>
    </div>
  </div>
</div>
  );
}

export default HorizontalCard;