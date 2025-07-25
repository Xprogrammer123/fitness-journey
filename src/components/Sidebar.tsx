
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Activity, 
  Calendar, 
  BarChart2, 
  Settings, 
  LogOut,
  Menu,
  Users,
  Award,
  Heart,
  FileText,
  Dumbbell,
  Clock,
  PieChart,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  { icon: Home, label: "Dashboard", path: "/" },
  { icon: Activity, label: "Workouts", path: "/workouts" },
  { icon: Dumbbell, label: "Exercises", path: "/exercises" },
  { icon: Calendar, label: "Schedule", path: "/schedule" },
  { icon: Clock, label: "Tracking", path: "/tracking" },
  { icon: BarChart2, label: "Progress", path: "/progress" },
  { icon: PieChart, label: "Nutrition", path: "/nutrition" },
  { icon: Heart, label: "Health", path: "/health" },
  { icon: Users, label: "Community", path: "/community" },
  { icon: Award, label: "Achievements", path: "/achievements" },
  { icon: FileText, label: "Reports", path: "/reports" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const Sidebar = () => {
  const { logout } = useAuth();
  const location = useLocation();

  const SidebarContent = () => (
    <div className="h-full flex flex-col bg-gray-900 overflow-y-auto min-w-full">
      <div className="p-4">
        <h2 className="text-xl font-bold text-primary-500">FitTrack</h2>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors ${
              location.pathname === item.path ? "bg-gray-800 text-white" : ""
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="p-4">
        <Button
          onClick={logout}
          variant="ghost"
          className="w-full justify-start text-gray-300 hover:text-white"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-screen w-72 xl:w-80 border-r border-gray-800">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  );
};
