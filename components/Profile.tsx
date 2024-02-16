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
    <div className="flex flex-col md:flex-row justify-around items-start md:space-x-10 my-5">
      <div className="mb-3 md:mb-0">
        <Image
          src={ProfileImg}
          alt="Anshuman's Image"
          height={230}
          width={230}
          className="rounded-3xl"
        />
      </div>
      <div className="max-w-[650px]">
        <h1 className="md:text-4xl text-2xl font-bold">Anshuman Swain</h1>
        <div className="my-3 text-base text-gray-700 dark:text-slate-200">
          <p className="py-1">20 y/o</p>
          <p>
            A CSE(AI) undergrad(2025) at{" "}
            <a href="https://www.amrita.edu/" className="hover:text-blue-500">
              Amrita Vishwa Vidhyapeetham
            </a>{" "}
            , Kerala, India.
          </p>
          <p className="py-2">
            AI enthusiast, proficient in Machine Learning, Computer Vision, and
            developing amazing Web and Mobile apps.
          </p>
          <p className="py-1">
            A member at{" "}
            <a
              href="https://amfoss.in/"
              className="hover:text-blue-500 underline"
            >
              amFOSS
            </a>
          </p>
        </div>
        <button
          className="mt-3 mb-5 border-2 hover:bg-orange-200 active:bg-orange-100 px-2 py-1 rounded-lg dark:active:bg-slate-500 dark:hover:bg-slate-700 shadow-lg active:shadow-sm flex flex-row items-center"
          onClick={onButtonClick}
        >
          <AiOutlineFile size={20} className="mx-1" />
          Resume
        </button>
      </div>
    </div>
  );
}

export default Profile;
