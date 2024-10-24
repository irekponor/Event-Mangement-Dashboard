import Carousel from "react-bootstrap/Carousel";
import Img1 from "../assets/Img1.jfif";
import img2 from "../assets/img2.jfif";
import img from "../assets/img.jfif";

const Slide = () => {
  return (
    <div className="absolute xl:top-32 top-96 xl:pl-96">
      <div className="xl:pl-24 xl:pt-0 pt-96">
        <Carousel className="xl:max-w-[50%] max-w-[90%] xl:top-36 top-96 xl:left-96 left-4">
          <Carousel.Item>
            <img
              src={Img1}
              className="object-cover rounded-lg w-full h-full"
              alt=""
            />
            <div>
              <div className="absolute xl:top-[170px] top-[110px] w-full">
                <div className="xl:max-w-[400px] pl-1 justify-center items-center flex-col">
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
              <div className="absolute xl:top-[170px] top-[110px] w-full">
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
              <div className="absolute top-[90px] w-full">
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
