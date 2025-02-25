import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, LineChart, CartesianGrid, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Pie, Cell } from "recharts";
import { Button } from "@/components/ui/button";
import { Plus, ArrowRight, ChevronDown, Filter } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface NutritionMetric {
  consumed: number;
  goal: number;
  unit?: string;
}

interface DailyNutrition {
  calories: NutritionMetric;
  protein: NutritionMetric;
  carbs: NutritionMetric;
  fat: NutritionMetric;
  fiber: NutritionMetric;
  water: NutritionMetric;
}

// Sample data for nutrition tracking
const dailyNutrition: DailyNutrition = {
  calories: { consumed: 1840, goal: 2500 },
  protein: { consumed: 110, goal: 150, unit: "g" },
  carbs: { consumed: 180, goal: 250, unit: "g" },
  fat: { consumed: 60, goal: 80, unit: "g" },
  fiber: { consumed: 18, goal: 30, unit: "g" },
  water: { consumed: 1.5, goal: 3, unit: "L" }
};

const weeklyData = [
  { day: "Mon", calories: 2100, protein: 120, carbs: 220, fat: 70 },
  { day: "Tue", calories: 1950, protein: 115, carbs: 200, fat: 65 },
  { day: "Wed", calories: 2300, protein: 135, carbs: 240, fat: 75 },
  { day: "Thu", calories: 1840, protein: 110, carbs: 180, fat: 60 },
  { day: "Fri", calories: 2200, protein: 130, carbs: 230, fat: 68 },
  { day: "Sat", calories: 2600, protein: 150, carbs: 270, fat: 85 },
  { day: "Sun", calories: 2050, protein: 125, carbs: 210, fat: 70 }
];

const mealHistory = [
  { id: 1, time: "8:30 AM", name: "Breakfast", calories: 450, protein: 25, carbs: 50, fat: 15 },
  { id: 2, time: "12:30 PM", name: "Lunch", calories: 680, protein: 40, carbs: 70, fat: 25 },
  { id: 3, time: "4:00 PM", name: "Snack", calories: 180, protein: 10, carbs: 20, fat: 5 },
  { id: 4, time: "7:30 PM", name: "Dinner", calories: 530, protein: 35, carbs: 40, fat: 15 }
];

const pieData = [
  { name: "Protein", value: 110, fill: "#3b82f6" },
  { name: "Carbs", value: 180, fill: "#10b981" },
  { name: "Fat", value: 60, fill: "#f59e0b" }
];

export default function Nutrition() {
  const COLORS = ["#3b82f6", "#10b981", "#f59e0b"];
  
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Nutrition Dashboard</h1>
          <p className="text-muted-foreground">Track your daily nutrition and meal history</p>
        </div>
        <div className="flex gap-2">
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Log Meal
          </Button>
          <Select defaultValue="today">
            <SelectTrigger className="w-32 bg-gray-800 border-gray-700">
              <SelectValue placeholder="Period" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="yesterday">Yesterday</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Daily Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2 bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Daily Nutrition Summary</CardTitle>
            <CardDescription>Your nutrition goals and progress for today</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {Object.entries(dailyNutrition).map(([key, data]) => (
                <div key={key} className="bg-gray-700/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-medium text-gray-300 capitalize">{key}</h3>
                    <span className="text-xs bg-gray-600 px-2 py-0.5 rounded-full text-gray-300">
                      {Math.round((data.consumed / data.goal) * 100)}%
                    </span>
                  </div>
                  <div className="text-xl font-bold text-white mb-2">
                    {data.consumed}{data.unit && <span className="text-sm ml-1">{data.unit}</span>}
                    <span className="text-gray-400 text-sm ml-1">/ {data.goal}{data.unit && data.unit}</span>
                  </div>
                  <Progress value={(data.consumed / data.goal) * 100} className="h-2 bg-gray-600" />
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-between sm:items-center pt-4 gap-2">
              <div>
                <h3 className="text-sm font-medium text-gray-300">Macro Distribution</h3>
                <p className="text-xs text-gray-400">Protein: 24%, Carbs: 39%, Fat: 29%</p>
              </div>
              <Button variant="outline" size="sm">
                Adjust Nutrition Goals <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Macronutrient Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center pt-2">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      {/* Weekly Chart */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-white">Weekly Nutrition Trends</CardTitle>
              <CardDescription>Overview of your nutrition for the past week</CardDescription>
            </div>
            <Select defaultValue="calories">
              <SelectTrigger className="w-36 bg-gray-700 border-gray-600">
                <SelectValue placeholder="Metric" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="calories">Calories</SelectItem>
                <SelectItem value="protein">Protein</SelectItem>
                <SelectItem value="carbs">Carbs</SelectItem>
                <SelectItem value="fat">Fat</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
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
              <YAxis stroke="#888" />
              <Tooltip contentStyle={{ backgroundColor: '#272727', borderColor: '#444' }} />
              <Legend />
              <Line type="monotone" dataKey="calories" stroke="#f97316" strokeWidth={2} />
              <Line type="monotone" dataKey="protein" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="carbs" stroke="#10b981" strokeWidth={2} />
              <Line type="monotone" dataKey="fat" stroke="#f59e0b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Meal History */}
      <Card className="bg-gray-800/50 border-gray-700">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
            <div>
              <CardTitle className="text-white">Today's Meals</CardTitle>
              <CardDescription>Your meal history for the day</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader className="bg-gray-700/30">
              <TableRow className="hover:bg-transparent border-gray-700">
                <TableHead className="text-gray-300">Time</TableHead>
                <TableHead className="text-gray-300">Meal</TableHead>
                <TableHead className="text-gray-300 text-right">Calories</TableHead>
                <TableHead className="text-gray-300 text-right">Protein</TableHead>
                <TableHead className="text-gray-300 text-right">Carbs</TableHead>
                <TableHead className="text-gray-300 text-right">Fat</TableHead>
                <TableHead className="text-gray-300 text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mealHistory.map((meal) => (
                <TableRow key={meal.id} className="border-gray-700 hover:bg-gray-700/30">
                  <TableCell className="font-medium text-gray-300">{meal.time}</TableCell>
                  <TableCell className="text-white">{meal.name}</TableCell>
                  <TableCell className="text-right text-gray-300">{meal.calories} kcal</TableCell>
                  <TableCell className="text-right text-gray-300">{meal.protein}g</TableCell>
                  <TableCell className="text-right text-gray-300">{meal.carbs}g</TableCell>
                  <TableCell className="text-right text-gray-300">{meal.fat}g</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
