import type { NextPage } from "next";
import Head from "next/head";
import Profile from "../components/Profile";
import Navbar from "../components/Navbar";
import SEO from "@bradgarropy/next-seo";
import Information from "../components/Information";

const Home: NextPage = () => {
  return (
    <div className="">
      <SEO
        title="Anshuman Swain | AI Engineer, Medical AI & Computer Vision Researcher"
        description="AI Engineer specializing in Medical AI and Computer Vision. CSE(AI) undergrad at Amrita Vishwa Vidhyapeetham. Currently researching Medical AI for Endoscopy ultrasound image analysis. Expertise in AI, Computer Vision, Machine Learning, and Deep Learning."
        keywords={[
          "Anshuman Swain",
          "AI Engineer",
          "Medical AI",
          "Computer Vision",
          "Computer Vision Engineer",
          "Medical AI Researcher",
          "Machine Learning Engineer",
          "Deep Learning",
          "Medical Imaging AI",
          "Endoscopy AI",
          "Ultrasound Image Analysis",
          "AI Research",
          "Computer Vision Research",
          "Amrita Vishwa Vidhyapeetham",
          "amFOSS",
        ]}
        icon={"/favicon.ico"}
        themeColor={"#101b29"}
        facebook={{
          image: "https://anshuman-8.vercel.app/og-image.png",
          url: "https://anshuman-8.vercel.app/",
          type: "website",
        }}
        twitter={{
          image: "https://anshuman-8.vercel.app/og-image.png",
          site: "@an8human",
          card: "summary_large_image",
        }}
      />
      <Head>
        <link rel="canonical" href="https://anshuman-8.vercel.app/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Anshuman Swain",
              "url": "https://anshuman-8.vercel.app",
              "image": "https://anshuman-8.vercel.app/og-image.png",
              "sameAs": [
                "https://github.com/anshuman-8",
                "https://twitter.com/an8human",
                "https://www.linkedin.com/in/anshuman-swain-1529b2219/"
              ],
              "jobTitle": "AI Engineer, Medical AI & Computer Vision Researcher",
              "alumniOf": {
                "@type": "Organization",
                "name": "Amrita Vishwa Vidhyapeetham"
              },
              "memberOf": {
                "@type": "Organization",
                "name": "amFOSS"
              },
              "knowsAbout": [
                "Artificial Intelligence",
                "Medical AI",
                "Computer Vision",
                "Medical Imaging",
                "Endoscopy Image Analysis",
                "Ultrasound Image Processing",
                "Machine Learning",
                "Deep Learning",
                "Neural Networks",
                "Image Recognition",
                "Computer Vision Research",
                "Medical AI Research"
              ]
            })
          }}
        />
      </Head>
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
