import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { TNutritionStat } from "@/app/dashboard/overview/page";

function NutritionCard({ stat }: { stat: TNutritionStat }) {
  return (
    <Card className="p-4 border-0 shadow-none">
      <div className="flex items-center space-x-3">
        <div
          className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center text-white text-lg`}
        >
          <Image src={stat.icon} alt={stat.name} width={40} height={40} />
        </div>
        <div>
          <p className="text-sm text-gray-600 font-medium">{stat.name}</p>
          <p className="text-xl font-bold text-gray-400">{stat.value}</p>
        </div>
      </div>
    </Card>
  );
}

export default NutritionCard;
