
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, CartesianGrid, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Plus, Heart, Bed, Activity } from "lucide-react";
import { Progress } from "@/components/ui/progress";

// Sample data for health metrics
const sleepData = [
  { date: "Mon", hours: 7.2, quality: 85 },
  { date: "Tue", hours: 6.8, quality: 75 },
  { date: "Wed", hours: 7.5, quality: 88 },
  { date: "Thu", hours: 8.1, quality: 92 },
  { date: "Fri", hours: 6.5, quality: 70 },
  { date: "Sat", hours: 7.8, quality: 85 },
  { date: "Sun", hours: 8.2, quality: 90 },
];

const heartRateData = [
  { time: "6am", bpm: 62 },
  { time: "9am", bpm: 75 },
  { time: "12pm", bpm: 72 },
  { time: "3pm", bpm: 78 },
  { time: "6pm", bpm: 82 },
  { time: "9pm", bpm: 70 },
  { time: "12am", bpm: 65 },
];

const stressLevel = 65;
const mood = "Good";
const hydration = 75;
const stepsToday = 8240;
const stepsGoal = 10000;
const caloriesBurned = 1840;
const caloriesGoal = 2500;

export default function Health() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Health Dashboard</h1>
          <p className="text-muted-foreground">Monitor your health metrics and daily activity</p>
        </div>
        <div>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Log Health Data
          </Button>
        </div>
      </div>

      {/* Health metrics summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader className="pb-2">
            <CardDescription>Heart Rate</CardDescription>
            <CardTitle className="text-2xl text-white">72 BPM</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Heart className="h-4 w-4 mr-2 text-red-500" />
              <span className="text-sm text-gray-400">Resting: 58 BPM</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader className="pb-2">
            <CardDescription>Sleep</CardDescription>
            <CardTitle className="text-2xl text-white">7.3 hrs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-2 text-blue-500" />
              <span className="text-sm text-gray-400">Sleep Quality: 85%</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader className="pb-2">
            <CardDescription>Steps</CardDescription>
            <CardTitle className="text-2xl text-white">{stepsToday.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Goal: {stepsGoal.toLocaleString()}</span>
                <span className="text-gray-400">{Math.round((stepsToday/stepsGoal) * 100)}%</span>
              </div>
              <Progress value={(stepsToday/stepsGoal) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader className="pb-2">
            <CardDescription>Calories Burned</CardDescription>
            <CardTitle className="text-2xl text-white">{caloriesBurned.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Goal: {caloriesGoal.toLocaleString()}</span>
                <span className="text-gray-400">{Math.round((caloriesBurned/caloriesGoal) * 100)}%</span>
              </div>
              <Progress value={(caloriesBurned/caloriesGoal) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Health visualization charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Heart Rate</CardTitle>
            <CardDescription>Your heart rate over the last 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={heartRateData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="time" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: '#272727', borderColor: '#444' }} />
                <Legend />
                <Line type="monotone" dataKey="bpm" stroke="#e11d48" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Sleep Tracking</CardTitle>
            <CardDescription>Your sleep duration and quality for the last week</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={sleepData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="date" stroke="#888" />
                <YAxis yAxisId="left" orientation="left" stroke="#3b82f6" />
                <YAxis yAxisId="right" orientation="right" stroke="#22c55e" />
                <Tooltip contentStyle={{ backgroundColor: '#272727', borderColor: '#444' }} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="hours" name="Sleep (hrs)" stroke="#3b82f6" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="quality" name="Quality (%)" stroke="#22c55e" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Additional health cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Stress Level</CardTitle>
            <CardDescription>Your current stress level assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-300">Low</span>
                <span className="text-gray-300">Medium</span>
                <span className="text-gray-300">High</span>
              </div>
              <Progress 
                value={stressLevel} 
                className="h-4 rounded-md" 
                indicatorClassName={`rounded-md ${
                  stressLevel < 40 ? "bg-green-500" : 
                  stressLevel < 70 ? "bg-yellow-500" : 
                  "bg-red-500"
                }`}
              />
              <p className="text-sm text-center mt-2 text-gray-300">
                Your stress level is {stressLevel < 40 ? "low" : stressLevel < 70 ? "moderate" : "high"}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Mood</CardTitle>
            <CardDescription>Your daily mood tracking</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center h-24">
              <div className="text-5xl mb-2">😊</div>
              <p className="text-center text-gray-300">Your mood today is {mood}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Hydration</CardTitle>
            <CardDescription>Your daily water intake</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-900 text-blue-300">
                      {hydration}%
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-300">
                      1.5L / 2L
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-6 mb-4 text-xs flex rounded-full bg-blue-900/30">
                  <div style={{ width: `${hydration}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
              </div>
              <Button size="sm" className="w-full">
                <Plus className="h-4 w-4 mr-2" /> Log Water Intake
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
