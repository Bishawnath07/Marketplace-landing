import Creativity from "./Creativity/Creativity.";
import Illustrations from "./Illustrations/Illustrations";
import JobPost from "./Jobpost/JobPost";
import MotionGraphics from "./MotionGraphics/MotionGraphics";
import MyJobs from "./MyJobs/MyJobs";
import PopularPhoto from "./PopularPhoto/PopularPhoto";
import ProgressBar from "./ProgressBar/ProgressBar";
import Themes from "./Themes/Themes";

const FreelancherHome = () => {
    return (
        <div className="mx-5 lg:mx-0">
            <ProgressBar></ProgressBar>
            <Creativity></Creativity>
            <JobPost></JobPost>
            <MyJobs></MyJobs>
            <Illustrations></Illustrations>
            <PopularPhoto></PopularPhoto>
            <MotionGraphics></MotionGraphics>
            <Themes></Themes>
        </div>
    );
};

export default FreelancherHome;