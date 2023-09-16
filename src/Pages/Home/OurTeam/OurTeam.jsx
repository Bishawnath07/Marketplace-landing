import './ourteam.css'
import img from './image/Rectangle 949.png'
import img2 from './image/Rectangle2.png'
import img3 from './image/Rectangle3.png'
import img4 from './image/Rectangle4.png'


const OurTeam = () => {
    return (
        <div  className="container mx-auto lg:mt-20 mt-10">
            <div className="flex flex-col items-center">
                <h1 className="team-title">Our Team</h1>
                <p className="team-description">vAmet lectus ornare sapien fermentum sed. Sed lobortis molestie urna vel ante viverra tempor tristique.</p>
            </div>
            <div  className="grid lg:grid-cols-4 gap-5 mt-10">
                    <div className='card'>
                        <img src={img} alt="" />
                        <div className='card-body text-center'>
                            <h1 className='name'>Selena Ahmed</h1>
                            <p className='details'>Founder</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={img2} alt="" />
                        <div className='card-body text-center'>
                            <h1 className='name'>Willim Tylor</h1>
                            <p className='details'>Co-Founder</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={img3} alt="" />
                        <div className='card-body text-center'>
                            <h1 className='name'>Goergina Willison</h1>
                            <p className='details'>Business Manager</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={img4} alt="" />
                        <div className='card-body text-center'>
                            <h1 className='name'>Selena Ahmed</h1>
                            <p className='details'>Marketing Manager</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default OurTeam;