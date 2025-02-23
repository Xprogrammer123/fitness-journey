
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Dumbbell, Timer, Flame, Plus } from "lucide-react";

const workoutData = [
  { name: "Strength", value: 45, color: "#8B5CF6" },
  { name: "Cardio", value: 30, color: "#10B981" },
  { name: "Flexibility", value: 25, color: "#F43F5E" },
];

const recentWorkouts = [
  {
    name: "Full Body Workout",
    duration: "45 min",
    calories: "320",
    type: "Strength",
    date: "Today",
  },
  {
    name: "HIIT Cardio",
    duration: "30 min",
    calories: "280",
    type: "Cardio",
    date: "Yesterday",
  },
  {
    name: "Yoga Flow",
    duration: "60 min",
    calories: "200",
    type: "Flexibility",
    date: "2 days ago",
  },
];

const Workouts = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Workouts</h1>
        <Button className="bg-primary-500 hover:bg-primary-600">
          <Plus className="w-4 h-4 mr-2" />
          New Workout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Workout Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={workoutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {workoutData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              {workoutData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-300">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              className="text-white bg-transparent border-white/10"
            />
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Recent Workouts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentWorkouts.map((workout, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg bg-white/5"
                >
                  <div className="p-2 rounded-full bg-primary-500">
                    <Dumbbell className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-white">
                      {workout.name}
                    </h3>
                    <div className="flex gap-3 mt-1 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Timer className="w-3 h-3" />
                        {workout.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame className="w-3 h-3" />
                        {workout.calories} cal
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{workout.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Workouts;
