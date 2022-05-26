import GoalCard from "./GoalCard";
import data from "../../data/GoalsData.json";

type Props = {};

type Goal = {
  id: string;
  title: string;
  description: string;
}

type Data = {
  title: string
  description: string
}

const getItems = (data: Data[]) => {
  return [
    ...Object.entries(data).map(([id, key]) => {
      console.log(key)
      return {
        id,
        title: key.title,
        description: key.description,
      };
    }),
  ];
};

const GoalsSection: React.FC<Props> = ({}) => {
  const goals = getItems(data);

  return (
    <div className="grid grid-cols-1 my-10 gap-10 md:grid-cols-2 lg:grid-cols-3 md:my-32">
      {goals.map((goal) => {
        return <GoalCard key={goal.id} {...goal} />
      })}
    </div>
  );
};

export default GoalsSection;
