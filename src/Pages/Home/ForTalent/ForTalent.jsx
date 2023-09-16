import './fortalent.css'
import img from './image/Rectangle 49.png'
import svg from  './image/Group 3580.png'
import { HiArrowSmRight } from 'react-icons/hi';


const ForTalent = () => {
    return (
        <div  className='container mx-auto lg:mt-20 mt-10 great-work-section'>
            <div className='flex justify-between'>
            <div className=' relative lg:w-1/3'>
            <div className='absolute top-[50%] right-[45%] '>
                <img src={svg} alt="" />
            </div>
            <img className='forclient-img' src={img} alt="" />
           </div>
           <div className='lg:w-2/3  m-auto'>
           <div className='flex flex-col items-center'>
           <p className='pt-6 font-[600] '>For Client</p>
            <h1 className="talent-title ">Find Talent Your Way</h1>
            <p className="talent-description my-5">Lorem ipsum dolor sit amet consectetur. Amet lectus ornare sapien fermentum sed.</p>
           <div className='lg:flex gap-8'>
           <button className="find-btn flex  mb-3 lg:mb-0">Find Opportunity <span><HiArrowSmRight></HiArrowSmRight> </span> </button>
            <button className="upload-btn flex ">Upload Your Creativity <span><HiArrowSmRight></HiArrowSmRight> </span></button>
           </div>
           </div>
           </div>
            </div>
        </div>
    );
};

export default ForTalent;