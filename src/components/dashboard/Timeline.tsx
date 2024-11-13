import { Activity } from "lucide-react";

const activities = [
  {
    type: "Running",
    duration: "45 min",
    distance: "5.2 km",
    time: "2 hours ago",
  },
  {
    type: "Cycling",
    duration: "1h 15min",
    distance: "20.5 km",
    time: "5 hours ago",
  },
  {
    type: "Walking",
    duration: "30 min",
    distance: "2.1 km",
    time: "Yesterday",
  },
];

export const Timeline = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Recent Activities</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="p-3 rounded-full bg-primary-500">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium">{activity.type}</p>
              <div className="flex space-x-4 text-sm text-gray-400">
                <span>{activity.duration}</span>
                <span>{activity.distance}</span>
              </div>
            </div>
            <span className="text-sm text-gray-400">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};