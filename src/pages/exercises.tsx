
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart2, Dumbbell, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Sample data for exercises
const exerciseCategories = [
  { id: 1, name: "All Exercises", count: 350 },
  { id: 2, name: "Strength Training", count: 120 },
  { id: 3, name: "Cardio", count: 75 },
  { id: 4, name: "Flexibility", count: 45 },
  { id: 5, name: "Balance", count: 30 },
  { id: 6, name: "Calisthenics", count: 80 },
];

const popularExercises = [
  { id: 1, name: "Barbell Squat", muscle: "Quadriceps", equipment: "Barbell", difficulty: "Intermediate" },
  { id: 2, name: "Bench Press", muscle: "Chest", equipment: "Barbell, Bench", difficulty: "Intermediate" },
  { id: 3, name: "Deadlift", muscle: "Full Body", equipment: "Barbell", difficulty: "Advanced" },
  { id: 4, name: "Pull-up", muscle: "Back", equipment: "Pull-up Bar", difficulty: "Intermediate" },
  { id: 5, name: "Plank", muscle: "Core", equipment: "None", difficulty: "Beginner" },
  { id: 6, name: "Lunges", muscle: "Legs", equipment: "None", difficulty: "Beginner" },
  { id: 7, name: "Shoulder Press", muscle: "Shoulders", equipment: "Dumbbells", difficulty: "Intermediate" },
  { id: 8, name: "Bicep Curl", muscle: "Arms", equipment: "Dumbbells", difficulty: "Beginner" },
];

export default function Exercises() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Exercises");

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Exercises Library</h1>
          <p className="text-muted-foreground">Browse, search and learn about different exercises</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Dumbbell className="mr-2 h-4 w-4" /> Create Custom Exercise
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Sidebar with categories */}
        <Card className="md:col-span-3 bg-gray-800/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Categories</CardTitle>
            <CardDescription>Browse exercises by category</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            {exerciseCategories.map((category) => (
              <button
                key={category.id}
                className={`w-full text-left px-3 py-2 rounded-md transition-colors flex justify-between items-center ${
                  selectedCategory === category.name 
                    ? "bg-primary/20 text-primary" 
                    : "text-gray-300 hover:bg-gray-700/50"
                }`}
                onClick={() => setSelectedCategory(category.name)}
              >
                <span>{category.name}</span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">{category.count}</span>
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Main content */}
        <div className="md:col-span-9 space-y-6">
          {/* Search and filters */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    className="pl-10 bg-gray-700 border-gray-600 text-white" 
                    placeholder="Search exercises..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-36 bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      <SelectItem value="all">All Levels</SelectItem>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exercises tabs */}
          <Card className="bg-gray-800/50 border-gray-700">
            <Tabs defaultValue="list" className="w-full">
              <CardHeader className="pb-0">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white">Browse Exercises</CardTitle>
                  <TabsList className="bg-gray-700">
                    <TabsTrigger value="list" className="data-[state=active]:bg-gray-600">List</TabsTrigger>
                    <TabsTrigger value="grid" className="data-[state=active]:bg-gray-600">Grid</TabsTrigger>
                  </TabsList>
                </div>
                <CardDescription>Showing exercises in {selectedCategory}</CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                <TabsContent value="list" className="m-0">
                  <Table>
                    <TableHeader className="bg-gray-700/30">
                      <TableRow className="hover:bg-transparent border-gray-700">
                        <TableHead className="text-gray-300">Exercise Name</TableHead>
                        <TableHead className="text-gray-300">Muscle Group</TableHead>
                        <TableHead className="text-gray-300">Equipment</TableHead>
                        <TableHead className="text-gray-300">Difficulty</TableHead>
                        <TableHead className="text-gray-300 text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {popularExercises.map((exercise) => (
                        <TableRow key={exercise.id} className="border-gray-700 hover:bg-gray-700/30">
                          <TableCell className="font-medium text-white">{exercise.name}</TableCell>
                          <TableCell className="text-gray-300">{exercise.muscle}</TableCell>
                          <TableCell className="text-gray-300">{exercise.equipment}</TableCell>
                          <TableCell>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              exercise.difficulty === "Beginner" ? "bg-green-900/70 text-green-300" :
                              exercise.difficulty === "Intermediate" ? "bg-blue-900/70 text-blue-300" :
                              "bg-red-900/70 text-red-300"
                            }`}>
                              {exercise.difficulty}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">View</Button>
                            <Button variant="ghost" size="sm">Add</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                
                <TabsContent value="grid" className="m-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {popularExercises.map((exercise) => (
                      <Card key={exercise.id} className="bg-gray-700/50 border-gray-600 hover:bg-gray-700 transition-colors">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg text-white">{exercise.name}</CardTitle>
                          <CardDescription>{exercise.muscle}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Equipment:</span>
                              <span className="text-gray-200">{exercise.equipment}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">Difficulty:</span>
                              <span className={`px-2 py-0.5 rounded-full text-xs ${
                                exercise.difficulty === "Beginner" ? "bg-green-900/70 text-green-300" :
                                exercise.difficulty === "Intermediate" ? "bg-blue-900/70 text-blue-300" :
                                "bg-red-900/70 text-red-300"
                              }`}>
                                {exercise.difficulty}
                              </span>
                            </div>
                            <div className="pt-2 flex justify-end space-x-2">
                              <Button variant="outline" size="sm">View</Button>
                              <Button size="sm">Add</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </div>
  );
}
