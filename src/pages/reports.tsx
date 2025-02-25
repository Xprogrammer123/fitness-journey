
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart, PieChart, AreaChart, CartesianGrid, Line, Bar, Area, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Pie, Cell } from "recharts";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Download, BarChart2, PieChart as PieChartIcon, TrendingUp, Filter, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

// Sample data for reports
const workoutData = [
  { month: "Jan", cardio: 12, strength: 18, flexibility: 5 },
  { month: "Feb", cardio: 15, strength: 20, flexibility: 8 },
  { month: "Mar", cardio: 18, strength: 22, flexibility: 10 },
  { month: "Apr", cardio: 16, strength: 25, flexibility: 12 },
  { month: "May", cardio: 20, strength: 28, flexibility: 14 },
  { month: "Jun", cardio: 22, strength: 30, flexibility: 15 }
];

const bodyMetricsData = [
  { date: "Jan 1", weight: 185, bodyFat: 22, muscle: 40 },
  { date: "Feb 1", weight: 182, bodyFat: 21, muscle: 41 },
  { date: "Mar 1", weight: 179, bodyFat: 20, muscle: 42 },
  { date: "Apr 1", weight: 176, bodyFat: 19, muscle: 43 },
  { date: "May 1", weight: 173, bodyFat: 18, muscle: 44 },
  { date: "Jun 1", weight: 170, bodyFat: 17, muscle: 45 },
];

const nutritionData = [
  { date: "Mon", calories: 2200, protein: 140, carbs: 220, fat: 70 },
  { date: "Tue", calories: 2100, protein: 150, carbs: 200, fat: 65 },
  { date: "Wed", calories: 2300, protein: 145, carbs: 230, fat: 75 },
  { date: "Thu", calories: 2050, protein: 155, carbs: 190, fat: 68 },
  { date: "Fri", calories: 2250, protein: 160, carbs: 210, fat: 72 },
  { date: "Sat", calories: 2400, protein: 165, carbs: 240, fat: 80 },
  { date: "Sun", calories: 2150, protein: 135, carbs: 220, fat: 70 },
];

const workoutTypeData = [
  { name: "Strength", value: 45, color: "#3b82f6" },
  { name: "Cardio", value: 30, color: "#10b981" },
  { name: "Flexibility", value: 15, color: "#f59e0b" },
  { name: "HIIT", value: 10, color: "#ef4444" },
];

export default function Reports() {
  const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];
  
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Reports & Analytics</h1>
          <p className="text-muted-foreground">Detailed insights into your fitness journey</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <CalendarIcon className="h-4 w-4" />
                <span>Date Range</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-gray-800 border-gray-700" align="end">
              <Calendar mode="range" className="bg-gray-800 text-white" />
            </PopoverContent>
          </Popover>
          
          <Button>
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader className="pb-2">
            <CardDescription>Total Workouts</CardDescription>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl text-white">68</CardTitle>
              <div className="p-2 rounded-full bg-green-900/20">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">12%</span>
              <span className="text-gray-400 ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader className="pb-2">
            <CardDescription>Average Workout Duration</CardDescription>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl text-white">58 min</CardTitle>
              <div className="p-2 rounded-full bg-green-900/20">
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm">
              <ArrowUpRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">5%</span>
              <span className="text-gray-400 ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader className="pb-2">
            <CardDescription>Weight</CardDescription>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl text-white">170 lbs</CardTitle>
              <div className="p-2 rounded-full bg-green-900/20">
                <ArrowDownRight className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm">
              <ArrowDownRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">8%</span>
              <span className="text-gray-400 ml-1">since starting</span>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader className="pb-2">
            <CardDescription>Body Fat</CardDescription>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl text-white">17%</CardTitle>
              <div className="p-2 rounded-full bg-green-900/20">
                <ArrowDownRight className="h-5 w-5 text-green-500" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm">
              <ArrowDownRight className="mr-1 h-4 w-4 text-green-500" />
              <span className="text-green-500 font-medium">5%</span>
              <span className="text-gray-400 ml-1">since starting</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report tabs */}
      <Tabs defaultValue="workouts" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:w-auto mb-8 bg-gray-800">
          <TabsTrigger value="workouts" className="data-[state=active]:bg-gray-700">
            <BarChart2 className="mr-2 h-4 w-4" /> Workouts
          </TabsTrigger>
          <TabsTrigger value="body" className="data-[state=active]:bg-gray-700">
            <TrendingUp className="mr-2 h-4 w-4" /> Body Metrics
          </TabsTrigger>
          <TabsTrigger value="nutrition" className="data-[state=active]:bg-gray-700">
            <PieChartIcon className="mr-2 h-4 w-4" /> Nutrition
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="workouts" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2 bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-white">Workout Activity</CardTitle>
                    <CardDescription>Number of workouts by category</CardDescription>
                  </div>
                  <Select defaultValue="6month">
                    <SelectTrigger className="w-36 bg-gray-700 border-gray-600">
                      <SelectValue placeholder="Period" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700">
                      <SelectItem value="1month">Last Month</SelectItem>
                      <SelectItem value="3month">Last 3 Months</SelectItem>
                      <SelectItem value="6month">Last 6 Months</SelectItem>
                      <SelectItem value="1year">Last Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={workoutData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="month" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip contentStyle={{ backgroundColor: '#272727', borderColor: '#444' }} />
                    <Legend />
                    <Bar dataKey="cardio" name="Cardio" fill="#10b981" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="strength" name="Strength" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="flexibility" name="Flexibility" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Workout Types</CardTitle>
                <CardDescription>Distribution by workout category</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={workoutTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {workoutTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#272727', borderColor: '#444' }} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="body" className="space-y-6">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-white">Body Metrics</CardTitle>
                  <CardDescription>Weight, body fat, and muscle mass over time</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" /> Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={bodyMetricsData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="date" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip contentStyle={{ backgroundColor: '#272727', borderColor: '#444' }} />
                  <Legend />
                  <Line type="monotone" dataKey="weight" name="Weight (lbs)" stroke="#f97316" strokeWidth={2} />
                  <Line type="monotone" dataKey="bodyFat" name="Body Fat (%)" stroke="#ef4444" strokeWidth={2} />
                  <Line type="monotone" dataKey="muscle" name="Muscle Mass (lbs)" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="nutrition" className="space-y-6">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-white">Nutrition Overview</CardTitle>
                  <CardDescription>Calorie and macronutrient intake</CardDescription>
                </div>
                <Select defaultValue="week">
                  <SelectTrigger className="w-36 bg-gray-700 border-gray-600">
                    <SelectValue placeholder="Period" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="week">This Week</SelectItem>
                    <SelectItem value="month">This Month</SelectItem>
                    <SelectItem value="quarter">This Quarter</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart
                  data={nutritionData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                  <XAxis dataKey="date" stroke="#888" />
                  <YAxis stroke="#888" />
                  <Tooltip contentStyle={{ backgroundColor: '#272727', borderColor: '#444' }} />
                  <Legend />
                  <Line type="monotone" dataKey="calories" name="Calories" stroke="#f97316" strokeWidth={2} />
                  <Line type="monotone" dataKey="protein" name="Protein (g)" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="carbs" name="Carbs (g)" stroke="#10b981" strokeWidth={2} />
                  <Line type="monotone" dataKey="fat" name="Fat (g)" stroke="#f59e0b" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
