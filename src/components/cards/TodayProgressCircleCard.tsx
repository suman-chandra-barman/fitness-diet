function TodayProgressCircleCard() {
  return (
    <div>
      <div className="flex justify-center mb-2">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="rgb(229 231 235)"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="rgb(249 115 22)"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${0 * 3.14159} ${100 * 3.14159}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold">
              00<span className="text-lg">%</span>
            </span>
          </div>
        </div>
      </div>

      {/* Start Plan */}
      <div className="text-center space-y-1">
        <h3 className="text-lg md:text-xl font-bold text-purple-600">
          Start Your First Plan
        </h3>
        <p className=" text-gray-600">Create a plan for see your progress</p>
      </div>
    </div>
  );
}

export default TodayProgressCircleCard;
