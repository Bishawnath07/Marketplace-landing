import "./ClientSingUp.css";
import { AiFillApple, AiOutlineGoogle } from "react-icons/ai";

const ClientSingUp = () => {
  return (
    <div className="mt-[200px] container mx-auto">
      <h1 className="singup-title">Sign Up as a Client</h1>
      <button className="social-button !mx-auto text-center justify-center items-center flex mt-[55px]">
        {" "}
        <span className="text-[32px] mr-[105px]">
          <AiFillApple></AiFillApple>
        </span>{" "}
        Continue with Apple
      </button>
      <button className="social-button !mx-auto text-center justify-center items-center flex mt-[23px]">
        {" "}
        <span className="text-[32px] mr-[105px]">
          <AiOutlineGoogle></AiOutlineGoogle>
        </span>{" "}
        Continue with Google
      </button>
      <div className="divider w-[850px] mt-[67px] mx-auto">OR</div>
      <div className=" mx-auto container text-center">
        <form className="">
          <div className=" text-center mx-auto">
          <label className="">Fast Name</label>
          <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientSingUp;
