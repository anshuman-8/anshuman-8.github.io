import React from "react";
import Image from "next/image";
import ProfileImg from "../public/images/profileImage.jpg";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillMail,
  AiOutlineFile,
} from "react-icons/ai";

interface IProps {
  isDark: boolean;
}

function Profile({ isDark }: IProps) {

  const onButtonClick = () => {
    fetch("Anshuman-Resume.pdf").then((response) => {
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
    <div className="pt-8 max-w-[320px] md:mr-10 lg:mr-20 ">
      <div className="my-8 align-middle ml-10">
        <Image
          src={ProfileImg}
          alt="anshuman's Image"
          height={"170px"}
          width={"170px"}
          className="rounded-full"
        ></Image>
      </div>
      <div className="">
        <h1 className="text-3xl font-bold">I&apos;m Anshuman Swain</h1>
        <div className="my-5 text-base text-gray-700 dark:text-white">
          <p className="">
            A CSE(AI) undergrad(2025) at{" "}
            <a href="https://www.amrita.edu/" className="hover:text-blue-500">
              Amrita Vishwa Vidhyapeetham
            </a>{" "}
            , Kerala, India.
          </p>
          <p className="py-2">
            I like to work on Web & Mobile Apps, and make applications that help
            people.
          </p>
          <p className="">
            I have participated in hackathons and build many projects.
          </p>
          <p className="py-2">
            A member at{" "}
            <a
              href="https://amfoss.in/"
              className="hover:text-blue-500 underline"
            >
              amFoss
            </a>
          </p>
        </div>
        <button
          className="mt-3 mb-8 border-2 hover:bg-orange-200 active:bg-orange-100 px-2 py-1 rounded-lg dark:active:bg-slate-500 dark:hover:bg-slate-800 shadow-xl active:shadow-sm flex flex-row items-center"
          onClick={onButtonClick}
        >
          <AiOutlineFile size={20} className="mx-1" />
          Resume
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Contacts/ Social Links</h1>
        <div className="grid grid-cols-2 gap-x-3 gap-y-4">
          <a
            href="https://github.com/anshuman-8"
            className="flex flex-row items-center hover:underline"
          >
            <AiFillGithub className="mx-2" size={35} />
            <div>Github</div>
          </a>
          <a
            href="https://twitter.com/Anshuman_8_"
            className="flex flex-row items-center hover:underline"
          >
            <AiOutlineTwitter className="mx-2" size={35} />
            <span>Twitter</span>
          </a>
          <a
            href="https://www.linkedin.com/in/anshuman-swain-1529b2219/"
            className="flex flex-row items-center hover:underline"
          >
            <AiFillLinkedin className="mx-2" size={35} />
            <div>Linkedin</div>
          </a>
          <a
            href="mailto:anshuman8swain@gmail.com"
            className="flex flex-row items-center hover:underline"
          >
            <AiFillMail className="mx-2" size={35} />
            <div>Mail</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
