import './Hero.css';
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const logoutUser = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className="hero-section">
      <div className="hero-title"> 
        <h1>
          Port Belly Gourmet Food, <br /> Fast Delivery!
        </h1>
        <p>
          Discover the flavorful and diverse universe of{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            Port Belly's{" "}
          </span>
          culinary delights through the{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            Port Belly Food Delivery App!
          </span>{" "}
          Relish the genuine tastes of India's beloved snacks, desserts, and
          savory treats, all readily brought to your doorstep.
        </p>
        <div>
          <button
            className="order-now-btn"
            onClick={() => navigate(user ? "/menu" : "/login")}
          >
            {user ? "Start Ordering" : "Login now"}
          </button>
          {user && (
            <button
              style={{ marginLeft: "10px" }}
              className="order-now-btn"
              onClick={() => logoutUser()}
            >
              {"Logout"}
            </button>
          )}
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://eathub.live/static/assets/images/deliverybike-914x596.png"
          alt="banner"
        />
      </div>
    </div>
  );
};

export default Hero;
