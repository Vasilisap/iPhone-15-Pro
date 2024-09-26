import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";

import * as Sentry from "@sentry/react";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

// Video Time lapse: 3:30:00

const App = () => {

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  );
};

export default Sentry.withProfiler(App);
