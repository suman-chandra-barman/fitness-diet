"use client";

import UpgradeDietPlanCard from "@/components/cards/UpgradeDietPlanCard";
import UpgradeWorkoutPlanCard from "@/components/cards/UpgradeWorkoutPlanCard";
import BillingHistory from "@/components/dashboard/BillingHistory";

export default function UpgradePage() {
  return (
    <div className="min-h-screen py-12">
        <div className="flex items-center gap-6 mb-12">
          <UpgradeDietPlanCard className="lg:min-w-sm" />
          <UpgradeWorkoutPlanCard className="lg:min-w-sm" />
        </div>
        <BillingHistory />
    </div>
  );
}
