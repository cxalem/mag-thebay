import Image from "next/image";
import { useState, useEffect } from "react";
import imgData from "../../data/ImagesData.json";
import { useGetItems } from "../../hooks/useGetItems";
import type { ImagesData } from "../../../types";

type Props = {};

export const Carousel: React.FC<Props> = ({}) => {
  const images = useGetItems(imgData);

  const [activeImage, setActiveImage] = useState<any>(images[0]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter < images.length) {
        setCounter((prevCounter) => prevCounter + 1);
      } else if (counter === images.length) {
        setCounter(1);
      }
      const nextImage = images[counter % images.length];
      setActiveImage(nextImage);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeImage]);

  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const {
      dataset: { src, alt, id },
    } = e.currentTarget;
    setActiveImage({ src, alt });
    setCounter(Number(id));
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center w-128 overflow-hidden">
      <div className="flex">
        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          width="400"
          height="400"
          objectFit="cover"
          className="rounded-3xl"
        />
      </div>
      <div className="flex justify-center">
        {images.map((image: ImagesData) => {
          const { src, alt, id } = image;
          return (
            <div key={id}>
              {src === activeImage.src ? (
                <div
                  className={`w-2 h-2 m-1 bg-black rounded-full opacity-60 `}
                ></div>
              ) : (
                <div
                  className={`w-2 h-2 m-1 cursor-pointer bg-black rounded-full opacity-20 `}
                  data-src={`${src}`}
                  data-alt={`${alt}`}
                  data-id={`${id}`}
                  onClick={handleClick}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
