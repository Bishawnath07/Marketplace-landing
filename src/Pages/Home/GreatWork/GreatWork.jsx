import { HiArrowSmRight } from 'react-icons/hi';
import  './greatwork.css'
import img from './image/Rectangle.png'

const GreatWork = () => {
    return (
        <div className="container mx-auto bg-[#2B68DD] rounded-[10px] md:flex justify-between lg:mt-20 mt-16 lg:h-[385px]  p-[40px] ">
            <div className='lg:w-1/2'>
                <h1 className="hired-title">Hire or Buy Great Work</h1>
                <p className="hired-description  lg:my-10 my-5">Amet lectus ornare sapien fermentum sed. Sed lobortis molestie urna vel ante viverra tempor tristique.</p>
                <button className="hired-btn">Join Now <span><HiArrowSmRight></HiArrowSmRight> </span></button>
            </div>
            <div className='hired-img'>
            <img src={img} alt="" />
            </div>
        </div>
    );
};

export default GreatWork;