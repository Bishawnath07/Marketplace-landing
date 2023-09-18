import Creativity from "./Creativity/Creativity.";
import Illustrations from "./Illustrations/Illustrations";
import MotionGraphics from "./MotionGraphics/MotionGraphics";
import PopularPhoto from "./PopularPhoto/PopularPhoto";
import ProgressBar from "./ProgressBar/ProgressBar";
import Themes from "./Themes/Themes";

const FreelancherHome = () => {
    return (
        <div>
            <ProgressBar></ProgressBar>
            <Creativity></Creativity>
            <Illustrations></Illustrations>
            <PopularPhoto></PopularPhoto>
            <MotionGraphics></MotionGraphics>
            <Themes></Themes>
        </div>
    );
};

export default FreelancherHome;