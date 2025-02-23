
import { ActivityRings } from "@/components/dashboard/ActivityRings";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ActivityChart } from "@/components/dashboard/ActivityChart";
import { Timeline } from "@/components/dashboard/Timeline";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { useAuth } from "@/context/AuthContext";

const Index = () => {
  const { user } = useAuth();
  
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-auto">
            <h1 className="text-4xl font-bold mb-2">Welcome back, {user}!</h1>
            <p className="text-gray-400">Here's your fitness summary for today</p>
          </div>
          <ActivityRings />
        </div>

        <StatsCard />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ActivityChart />
          <Timeline />
        </div>

        <QuickActions />
      </div>
    </div>
  );
};

export default Index;
