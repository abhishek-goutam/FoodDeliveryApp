import React from "react";
// import background from '../images/rest3.jpg'
// import { useNavigate } from "react-router-dom";
import Hero from '../pages/Hero/Hero';

const Home = () => {
  // const navigate = useNavigate();

  // const routeChange = () => {
  //   navigate('/menu');
  // }

  // const containerStyle = {
    
  //   display: "block",
  //   flexDirection: "column",
  //   alignItems: "right",
  //   justifyContent: "center",
  //   height: "70vh",
  //   backgroundImage: `url(${background})`,
  //   backgroundSize: "cover", // Ensure the image covers the container
  //   backgroundRepeat: "no-repeat",
  //   zIndex:'-1',
    

 
  //   // background: "#f5f5f5", // Light gray background

  // };

  // const headingStyle = {
  //   fontSize: "3rem",
  //   marginBottom: "1rem",
  //   fontFamily: "cursive",
  //   color: "#f5f5f5", // Green color
  // };

  // const subHeadingStyle = {
  //   fontSize: "1.5rem",
  //   marginBottom: "2rem",
  //   fontFamily: "Arial, sans-serif",
  //   color: "#4CAF50", // Green color
  //   marginLeft:'1rem'
  // };

  // const buttonStyle = {
  //   padding: "1rem 2rem",
  //   fontSize: "1.5rem",
  //   backgroundColor: "#4CAF50", // Green color
  //   color: "white",
  //   border: "none",
  //   cursor: "pointer",
  //   borderRadius: "5px",
  // };

  // return (
  //   <div style={containerStyle}>
  //     <h1 style={headingStyle}>HUNGRY 😋</h1>
  //     <h2 style={subHeadingStyle}>
  //       Need a <span style={{ color: "green" }}>CLEAN</span> and
  //     </h2>
  //     <h2 style={subHeadingStyle}>
  //       <span style={{ color: "green" }}>GREEN</span> delivery of food ???
  //     </h2>
  //     <button style={buttonStyle} onClick={routeChange}>Order Now</button>
  //   </div>
  // );

  return (
    <div className="home">
      <div className="hero">
        <Hero />
      </div>
    </div>
  );
}

export default Home;
