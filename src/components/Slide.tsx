import Carousel from "react-bootstrap/Carousel";
import Img1 from "../assets/Img1.jfif";
import img2 from "../assets/img2.jfif";
import img3 from "../assets/img3.jfif";

const Slide = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={Img1} className="object-cover h-screen w-full" alt="" />
          <div>
            <div className="absolute top-0 w-full left-0">
              <div className="max-w-[450px] w-full h-full md:pl-10 pl-[77px] m-auto justify-center items-center lg:items-start flex-col">
                <h3 className="font-title1 text-white md:pt-20 pt-10 font-bold md:tracking-[1.6rem] tracking-[1.3rem] mb-4">
                  Mercury
                </h3>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} className="object-cover h-screen w-full" alt="" />
          <div>
            <div className="absolute top-0 w-full left-0">
              <div className="max-w-[360px] w-full h-full md:pl-10 pl-24 m-auto justify-center items-center lg:items-start flex-col">
                <h3 className="font-title1 text-white md:pt-20 pt-10 font-bold tracking-[1.6rem] md:mb-4 mb-[13px]">
                  Venus
                </h3>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} className="object-cover h-screen w-full" alt="" />
          <div>
            <div className="absolute top-0 w-full left-0">
              <div className="max-w-[360px] w-full h-full md:pl-10 pl-24 m-auto justify-center items-center lg:items-start flex-col">
                <h3 className="font-title1 text-white md:pt-20 pt-10 font-bold tracking-[1.6rem] md:mb-4 mb-[13px]">
                  Venus
                </h3>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slide;
