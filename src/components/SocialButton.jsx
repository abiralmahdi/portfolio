import React from "react";

function SocialButton({ href, iconClass, bgColor = "bg-gray-800", size = "w-10 h-10" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${bgColor} ${size} rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity mr-2`}
    >
      <i className={iconClass}></i>
    </a>
  );
}

export default SocialButton;