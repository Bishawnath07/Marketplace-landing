import { useContext } from "react";
import "./Login.css";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

  const {singIn, googleSingIn, appleSingIn} = useContext(AuthContext)

  const handlelogin = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password)

    singIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
    })
  }

  const handleGoogleSingIn =() =>{
    googleSingIn()
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser)
    })
  }

  const handleAppleSingIn =() =>{
    appleSingIn()
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser)
    })
  }
  return (
    <div className="lg:mt-[200px] mt-[100px] container mx-auto">
      <h1 className="singup-title">Log In</h1>

      <div className="lg:w-[481px] w-[350px] mx-auto mt-[79px]">
        <form onSubmit={handlelogin} className="">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Work Email Address"
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
          <button className="login-button !mx-auto text-center justify-center items-center flex mt-[22px]">
          Continue with Email
          </button>
        </form>
        <div className="divider lg:w-[481px] w-[350px] mt-[65px] mx-auto">
          OR
        </div>
        <button onClick={handleAppleSingIn} className="social-login-button !mx-auto text-center justify-center items-center flex mt-[55px]">
          {" "}
          <span className="text-[32px] mr-[30px]">
            <AiFillApple></AiFillApple>
          </span>{" "}
          Continue with Apple
        </button>
        <button onClick={handleGoogleSingIn} className="social-login-button !mx-auto text-center justify-center items-center flex mt-[23px]">
          {" "}
          <span className="text-[32px]  mr-[30px]">
            <FcGoogle></FcGoogle>
          </span>{" "}
          Continue with Google
        </button>
        <p className="mt-[44px] mb-[141px] text-center">Don't have an account? <span className="text-[#2B68DD]">Sign Up</span></p>
      </div>
    </div>
  );
};

export default Login;
