
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