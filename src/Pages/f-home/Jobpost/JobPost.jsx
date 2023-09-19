import { HiOutlineHeart, HiOutlineLocationMarker } from 'react-icons/hi';
import './jobpost.css'

const JobPost = () => {
    return (
        <div className="container mx-auto lg:mt-20 mt-10 ">
            <div>
            <div className="flex justify-between ">
                <h1 className="job-post-title">Job Post
                </h1>
                <button className="view-all-jobs-btn">View All Jobs</button>
            </div>
            <div className="flex justify-between mt-4 lg:mt-16">
                <p className='lg:text-[20px] text-[18px] font-[500] '>2D Illustration</p>
                <HiOutlineHeart className="h-[30px] w-[30px]" />
            </div>

            <p className='lg:text-[16px] text-[14px] font-[400] my-5'>Fixed price - Intermediate - Budget $5 - 2 hours ago</p>
            <p className='lg:text-[16px] text-[14px] font-[400] text-justify lg:mb-10  mb-5'>Lorem ipsum dolor sit amet consectetur. Odio ornare amet adipiscing proin ut cras varius. Erat phasellus venenatis integer senectus feugiat pharetra arcu tristique viverra. Mi pharetra at ullamcorper sit tempus nulla sagittis. Diam ultrices dictumst vitae sit diam nec viverra. Sapien auctor etiam morbi quam adipiscing in et non. </p>

            <div className='grid md:grid-cols-7 lg:grid-cols-9 gap-[5px]'>
                <p className='text-[12px] font-[400] tags'>Adobe Illustrator</p>
                <p className='text-[12px] font-[400]  tags'>Adobe photoshop</p>
                <p className='text-[12px] font-[400]  tags'>Adobe indesign</p>
                <p className='text-[12px] font-[400]  tags'>Graphic design</p>
                <p className='text-[12px] font-[400] tags'>illustrator</p>
            </div>
            <div className="inline-flex gap-20 lg:mt-10 mt-8">
                <div className='inline-flex gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_661_877)">
                            <path d="M12 0C5.383 0 0 5.383 0 12C0 18.617 5.383 24 12 24C18.617 24 24 18.617 24 12C24 5.383 18.617 0 12 0ZM11.909 15.419C11.522 15.806 11.013 15.999 10.502 15.999C9.991 15.999 9.477 15.804 9.086 15.414L6.304 12.718L7.697 11.281L10.49 13.988L16.299 8.287L17.703 9.712L11.909 15.419Z" fill="#2B68DD" />
                        </g>
                        <defs>
                            <clipPath id="clip0_661_877">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className='text-[16px] font-[400]'>Payment Verified</p>
                </div>
                <div className='inline-flex  items-center gap-3'>
                    <HiOutlineLocationMarker  className='h-6 w-6'></HiOutlineLocationMarker>
                    <p className='text-[16px] font-[400] '>USA</p>
                </div>
            </div>
            </div>
            <div className='line lg:pt-16 pt-10'></div>

            <div className='mt-10 lg:mt-16'>
            
            <div className="flex justify-between mt-4 lg:mt-16">
                <p className='lg:text-[20px] text-[18px] font-[500] '>2D Illustration</p>
                <HiOutlineHeart className="h-[30px] w-[30px]" />
            </div>

            <p className='lg:text-[16px] text-[14px] font-[400] my-5'>Fixed price - Intermediate - Budget $5 - 2 hours ago</p>
            <p className='lg:text-[16px] text-[14px] font-[400] text-justify lg:mb-10  mb-5'>Lorem ipsum dolor sit amet consectetur. Odio ornare amet adipiscing proin ut cras varius. Erat phasellus venenatis integer senectus feugiat pharetra arcu tristique viverra. Mi pharetra at ullamcorper sit tempus nulla sagittis. Diam ultrices dictumst vitae sit diam nec viverra. Sapien auctor etiam morbi quam adipiscing in et non. </p>

            <div className='grid md:grid-cols-7 lg:grid-cols-9 gap-[5px]'>
                <p className='text-[12px] font-[400] tags'>Adobe Illustrator</p>
                <p className='text-[12px] font-[400]  tags'>Adobe photoshop</p>
                <p className='text-[12px] font-[400]  tags'>Adobe indesign</p>
                <p className='text-[12px] font-[400]  tags'>Graphic design</p>
                <p className='text-[12px] font-[400] tags'>illustrator</p>
            </div>
            <div className="inline-flex gap-20 lg:mt-10 mt-8">
                <div className='inline-flex gap-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_661_877)">
                            <path d="M12 0C5.383 0 0 5.383 0 12C0 18.617 5.383 24 12 24C18.617 24 24 18.617 24 12C24 5.383 18.617 0 12 0ZM11.909 15.419C11.522 15.806 11.013 15.999 10.502 15.999C9.991 15.999 9.477 15.804 9.086 15.414L6.304 12.718L7.697 11.281L10.49 13.988L16.299 8.287L17.703 9.712L11.909 15.419Z" fill="#2B68DD" />
                        </g>
                        <defs>
                            <clipPath id="clip0_661_877">
                                <rect width="24" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <p className='text-[16px] font-[400]'>Payment Verified</p>
                </div>
                <div className='inline-flex  items-center gap-3'>
                    <HiOutlineLocationMarker  className='h-6 w-6'></HiOutlineLocationMarker>
                    <p className='text-[16px] font-[400] '>USA</p>
                </div>
            </div>
            </div>
        </div>
    )
};

export default JobPost;