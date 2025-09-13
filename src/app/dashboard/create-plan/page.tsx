import DietPlanCard from "@/components/cards/DietPlanCard";
import WorkoutPlanCard from "@/components/cards/WorkoutPlanCard";

function CreatePlanPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4">
        <DietPlanCard />
        <WorkoutPlanCard />
      </div>
    </div>
  );
}

export default CreatePlanPage;
