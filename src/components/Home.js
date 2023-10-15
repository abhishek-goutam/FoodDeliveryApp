import React from "react";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate= useNavigate();
  const routeChange =()=>{
    navigate('/menu');
  }
  return (
    <div className="home">
      <h1 className="h1home">HUNGRY 😋</h1>
      <h1 className="h2home">
        Need a <span style={{ color: "green" }}>CLEAN</span> and
      </h1>

      <h2 className="h2home">
        <span style={{ color: "green"}}>GREEN</span> delivery of food ???
      </h2>
      <button className="ordernow" onClick={routeChange}>Order Now</button>
    </div>
  );
}

export default Home;
