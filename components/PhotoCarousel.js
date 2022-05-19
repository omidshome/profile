import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import Image from "next/image";

const PhotoCarousel = () => {
  return (
    <div className="mainContainer">
      <Carousel
        className="slides"
        autoPlay
        infiniteLoop
        interval={6000}
        stopOnHover
        transitionTime={1000}
        showThumbs={false}
        width={"90%"}
      >
        <div>
          <Image src="/1.jpg" layout="fill" />
          <p className="legend">قدم زدن در طبیعت رو واقعا دوست دارم</p>
        </div>
        <div>
          <img src="/2.jpg" />
          <p className="legend">من عاشق یادگیری زبان هستم</p>
        </div>
        <div>
          <Image src="/3.jpg" layout="fill" />
          <p className="legend">گل ها رو خیلی دوست دارم </p>
        </div>
      </Carousel>
    </div>
  );
};

export default PhotoCarousel;
