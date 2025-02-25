import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, Trophy, Medal, Star, Target, Calendar, TrendingUp, Zap, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Sample data for achievements
const achievements = [
  {
    id: 1,
    title: "Workout Warrior",
    description: "Complete 50 workouts",
    icon: Trophy,
    progress: 32,
    total: 50,
    completed: false,
    color: "text-yellow-500",
    bgColor: "bg-yellow-950/30"
  },
  {
    id: 2,
    title: "Strength Master",
    description: "Lift 10,000 lbs total weight",
    icon: Zap,
    progress: 6540,
    total: 10000,
    completed: false,
    color: "text-blue-500",
    bgColor: "bg-blue-950/30"
  },
  {
    id: 3,
    title: "Consistency King",
    description: "Work out 5 days in a row",
    icon: Calendar,
    progress: 5,
    total: 5,
    completed: true,
    color: "text-green-500",
    bgColor: "bg-green-950/30"
  },
  {
    id: 4,
    title: "Early Bird",
    description: "Complete 15 workouts before 8 AM",
    icon: Star,
    progress: 8,
    total: 15,
    completed: false,
    color: "text-purple-500",
    bgColor: "bg-purple-950/30"
  }
];

// Sample data for badges
const badges = [
  {
    id: 1,
    name: "First Milestone",
    description: "Completed your first workout",
    icon: Medal,
    earned: true,
    date: "Jun 12, 2023",
    color: "text-amber-500",
    bgColor: "bg-amber-950/30"
  },
  {
    id: 2,
    name: "Weight Loss Champion",
    description: "Lost 10 pounds",
    icon: Award,
    earned: true,
    date: "Aug 23, 2023",
    color: "text-emerald-500",
    bgColor: "bg-emerald-950/30"
  },
  {
    id: 3,
    name: "Protein Perfect",
    description: "Hit protein goals for 7 days straight",
    icon: CheckCircle,
    earned: true,
    date: "Sep 05, 2023",
    color: "text-blue-500",
    bgColor: "bg-blue-950/30"
  },
  {
    id: 4,
    name: "Marathon Ready",
    description: "Ran 100 miles total",
    icon: TrendingUp,
    earned: false,
    progress: 68,
    color: "text-red-500",
    bgColor: "bg-red-950/30"
  }
];

export default function Achievements() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Achievements</h1>
          <p className="text-muted-foreground">Track your fitness accomplishments and earn rewards</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center">
          <div className="flex items-center gap-2 text-white">
            <Target className="h-5 w-5 text-primary" />
            <span className="text-lg font-medium">Level 12</span>
          </div>
          <div className="flex items-center gap-2">
            <Progress value={65} className="w-32 h-2" />
            <span className="text-xs text-gray-400">730/1000 XP</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="achievements" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
        </TabsList>
        
        <TabsContent value="achievements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="bg-gray-800/50 border-gray-700 overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${achievement.bgColor}`}>
                        <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-white text-lg">{achievement.title}</CardTitle>
                        <CardDescription>{achievement.description}</CardDescription>
                      </div>
                    </div>
                    {achievement.completed && (
                      <Badge className="bg-green-900 text-green-300 hover:bg-green-900">
                        <CheckCircle className="mr-1 h-3 w-3" /> Completed
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-gray-300 font-medium">
                        {achievement.progress} / {achievement.total}
                      </span>
                    </div>
                    <Progress 
                      value={(achievement.progress / achievement.total) * 100} 
                      className={`h-2 ${achievement.completed ? 'bg-green-500' : ''}`}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Milestones</CardTitle>
              <CardDescription>Long-term goals and achievements</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-6 border-l-2 border-dashed border-gray-700" />
                <ul className="relative space-y-6 px-6 py-2">
                  <li className="pt-2 pb-6">
                    <div className="flex items-center space-x-4">
                      <div className="absolute -left-1">
                        <div className="bg-green-900 p-2 rounded-full border-4 border-gray-800">
                          <CheckCircle className="h-4 w-4 text-green-300" />
                        </div>
                      </div>
                      <div className="pl-10">
                        <p className="font-medium text-white">First Workout Completed</p>
                        <p className="text-sm text-gray-400">June 12, 2023</p>
                      </div>
                    </div>
                  </li>
                  <li className="pt-2 pb-6">
                    <div className="flex items-center space-x-4">
                      <div className="absolute -left-1">
                        <div className="bg-green-900 p-2 rounded-full border-4 border-gray-800">
                          <CheckCircle className="h-4 w-4 text-green-300" />
                        </div>
                      </div>
                      <div className="pl-10">
                        <p className="font-medium text-white">10 Workouts Milestone</p>
                        <p className="text-sm text-gray-400">July 17, 2023</p>
                      </div>
                    </div>
                  </li>
                  <li className="pt-2 pb-6">
                    <div className="flex items-center space-x-4">
                      <div className="absolute -left-1">
                        <div className="bg-yellow-900 p-2 rounded-full border-4 border-gray-800">
                          <span className="flex h-4 w-4 items-center justify-center text-yellow-300 font-bold text-xs">
                            !
                          </span>
                        </div>
                      </div>
                      <div className="pl-10">
                        <p className="font-medium text-white">25 Workouts Milestone</p>
                        <p className="text-sm text-gray-400">In progress - 32/50 workouts</p>
                      </div>
                    </div>
                  </li>
                  <li className="pt-2 pb-6">
                    <div className="flex items-center space-x-4">
                      <div className="absolute -left-1">
                        <div className="bg-gray-700 p-2 rounded-full border-4 border-gray-800">
                          <span className="flex h-4 w-4 items-center justify-center text-gray-400 font-bold text-xs">
                            ?
                          </span>
                        </div>
                      </div>
                      <div className="pl-10">
                        <p className="font-medium text-white">50 Workouts Milestone</p>
                        <p className="text-sm text-gray-400">Not started yet</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="badges" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {badges.map((badge) => (
              <Card key={badge.id} className={`bg-gray-800/50 border-gray-700 ${badge.earned ? '' : 'opacity-60'}`}>
                <CardContent className="pt-6 flex flex-col items-center text-center space-y-3">
                  <div className={`p-4 rounded-full ${badge.bgColor}`}>
                    <badge.icon className={`h-10 w-10 ${badge.color}`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-white mt-2">{badge.name}</h3>
                    <p className="text-sm text-gray-400">{badge.description}</p>
                  </div>
                  {badge.earned ? (
                    <Badge className="bg-green-900 text-green-300 mt-2 hover:bg-green-900">
                      Earned {badge.date}
                    </Badge>
                  ) : (
                    <div className="mt-2 w-full space-y-1">
                      <div className="text-xs text-gray-400 text-center">{badge.progress}% Complete</div>
                      <Progress value={badge.progress} className="h-1" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Badge Progress</CardTitle>
              <CardDescription>You've earned 15 out of 30 available badges</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Progress value={50} className="h-2" />
                <div className="flex justify-between text-sm text-gray-400">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                  <span>Expert</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">View All Badges</Button>
            </CardFooter>
          </Card>
          
          <div className="flex justify-center">
            <Card className="bg-gray-800/50 border-gray-700 max-w-md">
              <CardHeader>
                <CardTitle className="text-white">Share Your Achievements</CardTitle>
                <CardDescription>Let your friends know about your fitness journey!</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between gap-4">
                <Button variant="outline" className="flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  Facebook
                </Button>
                <Button variant="outline" className="flex-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  Twitter
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
