import type { NextPage } from "next";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import SEO from "@bradgarropy/next-seo";
import Information from "../components/Information";

const Home: NextPage = () => {
  return (
    <div className="">
      <SEO
        title="Anshuman Swain"
        description="Hey, I'm Anshuman Swain, A CSE(AI) undergrad(2025) from India. AI enthusiast, proficient in Machine Learning, Computer Vision, and developing amazing Web and Mobile apps. Checkout my Portfolio and projects that I have made."
        keywords={[
          "Anshuman",
          "Anshuman Swain",
          "Anshuman's Portfolio",
          "ML-Engineer",
          "website",
          "Anshuman amFOSS",
          "blog",
          "portfolio",
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
        <div className=" max-w-[1050px] mx-auto px-10">
          <div className="lg:top-0 pt-8 h-min ">
            <Profile />
          </div>
          <Information />
        </div>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
