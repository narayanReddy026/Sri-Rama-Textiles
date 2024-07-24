import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react";

const IMAGES = [
  "001.png",
  "005.png",
  "006.png",
  "007.png",
  "008.png",
  "009.png",
];

export default function ImageSlider() {
  const [imageIndex, setImageIndex] = useState(0);
  function showNextImage() {
    setImageIndex((index) => {
      if (index === IMAGES.length - 1) return 0;
      return index + 1;
    });
  }
  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return IMAGES.length - 1;
      return index - 1;
    });
  }
  return (
    <div className="relative w-full h-full  ">
      <div className="w-full h-full flex overflow-hidden ">
        {IMAGES.map((url) => (
          <img
            key={url}
            src={url}
            alt="slider images"
            className="block w-full h-full object-cover flex-shrink-0 flex-grow-0 duration-300 ease-in-out transform"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      <button
        onClick={showPrevImage}
        aria-label="view previous image"
        className="absolute top-1/2 left-4 transform translate-y-1/2 p-4 cursor-pointer text-white bg-black rounded-full hover:bg-orange-500 focus-visible:visible transition opacity-10 hover:opacity-100"
      >
        <ArrowBigLeft size={24} />
      </button>
      <button
        onClick={showNextImage}
        aria-label="view next image"
        className="absolute top-1/2 right-4 transform translate-y-1/2 p-4 cursor-pointer text-white bg-black rounded-full hover:bg-orange-500 focus-visible:visible transition opacity-10 hover:opacity-100 "
      >
        <ArrowBigRight size={24} />
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-0 opacity-40 hover:opacity-100  ">
        {IMAGES.map((_, index) => (
          <button
            className=" cursor-pointer min-w-0 min-h-0 hover:scale-110 ease-in-out transition duration-100 focus-visible:visible"
            key={index}
            aria-label={`view image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot className="fill-orange-500" />
            ) : (
              <Circle className="fill-black" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
