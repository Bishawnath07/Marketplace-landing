import { useState } from "react";
import Navbar from "../../Shared/Navbar/Navbar";
import "./SingUp.css";
import client from '../../assets/images/designer_4602802 1.png'
import freelancer from '../../assets/images/drawing_1738701 1.png'
import { Link } from "react-router-dom";

const SingUp = () => {
  const [activeCard, setActiveCard] = useState("client");

  const handleCardClick = (card) => {
    setActiveCard(card);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-[100px] container mx-auto">
        <h1 className="singup-title">Join as a client or freelancer</h1>
        <div className="signup-container grid grid-cols-1 md:grid-cols-2 mx-auto gap-[40px] justify-center">
          <div
            className={`toggle-card client-card ${
              activeCard === "client" ? "active" : ""
            }`}
            onClick={() => handleCardClick("client")}
          >
            <img src={client} alt="Client" />
            <h2>I am a client, looking for hire talent</h2>
          </div>
          <div
            className={`toggle-card freelancer-card ${
              activeCard === "freelancer" ? "active" : ""
            }`}
            onClick={() => handleCardClick("freelancer")}
          >
            <img src={freelancer} alt="Freelancer" />
            <h2>I am a freelancer, looking for work</h2>
          </div>
        </div>

        {activeCard === "client" && (
          <Link to={'/client-sing-up'}><button className="login-btn mx-auto">Join as a Client</button></Link>
        )}
        {activeCard === "freelancer" && (
          <button className="login-btn mx-auto">Join as a Freelancer</button>
        )}

        <p className="mt-[24px] singup-p">Already have an account? <span className="text-[#2B68DD] cursor-pointer">Log in</span></p>
      </div>
    </div>
  );
};

export default SingUp;
