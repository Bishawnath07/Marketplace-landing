import Banner from './Banner/Banner';
import BestPart from './BestPart/BestPart';
import Brands from './Brands/Brands';
import Category from './Category/Category';
import ForClient from './ForClient/ForClient';
import ForTalent from './ForTalent/ForTalent';
import GreatWork from './GreatWork/GreatWork';
import OurClients from './OurClients/OurClients';
import OurTeam from './OurTeam/OurTeam';

const Home = () => {
    return (
        <div className='mx-5 md:mx-auto'>
            <Banner></Banner>
             <Brands></Brands>  
             <Category></Category>
            <BestPart></BestPart>
            <ForClient></ForClient>
            <ForTalent></ForTalent>
            <OurTeam></OurTeam> 
            <OurClients></OurClients> 
            <GreatWork></GreatWork>
        </div>
    );
};

export default Home;