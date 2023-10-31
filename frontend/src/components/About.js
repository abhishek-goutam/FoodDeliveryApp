import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import background from '../images/rest3.jpg'

function About() {
  const styles = {
    container: {
      padding: "20px",
      backgroundColor: "#f5f5f5",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    
     
    },
    header: {
      backgroundColor: "#ff5722" /* Your app's primary color */,
      color: "#fff",
      padding: "20px",
    },
    headerText: {
      fontSize: "2rem",
    },
    content: {
      padding: "20px",
      fontSize: "1.2rem",
      lineHeight: 1.5,
      margin: "0 auto",
      maxWidth: "800px",
      textAlign: "left",
      backgroundColor: 'rgb(224 242 245)',
      borderRadius: "10px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      padding: "20px",
    },
    paragraph: {
      marginBottom: "20px",
    },
  };
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "70vh",
    background: "#f0f0f0", // Light gray background
    backgroundImage: `url(${background})`,
    backgroundSize: "cover", // Ensure the image covers the container
    backgroundRepeat: "no-repeat",
    
  };

  const headingStyle = {
    fontSize: "3rem",
    marginBottom: "1rem",
    fontFamily: "cursive",
    color: "#1976D2", // Blue color
  };

  const subHeadingStyle = {
    fontSize: "1.5rem",
    marginBottom: "1rem",
    fontFamily: "Arial, sans-serif",
    color: "#333", // Dark gray color
    textAlign: "center",
  };

  const socialIconsContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2rem",
  };

  const iconStyle = {
    fontSize: "2.5rem",
    color: "#1976D2", // Blue color
    margin: "0 1rem",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About Us</h1>

      <h2 style={subHeadingStyle}>
        Feel free to learn more about us, our mission, and our values.
      </h2>
      <div style={styles.content}>
        <p style={styles.paragraph}>
          Welcome to{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>Port Belly!</span>{" "}
          We are passionate about providing you with the{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            BEST food delivery service in town
          </span>
          . Our mission is to deliver{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            delicious😋, fresh, and wholesome
          </span>{" "}
          meals right to your doorstep.
        </p>
        <p style={styles.paragraph}>
          At{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            YOUR Port Belly!
          </span>
          , we believe that everyone deserves access to high-quality, healthy
          food. We work with local restaurants and chefs to bring you a diverse
          menu of mouthwatering dishes. Whether you're craving comfort food, a
          quick snack, or a gourmet meal, we've got you covered.
        </p>
        <p style={styles.paragraph}>
          Our team is dedicated to ensuring that your food is delivered promptly
          and with a smile. We prioritize your satisfaction and convenience
          above all else.
        </p>
        <p style={styles.paragraph}>
          Thank you for choosing ❤️{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            YOUR Port Belly!
          </span>
          as your go-to food delivery service. We look forward to serving you
          and making your dining experience a delightful one.
        </p>
      </div>
      <div style={socialIconsContainerStyle}>
        <FacebookOutlinedIcon style={iconStyle} />
        <SubscriptionsOutlinedIcon style={iconStyle} />
      </div>
    </div>
  );
}

export default About;
