
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const weeklySchedule = [
  {
    day: "Monday",
    workouts: [
      {
        time: "07:00 AM",
        name: "Morning Yoga",
        duration: "45 min",
        location: "Home",
      },
      {
        time: "06:00 PM",
        name: "Strength Training",
        duration: "60 min",
        location: "Gym",
      },
    ],
  },
  {
    day: "Tuesday",
    workouts: [
      {
        time: "08:00 AM",
        name: "HIIT",
        duration: "30 min",
        location: "Park",
      },
    ],
  },
  {
    day: "Wednesday",
    workouts: [
      {
        time: "07:00 AM",
        name: "Running",
        duration: "45 min",
        location: "Park",
      },
      {
        time: "06:00 PM",
        name: "Swimming",
        duration: "45 min",
        location: "Pool",
      },
    ],
  },
  {
    day: "Thursday",
    workouts: [
      {
        time: "06:00 PM",
        name: "Strength Training",
        duration: "60 min",
        location: "Gym",
      },
    ],
  },
  {
    day: "Friday",
    workouts: [
      {
        time: "07:00 AM",
        name: "Morning Yoga",
        duration: "45 min",
        location: "Home",
      },
    ],
  },
];

const Schedule = () => {
  return (
    <div className="p-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Schedule</h1>
        <Button className="bg-primary-500 hover:bg-primary-600">
          <Plus className="w-4 h-4 mr-2" />
          Add Workout
        </Button>
      </div>

      <div className="grid gap-6">
        <Card className="bg-white/5 border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Weekly Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-white/10">
                  <TableHead className="text-white">Day</TableHead>
                  <TableHead className="text-white">Workouts</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {weeklySchedule.map((day) => (
                  <TableRow key={day.day} className="border-white/10">
                    <TableCell className="font-medium text-white">
                      {day.day}
                    </TableCell>
                    <TableCell>
                      <div className="space-y-3">
                        {day.workouts.map((workout, index) => (
                          <div
                            key={index}
                            className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg bg-white/5"
                          >
                            <div className="flex items-center gap-2 min-w-[150px]">
                              <Clock className="w-4 h-4 text-primary-500" />
                              <span className="text-sm text-gray-300">
                                {workout.time}
                              </span>
                            </div>
                            <div className="flex-1">
                              <span className="text-sm font-medium text-white">
                                {workout.name}
                              </span>
                              <div className="flex items-center gap-2 mt-1">
                                <CalendarIcon className="w-3 h-3 text-gray-400" />
                                <span className="text-xs text-gray-400">
                                  {workout.duration}
                                </span>
                                <MapPin className="w-3 h-3 text-gray-400 ml-2" />
                                <span className="text-xs text-gray-400">
                                  {workout.location}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Schedule;
