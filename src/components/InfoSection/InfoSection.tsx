import Image from "next/image";
import Button from "../Button/Button";
import aboutUsImage from "../../public/images/about-us.jpg";

type Props = {};

const InfoSection: React.FC<Props> = ({}) => {
  return (
    <div className="grid grid-cols-1 my-10 md:grid-cols-2 items-center justify-items-center md:my-32 md:px-28 ">
      <Image 
        src={aboutUsImage}
        width={283}
        height={365}
        alt="About us"
      />
      <div className="flex flex-col gap-4 items-center md:items-start">
        <h3 className="text-6xl text-center md:text-left font-extrabold text-primary">Quiénes somos y qué hacemos</h3>
        <p className="text-primary text-center md:text-left opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis laoreet
          mattis fermentum aliquam nunc parturient.
        </p>
        <Button type="primary" href="/">
          ¡Quiero saber más!
        </Button>
      </div>
    </div>
  );
};

export default InfoSection;
