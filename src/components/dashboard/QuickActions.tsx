import { Plus } from "lucide-react";

const actions = [
  { label: "Log Activity", color: "bg-primary-500" },
  { label: "Add Weight", color: "bg-secondary-500" },
  { label: "Track Water", color: "bg-accent-500" },
];

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {actions.map((action, index) => (
        <button
          key={index}
          className={`${action.color} p-4 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity animate-fade-up`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <Plus className="w-5 h-5 text-white" />
          <span className="text-white font-medium">{action.label}</span>
        </button>
      ))}
    </div>
  );
};