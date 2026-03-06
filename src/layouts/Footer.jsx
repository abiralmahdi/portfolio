import SocialButton from "../components/SocialButton.jsx";

function Footer() {
  return (
    <footer className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-8 mx-auto flex flex-col sm:flex-row items-center justify-between">

        {/* Left: Portfolio Name */}
        <a className="flex title-font font-medium items-center text-white mb-4 sm:mb-0">
          <span className="ml-3 text-xl text-info">Abir's Portfolio</span>
        </a>

        {/* Right: Icons + Copyright */}
        <div className="flex flex-col items-center sm:items-end">
          {/* Social Icons */}
          <div className="flex mb-2">
            <SocialButton href="https://www.facebook.com/abirs.empire17610976" iconClass="fab fa-facebook-f" bgColor="bg-blue-600" />
            <SocialButton href="https://www.instagram.com/abiralmahdi_/" iconClass="fab fa-instagram" bgColor="bg-pink-500" />
            <SocialButton href="https://github.com/abiralmahdi" iconClass="fab fa-github" bgColor="bg-gray-800" />
            <SocialButton href="https://www.linkedin.com/in/abir-al-mahdi-akhand-7599b7267/" iconClass="fab fa-linkedin-in" bgColor="bg-blue-700" />
          </div>

          {/* Copyright Text */}
          <p className="text-sm text-gray-400 sm:ml-0 sm:pl-0 sm:border-l-0 border-t border-gray-800 pt-2 sm:pt-0 text-center sm:text-right">
            © 2026 Abir Al Mahdi Akhand —
            <a href="https://github.com/abiralmahdi" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">
              @abiralmahdi
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;