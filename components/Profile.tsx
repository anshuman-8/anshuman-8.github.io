import React from "react";
import Image from "next/image";
import ProfileImg from "../public/images/profileImage.jpeg";
import { AiOutlineFile } from "react-icons/ai";

function Profile() {
  const onButtonClick = () => {
    fetch("Anshuman_Resume.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Anshuman-Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start md:space-x-12 my-8 animate-fadeIn">
      <div className="mb-6 md:mb-0 transition-transform duration-300 hover:scale-105">
        <div className="relative">
          <Image
            src={ProfileImg}
            alt="Anshuman's Image"
            height={280}
            width={280}
            className="rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
            priority
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
        </div>
      </div>
      <div className="max-w-[650px] text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
          Anshuman Swain
        </h1>
        <div className="my-4 text-lg space-y-3 text-gray-700 dark:text-slate-200">
          <p className="font-medium">21 y/o</p>
          <p>
            A CSE(AI) undergrad(2025) at{" "}
            <a 
              href="https://www.amrita.edu/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 
                       transition-colors duration-200 font-medium"
            >
              Amrita Vishwa Vidhyapeetham
            </a>
            , Kerala, India.
          </p>
          <p className="leading-relaxed">
            AI enthusiast, proficient in Machine Learning, Computer Vision, and
            developing amazing Web and Mobile apps.
          </p>
          <p>
            A member at{" "}
            <a
              href="https://amfoss.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 
                       transition-colors duration-200 font-medium underline"
            >
              amFOSS
            </a>
          </p>
        </div>
        <button
          className="mt-4 px-6 py-2.5 rounded-lg bg-orange-100 hover:bg-orange-200 dark:bg-slate-800 dark:hover:bg-slate-700 
                     transition-all duration-300 shadow-lg hover:shadow-xl active:shadow-md flex items-center justify-center 
                     space-x-2 font-medium text-gray-800 dark:text-slate-200
                     focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 
                     dark:focus:ring-offset-slate-900"
          onClick={onButtonClick}
          aria-label="Download Anshuman Swain's resume as PDF"
        >
          <AiOutlineFile size={20} />
          <span>Download Resume</span>
        </button>
      </div>
    </div>
  );
}

export default Profile;
