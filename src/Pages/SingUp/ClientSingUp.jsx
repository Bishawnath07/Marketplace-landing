import { useContext, useState } from "react";
import "./ClientSingUp.css";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { CountryDropdown } from "react-country-region-selector";
import { AuthContext } from "../../Providers/AuthProvider";

const ClientSingUp = () => {
  const [country, setCountry] = useState("Bangladesh");
  

  const {createUser, googleSingIn} = useContext(AuthContext)

  const handleClientsingup = event =>{
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const country = form.country.value;

    createUser(email, password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
    })

    console.log(firstName, lastName, email, password, country);
  }

  const handleGoogleSingIn =() =>{
    googleSingIn()
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser)
    })
  }

  return (
    <div className="mt-[200px] container mx-auto">
      <h1 className="singup-title">Sign Up as a Client</h1>
      <button className="social-button !mx-auto text-center justify-center items-center flex mt-[55px]">
        {" "}
        <span className="text-[32px] lg:mr-[105px] mr-[30px]">
          <AiFillApple></AiFillApple>
        </span>{" "}
        Continue with Apple
      </button>
      <button onClick={handleGoogleSingIn} className="social-button !mx-auto text-center justify-center items-center flex mt-[23px]">
        {" "}
        <span className="text-[32px] lg:mr-[105px] mr-[30px]">
          <FcGoogle></FcGoogle>
        </span>{" "}
        Continue with Google
      </button>
      <div className="divider lg:w-[850px] w-[350px] mt-[67px] mx-auto">OR</div>
      <div className=" mx-auto container mt-[60px]">
        <form onSubmit={handleClientsingup} className="lg:w-[846px] w-[350px] mx-auto">
          <div className=" grid md:grid-cols-2 grid-cols-1 gap-[84px]">
            <div>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                className="input input-bordered w-full "
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div>
            <input
              type="email"
              placeholder="Work Email Address"
              name="email"
              className="input input-bordered w-full mt-[34px]"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password (8 or more characters)"
              className="input input-bordered w-full mt-[34px]"
              required
            />
          </div>
          <div>
            <CountryDropdown
              value={country}
              name="country"
              onChange={(val) => setCountry(val)}
              className="input input-bordered w-full mt-[34px]"
            />{" "}
          </div>
          <div className="mt-[86px]">
            <input type="checkbox" className="checkbox" />
            <span className="label-text ml-[26px]">
              Send me emails with tips on how to find talents
            </span>
          </div>
          <div className="">
            <input type="checkbox" className="checkbox mt-[44px]" />
            <span className="label-text ml-[26px] ">
              Yes, I understand and agree to the terms of service, privacy
              policy
            </span>
          </div>
          <button className="submit-button !mx-auto text-center justify-center items-center flex mt-[72px]">
          Create my account
          </button>
        </form>
        <p className="mt-[44px] mb-[141px] text-center">Already have an account? <span className="text-[#2B68DD]">Log in</span></p>
      </div>
    </div>
  );
};

export default ClientSingUp;
