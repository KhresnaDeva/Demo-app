import React from "react";
import Navbar from "../components/Navbar";
import HeroPage from "../components/Hero";
import { useRouter } from "next/router";

const {iam} = require('iam-sdk-frontend')
let CLIENT_ID = "64cca6634bb48b608d3bdf31";
let CLIENT_SECRET = "$2b$04$VFIar.GWpZXLQqLk3sVoEehKdaHuU2JJoY6j5J.2g9AsHZFR8SkAu";
let REDIRECT_URI = "http://localhost:4005/login-success";
let AUDIENCE = "http://localhost:8082";
let SCOPE = "user:read user:create";

const data = {
    CLIENT_ID: CLIENT_ID,
    CLIENT_SECRET: CLIENT_SECRET,
    REDIRECT_URI: REDIRECT_URI,
    AUDIENCE: AUDIENCE,
    SCOPE: SCOPE,
  }

iam.setup(data)



const HomePage = () => {
  const router = useRouter()
const code = router.query.code
console.log(code)

const Token = iam.getAccessToken(code)
console.log(Token)


  return (
    <div>
      <Navbar iam={iam}/>
      <HeroPage /> <div>
      
  </div>
    
    </div>
  );
};


export default HomePage;
