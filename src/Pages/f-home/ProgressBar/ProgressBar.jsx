import './progrressbar.css'

const ProgressBar = () => {
    return (
        <div className="container mx-auto lg:mt-20 mt-16">
            <h1 className="progress-title">Complete your profile</h1>
            <div className="relative">
                <progress
                    className="progress progress-success text-white bg-white w-2/3 lg:w-4/5"
                    value="50"
                    max="100"
                ></progress>
                <span className="absolute  lg:top-2 lg:right-[15rem] lg:w-full text-black text-right">
                    50%
                </span>
            <button className='edit-btn'>Edit profile</button>
            </div>
        </div>
    );
};

export default ProgressBar;