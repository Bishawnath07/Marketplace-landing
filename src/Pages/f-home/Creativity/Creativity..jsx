import { HiArrowSmRight } from "react-icons/hi";
import img from './image/Rectangle 975.png'
import './creativity.css'

const Creativity = () => {
    return (
        <div className="container mx-auto bg-[#2B68DD] rounded-[10px] md:flex justify-between lg:mt-20 mt-16 lg:h-[400px] p-[25px]  lg:p-[40px] ">
        <div className='lg:w-1/2'>
            <h1 className="creativity-title">Upload Your Creativity</h1>
            <p className="creativity-description  lg:my-10 my-5">Lorem ipsum dolor sit amet consectetur. Odio ornare amet adipiscing proin ut cras varius. Erat phasellus venenatis integer senectus feugiat.</p>
            <button className="creativity-btn">Upload <span><HiArrowSmRight></HiArrowSmRight> </span></button>
        </div>
        <div className='creativity-img'>
        <img src={img} alt="" />
        </div>
    </div>
    );
};

export default Creativity;