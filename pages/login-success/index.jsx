import React from "react";
import Navbar from "../components/Navbar";
import HeroPage from "../components/Hero";
import { useRouter } from "next/router";
import Dashboard from "../components/Dashboard";
import Logout from "../components/Logout";

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

iam.setup(data)


const HomePage = () => {
  const router = useRouter()
  const code = router.query.code
  console.log(code)
  let token = ''
  const res = iam.getAccessToken(code).then(result => {
    console.log('result:')
    console.log(result)
    if('access_token' in result) {
      console.log(result.access_token)
      token = result.access_token
    }
  })
  console.log('token:')
  console.log(token)

  if(token != ''){
    window.localStorage.setItem('access_token', token)
  }


  return (
    <div>
      <Logout iam={iam}/>
      <Dashboard /> <div>
      
  </div>
    
    </div>
  );
};


export default HomePage;
