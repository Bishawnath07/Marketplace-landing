import img from './image/zoom-communications-logo.png'
import img2 from './image/bank-mandiri.png'
import img3 from './image/Group 6.png'
import img4 from './image/Group 39.png'
import img5 from './image/saputo-logo.png'
import  './brands.css'

const Brands = () => {
    return (
        <div  className="container mx-auto  flex justify-between items-center p-5 lg:mt-16 mt-10 brands">
            <p className='trusted'>Trusted By Brands & Renowned Company</p>
            <img src={img} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
        </div>
    );
};

export default Brands;