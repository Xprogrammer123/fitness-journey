import { Heart, Flame, Timer } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

const StatItem = ({ icon, label, value, color }: StatItemProps) => (
  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 backdrop-blur-sm">
    <div className={`p-3 rounded-full ${color}`}>{icon}</div>
    <div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  </div>
);

export const StatsCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatItem
        icon={<Heart className="w-6 h-6 text-white" />}
        label="Avg BPM"
        value="72"
        color="bg-primary-500"
      />
      <StatItem
        icon={<Flame className="w-6 h-6 text-white" />}
        label="Calories"
        value="1,248"
        color="bg-accent-500"
      />
      <StatItem
        icon={<Timer className="w-6 h-6 text-white" />}
        label="Active Time"
        value="5h 23m"
        color="bg-secondary-500"
      />
    </div>
  );
};