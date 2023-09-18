import { useEffect, useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";

const MotionGraphics = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch("../../../../public/motiongraphics.json")
        .then((response) => response.json())
        .then((data) => {
          const slicedData = data.slice(0, 6);
          setItems(slicedData);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
      return (
          <div className="container mx-auto lg:mt-20 mt-10">
              <div className="flex justify-between">
                      <h1 className="illustration-title">Popular Illustrations</h1>
                      <button  className="illustration-btn">See More</button>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 lg:mt-10">
              {items.map((item, index) => (
          <div key={index} className="Card relative">
            <div  className="absolute right-3 top-3 bg-slate-300 rounded-full p-1"><HiOutlineHeart className="h-[30px] w-[30px]"></HiOutlineHeart></div>
            <img src={item.url} alt="" />
          </div>
        ))}
              
              </div>
              
          </div>
    );
};

export default MotionGraphics;