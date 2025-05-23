import React from "react";
import { Hero } from "../components/hero.jsx";
import { HomeCards } from "../components/HomeCards.jsx";
import { Navbar } from "../components/navbar.jsx";
import { JobListings } from "../components/jobListings.jsx";
import { ViewAllJobs } from "../components/ViewAllJobs.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export { HomePage };
