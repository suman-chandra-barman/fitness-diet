import DietPlanCard from "@/components/cards/DietPlanCard";
import WorkoutPlanCard from "@/components/cards/WorkoutPlanCard";

function CreatePlanPage() {
  return (
    <div className=" min-h-[80vh] flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <DietPlanCard className="lg:min-w-sm"/>
        <WorkoutPlanCard className="lg:min-w-sm"/>
      </div>
    </div>
  );
}

export default CreatePlanPage;
