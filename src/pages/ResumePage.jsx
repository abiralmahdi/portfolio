import React from "react";
import Navbar from "../layouts/Navbar"
import resume from "../assets/files/resume.pdf";
import Footer from "../layouts/Footer"

function ResumePage() {
  return (
    <>
    <Navbar/>
    <div className="w-full min-h-screen bg-gray-950 pt-6 flex flex-col items-center mt-20  animate__animated animate__fadeInUp">
      <div className="w-100 max-w-5xl" style={{ height: 'calc(100vh - 120px)' }}>
  <iframe
    src={`${resume}#zoom=page-width`}
    width="100%"
    height="100%"
    className="border-0"
  ></iframe>
</div>

    </div>
    <Footer/>
    </>
  );
}

export default ResumePage;