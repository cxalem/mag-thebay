import Image, { StaticImageData } from "next/image";

type Props = {
  children: React.ReactNode;
  src: StaticImageData;
  alt: string;
};

const InfoSection: React.FC<Props> = ({ children, src, alt }) => {
  return (
    <div className="grid grid-cols-1 my-10 md:grid-cols-2 items-center justify-items-center md:my-32 md:px-28 ">
      <Image 
        src={src}
        width={283}
        height={365}
        alt={alt}
      />
      <div className="flex flex-col gap-4 items-center mt-4 md:mt-0 md:items-start">
        {children}
      </div>
    </div>
  );
};

export default InfoSection;
