import React from "react";
import Navbar from "../components/Navbar";
import HeroPage from "../components/Hero";

const iam = require('iam-sdk-frontend')
iam.iam.setup('64cca6634bb48b608d3bdf31','http://localhost:8081','http://localhost:8082','user:read user:create')


const HomePage = () => {
  return (
    <div>
      <Navbar iam={iam}/>
      <HeroPage /> <div>
  </div>
    
    </div>
  );
};

export default HomePage;
