import './forclient.css'
import { HiArrowSmRight } from "react-icons/hi";
import img from './image/Rectangle 49.png'
import svg from './image/Group 3580.png'

const ForClient = () => {
    return (
        <div className="container mx-auto lg:mt-20 mt-16 forclient-section">
           <div className="flex flex-col items-center ">
           <p className='pt-6 font-[600] '>For Client</p>
            <h1 className="client-title">Find Talent Your Way</h1>
            <p className="client-descriptions my-5">Lorem ipsum dolor sit amet consectetur. Amet lectus ornare sapien fermentum sed.</p>
           <div className='lg:flex gap-8 '>
           <button className="post-btn flex mb-3 lg:mb-0">Post Job & Hire <span><HiArrowSmRight></HiArrowSmRight> </span> </button>
            <button className="browse-btn flex ">Browse & Buy <span><HiArrowSmRight></HiArrowSmRight> </span></button>
           </div>
           </div>
           <div className='flex flex-col items-center mt-8 relative'>
            <div className='absolute top-[50%] '>
                <img src={svg} alt="" />
            </div>
            <img className='forclient-img' src={img} alt="" />
           </div>
            
        </div>
    );
};

export default ForClient;