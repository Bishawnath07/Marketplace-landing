import './bestpart.css'
import { HiCheck } from "react-icons/hi";
import img from './image/Rectangle 33.png'

const BestPart = () => {
    return (
        <div className="container mx-auto lg:flex mb-36 justify-between lg:mt-20 mt-10 ">
            <div>
                <h1 className="Title">The Best Part Of Everything</h1>
               <div className='my-5'>
               <div className='flex items-center gap-5'>
                    <span  ><HiCheck className='bg-[#E4EEFF]  rounded-full'></HiCheck></span>
                    <h3 className='semititle'>Stick to your Budget</h3>
                </div>
               
            <p className='ml-9 descriptions text-justify'> Lorem ipsum dolor sit amet consectetur Amet lectus Amet lectus ornare sapien </p>
               </div>
               <div className=''>
               <div className='flex items-center gap-5'>
                    <span  ><HiCheck className='bg-[#E4EEFF]  rounded-full'></HiCheck></span>
                    <h3 className='semititle'>Stick to your Budget</h3>
                </div>
               
            <p className='ml-9 descriptions text-justify'> Lorem ipsum dolor sit amet consectetur Amet lectus Amet lectus ornare sapien </p>
               </div>
               <div className='my-5'>
               <div className='flex items-center gap-5'>
                    <span  ><HiCheck className='bg-[#E4EEFF]  rounded-full'></HiCheck></span>
                    <h3 className='semititle'>Get Quality Work Done Quickly</h3>
                </div>
               
            <p className='ml-9 descriptions text-justify'> Lorem ipsum dolor sit amet consectetur Amet lectus Amet lectus ornare sapien </p>
               </div>
               <div className=''>
               <div className='flex items-center gap-5'>
                    <span  ><HiCheck className='bg-[#E4EEFF]  rounded-full'></HiCheck></span>
                    <h3 className='semititle'>Pay When you are Happy</h3>
                </div>
               
            <p className='ml-9 descriptions text-justify'> Lorem ipsum dolor sit amet consectetur Amet lectus Amet lectus ornare sapien </p>
               </div>
               <div className='mt-5'>
               <div className='flex items-center gap-5'>
                    <span  ><HiCheck className='bg-[#E4EEFF]  rounded-full'></HiCheck></span>
                    <h3 className='semititle'>Count On 24/7 Support</h3>
                </div>
               
            <p className='ml-9 descriptions text-justify'> Lorem ipsum dolor sit amet consectetur Amet lectus Amet lectus ornare sapien </p>
               </div>
     
                <div>
                    <button className='get-start-btn mt-10'>Get Started</button>
                </div>
            </div>
            <div  className='mt-5'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default BestPart;