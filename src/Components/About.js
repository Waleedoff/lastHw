import React from "react";
import {useEffect} from 'react'
function About() {
  useEffect(()=>{
    console.log('Welcome to About component')
  })
  return (
    <div>
      <h1>Check on the console</h1>
        
    </div>
  );
}

export default About;
