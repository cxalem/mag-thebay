import React from "react";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

const UnderConstruction = () => {
  const animation = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/animations/under_construction.json"),
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-white text-center text-4xl font-bold">¡Estamos en construcción!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center justify-items-center items-center ml-0 md:ml-10 ">
        <div>
          <Image
            src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F44724d6f-eca8-4d00-8366-dfd1d8e45e15%2Flogo-mag-thebay.png?table=block&id=7d8ad874-bae1-443b-b07e-2d91fcc2f0ec&spaceId=f4b39258-8c2f-46b2-bf6e-5ed2bbe98d93&width=2000&userId=b5d9e56c-d386-48d8-bfda-deb6eaf84065&cache=v2"
            alt="Mag-Thebay"
            width={308}
            height={231}
          />
        </div>
        <div ref={animation} className={`max-w-lg ${styles.animation}`}></div>
      </div>
      <button className="text-white border-2 py-3 px-10 rounded-md shadow-md hover:shadow-xl delay-75 duration-100">Contáctanos</button>
    </div>
  );
};

export default UnderConstruction;
