import Image from "next/image";
import goalPlaceholder from "../../public/images/icon-placeholder.svg";

type Props = {
  title: string;
  description: string;
};

const GoalCard: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="flex cursor-pointer ease-in-out duration-300 flex-col bg-slate-300 bg-opacity-20 items-center gap-2 text-center py-12 px-6 rounded-xl max-w-md hover:bg-white hover:shadow-2xl md:text-left md:py-6 md:gap-4 md:flex-row">
      <div className="flex justify-center md:w-13 md:h-16 ">
        <Image src={goalPlaceholder} width={54} height={60} alt="Mag-Thebay" />
      </div>
      <div className="md:max-w-xs">
        <h4 className="font-bold text-primary text-md md:text-lg">{title}</h4>
        <p className="text-md text-primary opacity-70 md:text-md">{description}</p>
      </div>
    </div>
  );
};

export default GoalCard;
