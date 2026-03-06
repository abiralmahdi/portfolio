import { useRef, useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import "./Contact.css"
import ContactButton from "./ContactButton";
import emailjs from '@emailjs/browser';

function Contact(){
  const form = useRef();
  const [status, setStatus] = useState(""); 
const [isLoading, setIsLoading] = useState(false); // NEW: loading state

const sendEmail = (e) => {
  e.preventDefault();
  setIsLoading(true);  // Start loading
  setStatus("");

  emailjs.sendForm(
    'service_1q8xopu',
    'template_8wj0zbb',
    form.current,
    'AcjkcDVuz3wq7QdBp'
  )
  .then((result) => {
    console.log(result.text);
    setStatus("Message sent successfully!");
    form.current.reset();
    setIsLoading(false); // Stop loading
  }, (error) => {
    console.log(error.text);
    setStatus("Failed to send message. Try again.");
    setIsLoading(false); // Stop loading
  });
};

  return(
    <>
      <Navbar />

      <section className="text-gray-400 body-font relative mt-6 pt-6">
        <div className="container px-5 py-16 mx-auto flex flex-col md:flex-row gap-16 items-stretch">

          {/* Quote Box */}
          <div className="md:w-1/2 flex animate__animated animate__fadeInLeft">
  <div className="quote-box quote-box-small p-6 rounded-xl shadow-lg w-full text-center flex flex-col justify-center h-full">
    
              <h2 className="text-xl font-bold text-info mb-6">
                Engineering Mindset and a Quick Joke
              </h2>

              <p className="text-lg italic text-white leading-relaxed mb-6">
                “Why do Python programmers have to wear glasses? <br/> Because they don’t C#”
              </p>

              <p className="text-gray-400">
                — Anonymous
              </p>

              <div className="mt-6 text-gray-300">
                Great engineers don't just write code — they design solutions,
                solve problems, and build systems that make the world work better.
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 flex animate__animated animate__fadeInRight">
  <form ref={form} onSubmit={sendEmail} className="contact-form contact-form-small bg-gray-900 shadow-lg rounded-xl p-6 flex flex-col w-full h-full">
 
              <h2 className="text-white text-xl mb-3 font-bold">
                Contact Me
              </h2>

              <p className="leading-relaxed mb-3 text-gray-400">
                Have a project, idea, or collaboration in mind? Send me a message.
              </p>

              <div className="relative mb-3">
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Your Name..."
                  required
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 text-base outline-none text-gray-100 py-2 px-3 transition-colors duration-200"
                />
              </div>

              <div className="relative mb-3">
                <input
                  type="text"
                  id="contact"
                  name="user_contact"
                  required
                  placeholder="Contact Number with Country code..."
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 text-base outline-none text-gray-100 py-2 px-3 transition-colors duration-200"
                />
              </div>

              <div className="relative mb-3">

                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  placeholder="Your Email..."
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 text-base outline-none text-gray-100 py-2 px-3 transition-colors duration-200"
                />
              </div>

              <div className="relative mb-3 flex-grow">
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your Message..."
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900 h-32 text-base outline-none text-gray-100 py-2 px-3 resize-none transition-colors duration-200"
                ></textarea>
              </div>

              <ContactButton text="Send Message" isLoading={isLoading} />

              {status && <p className="mt-4 text-center text-green-400">{status}</p>}

            </form>
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}

export default Contact;