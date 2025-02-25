
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart, CartesianGrid, Line, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { PlusCircle, Clock, Calendar } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Sample data for workout tracking
const workoutHistory = [
  { id: 1, date: "2023-07-15", workout: "Push Day", duration: 65, sets: 18, weight: 4350 },
  { id: 2, date: "2023-07-13", workout: "Pull Day", duration: 70, sets: 16, weight: 3980 },
  { id: 3, date: "2023-07-11", workout: "Leg Day", duration: 55, sets: 15, weight: 5240 },
  { id: 4, date: "2023-07-08", workout: "Push Day", duration: 62, sets: 17, weight: 4180 },
  { id: 5, date: "2023-07-06", workout: "Pull Day", duration: 68, sets: 16, weight: 3920 },
  { id: 6, date: "2023-07-04", workout: "Leg Day", duration: 60, sets: 14, weight: 5100 },
];

// Sample data for recent activities
const recentActivities = [
  { id: 1, time: "10:30 AM", type: "Workout", name: "Morning Cardio", duration: 45, calories: 320 },
  { id: 2, time: "Yesterday", type: "Workout", name: "Upper Body", duration: 60, calories: 450 },
  { id: 3, time: "2 days ago", type: "Rest", name: "Recovery Day", duration: 0, calories: 0 },
  { id: 4, time: "3 days ago", type: "Workout", name: "Lower Body", duration: 75, calories: 580 },
];

// Sample data for weekly activity
const weeklyData = [
  { day: "Mon", duration: 45, calories: 320 },
  { day: "Tue", duration: 60, calories: 450 },
  { day: "Wed", duration: 0, calories: 0 },
  { day: "Thu", duration: 75, calories: 580 },
  { day: "Fri", duration: 30, calories: 220 },
  { day: "Sat", duration: 90, calories: 650 },
  { day: "Sun", duration: 0, calories: 0 },
];

// Sample data for monthly stats
const monthlyData = [
  { name: "Week 1", workouts: 5, duration: 300, calories: 2300 },
  { name: "Week 2", workouts: 4, duration: 240, calories: 1900 },
  { name: "Week 3", workouts: 6, duration: 360, calories: 2700 },
  { name: "Week 4", workouts: 3, duration: 180, calories: 1500 },
];

export default function Tracking() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Workout Tracking</h1>
          <p className="text-muted-foreground">Track your workout progress and activity history</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Log Workout
          </Button>
        </div>
      </div>

      {/* Activity Summary */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <Card className="md:col-span-8 bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Weekly Activity</CardTitle>
            <CardDescription>Your workout duration and calories burned this week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={weeklyData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="day" stroke="#888" />
                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                <Tooltip contentStyle={{ backgroundColor: '#272727', borderColor: '#444' }} />
                <Legend />
                <Bar yAxisId="left" dataKey="duration" name="Duration (min)" fill="#8884d8" radius={[4, 4, 0, 0]} />
                <Bar yAxisId="right" dataKey="calories" name="Calories" fill="#82ca9d" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="md:col-span-4 bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Monthly Summary</CardTitle>
            <CardDescription>Your workout stats by week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((week) => (
                <div key={week.name} className="bg-gray-700/50 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-300">{week.name}</h3>
                    <span className="text-xs bg-indigo-900/70 text-indigo-300 px-2 py-0.5 rounded-full">
                      {week.workouts} workouts
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-gray-400">Duration</p>
                      <p className="text-white font-medium">{week.duration} mins</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Calories</p>
                      <p className="text-white font-medium">{week.calories}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activities & Workout History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Recent Activities</CardTitle>
            <CardDescription>Your latest workout sessions and activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-4 border-b border-gray-700 pb-4 last:border-0 last:pb-0">
                  <div className={`p-2 rounded-full ${
                    activity.type === "Workout" ? "bg-blue-900/30 text-blue-300" : "bg-amber-900/30 text-amber-300"
                  }`}>
                    {activity.type === "Workout" ? <Clock className="h-5 w-5" /> : <Calendar className="h-5 w-5" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-white">{activity.name}</h4>
                      <span className="text-sm text-gray-400">{activity.time}</span>
                    </div>
                    <p className="text-sm text-gray-400">{activity.type}</p>
                    {activity.duration > 0 && (
                      <div className="flex mt-1 text-sm">
                        <span className="text-gray-400 mr-4">{activity.duration} min</span>
                        <span className="text-gray-400">{activity.calories} calories</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Workout History</CardTitle>
            <CardDescription>Your previous workout sessions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-700/30">
                  <TableRow className="hover:bg-transparent border-gray-700">
                    <TableHead className="text-gray-300">Date</TableHead>
                    <TableHead className="text-gray-300">Workout</TableHead>
                    <TableHead className="text-gray-300 text-right">Duration</TableHead>
                    <TableHead className="text-gray-300 text-right">Sets</TableHead>
                    <TableHead className="text-gray-300 text-right">Volume</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {workoutHistory.map((workout) => (
                    <TableRow key={workout.id} className="border-gray-700 hover:bg-gray-700/30">
                      <TableCell className="font-medium text-gray-300">{workout.date}</TableCell>
                      <TableCell className="text-white">{workout.workout}</TableCell>
                      <TableCell className="text-right text-gray-300">{workout.duration} min</TableCell>
                      <TableCell className="text-right text-gray-300">{workout.sets}</TableCell>
                      <TableCell className="text-right text-gray-300">{workout.weight} lbs</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
