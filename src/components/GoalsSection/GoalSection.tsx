import GoalCard from "./GoalCard";
import data from "../../data/GoalsData.json";
import type { Goal } from "../../../types"
import { useGetItems } from "../../hooks/useGetItems";

type Props = {};

const GoalsSection: React.FC<Props> = ({}) => {
  const goals = useGetItems(data);

  return (
    <div className="grid grid-cols-1 my-10 gap-10 md:grid-cols-2 lg:grid-cols-3 md:my-32">
      {goals.map((goal: Goal) => {
        return <GoalCard key={goal.id} {...goal} />;
      })}
    </div>
  );
};

export default GoalsSection;
