import React from "react";

function About() {
  return (
    <div className="bg-white flex justify-center aline-center text-black min-h-[10vh]">


<CountUp
  from={0}
  to={100}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/>
    </div>
  );  
}
import CountUp from './CountUp'

export default About;
