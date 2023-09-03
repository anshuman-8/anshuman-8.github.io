import type { NextPage } from "next";
import Profile from "../components/Profile";
import Details from "../components/Details";
import Navbar from "../components/Navbar";
import SEO from "@bradgarropy/next-seo";

const Home: NextPage = () => {
  return (
    <div className="">
      <SEO
        title="Anshuman Swain"
        description="Hey, I'm Anshuman Swain, A CSE(AI) undergrad(2025) from India.I like to work on Web & Mobile Apps, and make applications that help people. Checkout my Portfolio and projects that I have made."
        keywords={[
          "Anshuman",
          "anshuman",
          "Anshuman Swain",
          "Anshuman's Portfolio",
          "Developer",
          "software developer",
          "website",
          "blog",
          "portfolio",
          "Anshuman's personal portfolio",
        ]}
        icon={"/favicon.ico"}
        themeColor={"#334155"}
        facebook={{
          image: "/og-image.png",
          url: "https://anshuman.8.vercel.app/",
          type: "website",
        }}
        twitter={{
          image: "/og-image.png",
          site: "@an8human",
          card: "summary_large_image",
        }}
      />
      <Navbar />
      <main className="scroll-smooth">
        <div className="md:container md:mx-auto px-8 lg:px-16">
          <div className="lg:flex lg:justify-center">
            <div className=" lg:sticky lg:top-0 pt-8 max-w-[320px] md:mr-10 lg:mr-20 h-min ">
              <Profile />
            </div>
              <Details />
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
