import { ProgressRing } from "@/components/ui/progress-ring";

export const ActivityRings = () => {
  return (
    <div className="relative w-[280px] h-[280px]">
      <div className="absolute inset-0">
        <ProgressRing progress={75} size={280} color="#8B5CF6" />
      </div>
      <div className="absolute inset-[30px]">
        <ProgressRing progress={85} size={220} color="#10B981" />
      </div>
      <div className="absolute inset-[60px]">
        <ProgressRing progress={60} size={160} color="#F43F5E" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl font-bold text-primary-500">8,459</p>
          <p className="text-sm text-gray-500">steps today</p>
        </div>
      </div>
    </div>
  );
};