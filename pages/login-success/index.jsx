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

function formEncode (payload) {
  var obj = Object.entries(payload)
  .map(([key, value]) => {
      return `${encodeURIComponent(key.toLowerCase())}=${encodeURIComponent(value)}`
  })
  .join("&");
  //console.log("OBJ ", obj);
  return obj;
}

async function getAccessToken(authCode){
  let payload = {
    code: authCode,
    grant_type: "authorization_code",
    CLIENT_ID: CLIENT_ID,
    CLIENT_SECRET: CLIENT_SECRET,
    REDIRECT_URI: REDIRECT_URI,
  }
  console.log('formencode:' + formEncode(payload))
  const response = await fetch(`https://api-oss.domain-dev.site/oauth/token`, {
      method: 'POST',
      body: formEncode(payload),
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  })
  console.log('response:')
  console.log(response)

  const data = response.json()
  console.log('data:')
  console.log(data)
  return response
}



const HomePage = () => {
  const router = useRouter()
  const code = router.query.code
  console.log(code)

  const token = getAccessToken(code)
  console.log(token)


  return (
    <div>
      <Logout iam={iam}/>
      <Dashboard /> <div>
      
  </div>
    
    </div>
  );
};


export default HomePage;
