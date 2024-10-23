import Carousel from "react-bootstrap/Carousel";
import Img1 from "../assets/Img1.jfif";
import img2 from "../assets/img2.jfif";
import img from "../assets/img.jfif";

const Slide = () => {
  return (
    <div className="absolute top-32 pl-96">
      <div className="pl-24">
        <Carousel className="max-w-[50%] top-36 left-96">
          <Carousel.Item>
            <img
              src={Img1}
              className="object-cover rounded-lg w-full h-full"
              alt=""
            />
            <div>
              <div className="absolute top-[170px] w-full">
                <div className="max-w-[400px] pl-1 justify-center items-center flex-col">
                  <p className="pl-4 text-white font-medium font-title text-[15px] pt-10 mb-1">
                    Latest News & Updates
                  </p>
                </div>
                <p className="pl-4 text-white font-light font-title text-[13px]">
                  Turpis interdum nunc varius ornare dignissim pretium. Massa
                  ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                  Fringilla purus, erat fringilla tincidunt quisque non.
                  Pellentesque in ut tellus.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img2}
              className="object-cover rounded-lg w-full h-full"
              alt=""
            />
            <div>
              <div className="absolute top-[170px] w-full">
                <div className="max-w-[400px] pl-1 justify-center items-center flex-col">
                  <p className="pl-4 text-white font-medium font-title text-[15px] pt-10 mb-1">
                    Latest News & Updates
                  </p>
                </div>
                <p className="pl-4 text-white font-light font-title text-[13px]">
                  Turpis interdum nunc varius ornare dignissim pretium. Massa
                  ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                  Fringilla purus, erat fringilla tincidunt quisque non.
                  Pellentesque in ut tellus.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img}
              className="object-cover rounded-lg w-full h-full"
              alt=""
            />
            <div>
              <div className="absolute top-[130px] w-full">
                <div className="max-w-[400px] pl-1 justify-center items-center flex-col">
                  <p className="pl-4 text-white font-medium font-title text-[15px] pt-10 mb-1">
                    Latest News & Updates
                  </p>
                </div>
                <p className="pl-4 text-white font-light font-title text-[13px]">
                  Turpis interdum nunc varius ornare dignissim pretium. Massa
                  ornare quis aliquet sed vitae. Sed velit nisi, fermentum erat.
                  Fringilla purus, erat fringilla tincidunt quisque non.
                  Pellentesque in ut tellus.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Slide;
