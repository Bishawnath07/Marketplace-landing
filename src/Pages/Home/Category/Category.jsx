import './category.css'
import camera from './images/Camera.png'
import Illustration from './images/PenNib.png'
import theme from './images/Browser.png'
import motion from './images/VideoCamera.png'

const Category = () => {
    return (
        <div>
          <div className='flex flex-col items-center lg:mt-20 mt-16'>
          <h1 className="title">Browse Talent By Category</h1>
            <p className='description'>Lorem ipsum dolor sit amet consectetur. Amet lectus ornare sapien fermentum sed.</p>
          </div>
          <div className='grid lg:grid-cols-4 grid-cols-1 lg:mt-10 mt-6'>
            <div className='card m-5  p-5'>
                <div className='card-img'>
                    <img src={camera} alt="" />
                </div>
                <h3 className='card-title my-4'>Photography</h3>
                <p className='text-justify card-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className='card m-5  p-5'>
                <div className='card-img'>
                    <img src={Illustration} alt="" />
                </div>
                <h3 className='card-title my-4'>Illustration</h3>
                <p className='text-justify card-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className='card m-5  p-5'>
                <div className='card-img'>
                    <img src={theme} alt="" />
                </div>
                <h3 className='card-title my-4'>Theme</h3>
                <p className='text-justify card-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            <div className='card m-5  p-5'>
                <div className='card-img'>
                    <img src={motion} alt="" />
                </div>
                <h3 className='card-title my-4'>Motion Graphics</h3>
                <p className='text-justify card-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </div>
            

          </div>
        </div>
    );
};

export default Category;