import UpgradeDietPlanCard from "@/components/cards/UpgradeDietPlanCard";
import UpgradeWorkoutPlanCard from "@/components/cards/UpgradeWorkoutPlanCard";
import BillingHistory from "@/components/dashboard/BillingHistory";
import PersonalInformation from "@/components/dashboard/PersonalInformation";
import React from "react";

function ProfilePage() {
  return (
    <section className="space-y-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Personal Information */}
        <div className="col-span-1 md:col-span-2">
          <PersonalInformation />
        </div>

        {/* Upgrade Diet Plan Card */}
        <UpgradeDietPlanCard className="col-span-1 py-4 " />

        {/* Upgrade Workout Plan Card */}
        <UpgradeWorkoutPlanCard className="col-span-1 py-4" />
      </div>
      <BillingHistory />
    </section>
  );
}

export default ProfilePage;
