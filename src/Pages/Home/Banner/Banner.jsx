import img from '../../../assets/banner/content.png'
import './baaner.css'

const Banner = () => {
    return (
        <div className="container mx-auto md:flex justify-between items-center">
            <div className='lg:w-1/2 left-side lg:mt-28'>
                <h1 className='banner-title'>Find Your Service Right Away</h1>
                <p className='text-justify banner-description'>Lorem ipsum dolor sit amet consectetur. Amet lectus ornare sapien fermentum sed. Sed lobortis molestie urna vel ante viverra tempor tristique.</p>
                <button className='get-start-btn'>Get Started</button>
            </div>
            <div className='right-side lg:mt-10 mt-10'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;