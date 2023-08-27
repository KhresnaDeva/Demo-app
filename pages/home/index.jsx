import React from "react";

import Navbar from "../../src/components/Navbar";
import HeroPage from "../../src/components/Hero";


const {iam} = require('iam-sdk')
let CLIENT_ID = "64cca6634bb48b608d3bdf31";
let CLIENT_SECRET = "$2b$04$VFIar.GWpZXLQqLk3sVoEehKdaHuU2JJoY6j5J.2g9AsHZFR8SkAu";
let REDIRECT_URI = "http://localhost:8081/login-success";
let AUDIENCE = "http://localhost:8082";
let SCOPE = "user:read user:create";

const data = {
  CLIENT_ID: CLIENT_ID,
  CLIENT_SECRET: CLIENT_SECRET,
  REDIRECT_URI: REDIRECT_URI,
  AUDIENCE: AUDIENCE,
  SCOPE: SCOPE,
}

console.log(data)
iam.setup(data)

const HomePage = () => {
 


  return (
    <div>
      <Navbar iam={iam}/>
     
      
  </div>
    
  );
};


export default HomePage;
