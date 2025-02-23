
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUp, ArrowDown } from "lucide-react";

const weightData = [
  { date: "Jan", weight: 75 },
  { date: "Feb", weight: 74.5 },
  { date: "Mar", weight: 73.8 },
  { date: "Apr", weight: 73.2 },
  { date: "May", weight: 72.7 },
  { date: "Jun", weight: 72.1 },
];

const workoutData = [
  { month: "Jan", strength: 12, cardio: 8, flexibility: 6 },
  { month: "Feb", strength: 15, cardio: 10, flexibility: 8 },
  { month: "Mar", strength: 13, cardio: 12, flexibility: 7 },
  { month: "Apr", strength: 18, cardio: 14, flexibility: 9 },
  { month: "May", strength: 16, cardio: 15, flexibility: 10 },
  { month: "Jun", strength: 20, cardio: 16, flexibility: 12 },
];

const stats = [
  {
    title: "Weight Change",
    value: "-2.9 kg",
    trend: "down",
    period: "Last 6 months",
  },
  {
    title: "Workouts Completed",
    value: "48",
    trend: "up",
    period: "Last 6 months",
  },
  {
    title: "Avg. Workout Duration",
    value: "52 min",
    trend: "up",
    period: "Last 6 months",
  },
];

const Progress = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Progress</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-white/5 border-white/10">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-white">
                {stat.title}
              </CardTitle>
              {stat.trend === "up" ? (
                <ArrowUp className="h-4 w-4 text-secondary-500" />
              ) : (
                <ArrowDown className="h-4 w-4 text-accent-500" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <p className="text-xs text-gray-400 mt-1">{stat.period}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="weight" className="space-y-6">
        <TabsList className="bg-white/5 border-white/10">
          <TabsTrigger value="weight" className="text-white data-[state=active]:bg-primary-500">
            Weight Progress
          </TabsTrigger>
          <TabsTrigger value="workouts" className="text-white data-[state=active]:bg-primary-500">
            Workout Progress
          </TabsTrigger>
        </TabsList>
        <TabsContent value="weight">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Weight Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weightData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="date" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "none",
                        borderRadius: "8px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="weight"
                      stroke="#8B5CF6"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="workouts">
          <Card className="bg-white/5 border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Workout Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={workoutData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "none",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="strength" fill="#8B5CF6" />
                    <Bar dataKey="cardio" fill="#10B981" />
                    <Bar dataKey="flexibility" fill="#F43F5E" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Progress;
