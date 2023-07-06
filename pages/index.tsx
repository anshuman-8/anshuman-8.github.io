import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Profile from "../components/Profile";
import Details from "../components/Details";
import Image from "next/image";
import { FaMoon, FaSun } from "react-icons/fa";
import HeroBG from "../public/hero-spiro.svg";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="">
      <Navbar/>
        <main className="container">
          <div className="md:container md:mx-auto px-10 lg:px-20">
            <div className="lg:flex lg:flex-row justify-center">
              <Profile />
              <Details />
            </div>
          </div>
        </main>

        <footer></footer>

    </div>
  );
};

export default Home;
