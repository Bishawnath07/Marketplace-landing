import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './ourclient.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";


const OurClients = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        const load = async () => {
            const res = await fetch('review.json');
            const data = await res.json();
            setReview(data);
        };
        load();
    }, [review]);
    return (
        <div className="container mx-auto lg:mt-20  mt-16">
        <div className="flex  flex-col items-center">
            <h1 className="client-title">Our Clients</h1>
            <p className="client-description">Amet lectus ornare sapien fermentum sed. Sed lobortis molestie urna vel ante viverra tempor tristique.</p>

        </div>
            <div className="flex items-center justify-center mt-10 mx-16">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {review.map((r) => {
                        const { name, details, photo, title,  _id } = r;
                        return (
                            <SwiperSlide key={_id}>
                                <div className=" border border-none  p-16 rounded-lg shadow-2xl text-black mx-auto  slider">
                                    <div className=" items-center gap-5">
                                        <p className="text-lg  my-4">{details}</p>
                                        <div className="lg:flex justify-between">
                                            <div className="lg:flex">
                                                <div className="w-20 rounded-full">
                                                    <img src={photo} alt="" />
                                                </div>
                                                <div>
                                                    <h1 className="text-left font-bold text-2xl">
                                                        {name}
                                                    </h1>
                                                    <p>{title}</p>

                                                </div>
                                            </div>
                                           
                                        </div>

                                    </div>

                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default OurClients;