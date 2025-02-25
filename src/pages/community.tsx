
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, MessageSquare, Heart, Award, TrendingUp, Users, Share2 } from "lucide-react";

// Sample data for community section
const communityPosts = [
  {
    id: 1,
    user: { name: "Alex Johnson", avatar: "/avatars/alex.jpg", username: "alexfit" },
    time: "2 hours ago",
    content: "Just completed my first marathon! 26.2 miles in 4:12:35. Months of training finally paid off! #Running #Marathon #PersonalBest",
    likes: 124,
    comments: 32,
    image: "/posts/marathon.jpg"
  },
  {
    id: 2,
    user: { name: "Samantha Lee", avatar: "/avatars/samantha.jpg", username: "samlee" },
    time: "Yesterday",
    content: "New PR on deadlifts today! Hit 225 lbs for 5 reps. Hard work and consistency is key! What's your latest PR? #Fitness #Strength #GymLife",
    likes: 95,
    comments: 18,
    image: null
  },
  {
    id: 3,
    user: { name: "Miguel Rodriguez", avatar: "/avatars/miguel.jpg", username: "miguelr" },
    time: "3 days ago",
    content: "Sharing my 12-week transformation! Down 18lbs and feeling stronger than ever. Check out my workout routine and nutrition plan in the comments. #Transformation #WeightLoss #FitnessJourney",
    likes: 210,
    comments: 47,
    image: "/posts/transformation.jpg"
  }
];

const challengeData = [
  {
    id: 1,
    title: "30-Day Plank Challenge",
    participants: 1240,
    difficulty: "Beginner",
    daysLeft: 22,
    progress: 27
  },
  {
    id: 2,
    title: "10K Running Prep",
    participants: 856,
    difficulty: "Intermediate",
    daysLeft: 15,
    progress: 50
  },
  {
    id: 3,
    title: "Summer Shred Challenge",
    participants: 2120,
    difficulty: "Advanced",
    daysLeft: 45,
    progress: 10
  }
];

const activeUsers = [
  { name: "Jenna K.", avatar: "/avatars/jenna.jpg", points: 1250 },
  { name: "Marcus T.", avatar: "/avatars/marcus.jpg", points: 1180 },
  { name: "Olivia R.", avatar: "/avatars/olivia.jpg", points: 1050 },
  { name: "Ryan B.", avatar: "/avatars/ryan.jpg", points: 980 },
  { name: "Sophia W.", avatar: "/avatars/sophia.jpg", points: 920 }
];

export default function Community() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">Community</h1>
          <p className="text-muted-foreground">Connect with fitness enthusiasts and share your journey</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input 
              className="pl-10 w-full md:w-[260px] bg-gray-800 border-gray-700 text-white" 
              placeholder="Search community..." 
            />
          </div>
          <Button>Create Post</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main content */}
        <div className="lg:col-span-8 space-y-6">
          {/* Tabs for different content types */}
          <Tabs defaultValue="feed" className="w-full">
            <CardHeader className="p-0 pb-4">
              <TabsList className="bg-gray-800 w-full justify-start rounded-md">
                <TabsTrigger value="feed" className="data-[state=active]:bg-gray-700">Feed</TabsTrigger>
                <TabsTrigger value="challenges" className="data-[state=active]:bg-gray-700">Challenges</TabsTrigger>
                <TabsTrigger value="groups" className="data-[state=active]:bg-gray-700">Groups</TabsTrigger>
                <TabsTrigger value="events" className="data-[state=active]:bg-gray-700">Events</TabsTrigger>
              </TabsList>
            </CardHeader>
            
            <TabsContent value="feed" className="mt-0 space-y-6">
              {/* Post creation card */}
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Input 
                        className="bg-gray-700 border-gray-600 text-white" 
                        placeholder="Share your fitness journey..." 
                      />
                      <div className="flex justify-between mt-4">
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">Photo</Button>
                          <Button variant="outline" size="sm">Workout</Button>
                        </div>
                        <Button size="sm">Post</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Community posts */}
              {communityPosts.map((post) => (
                <Card key={post.id} className="bg-gray-800/50 border-gray-700">
                  <CardHeader className="py-4">
                    <div className="flex justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{post.user.name.charAt(0)}</AvatarFallback>
                          <AvatarImage src={post.user.avatar} />
                        </Avatar>
                        <div>
                          <CardTitle className="text-white text-base">{post.user.name}</CardTitle>
                          <CardDescription>@{post.user.username} • {post.time}</CardDescription>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <span className="sr-only">Menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-1 w-5">
                          <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
                        </svg>
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="py-0">
                    <p className="text-gray-200 mb-4">{post.content}</p>
                    {post.image && (
                      <div className="relative rounded-lg overflow-hidden mb-4 aspect-video">
                        <img src={post.image} alt="Post content" className="w-full h-full object-cover" />
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="py-3 flex justify-between border-t border-gray-700">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-red-400">
                      <Heart className="mr-1 h-4 w-4" /> {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400">
                      <MessageSquare className="mr-1 h-4 w-4" /> {post.comments}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-400">
                      <Share2 className="mr-1 h-4 w-4" /> Share
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="challenges" className="mt-0 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {challengeData.map((challenge) => (
                  <Card key={challenge.id} className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-white">{challenge.title}</CardTitle>
                          <CardDescription>{challenge.participants} participants</CardDescription>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          challenge.difficulty === "Beginner" ? "bg-green-900/70 text-green-300" :
                          challenge.difficulty === "Intermediate" ? "bg-blue-900/70 text-blue-300" :
                          "bg-red-900/70 text-red-300"
                        }`}>
                          {challenge.difficulty}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span className="text-gray-400">Progress</span>
                            <span className="text-gray-400">{challenge.progress}%</span>
                          </div>
                          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-primary rounded-full"
                              style={{ width: `${challenge.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">{challenge.daysLeft} days left</span>
                          <Button size="sm">Join Challenge</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="groups" className="mt-0">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-xl font-medium text-white mb-2">Join Fitness Groups</h3>
                    <p className="text-gray-400 mb-4">
                      Connect with others who share your fitness interests and goals
                    </p>
                    <Button>Browse Groups</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="events" className="mt-0">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-xl font-medium text-white mb-2">Find Fitness Events</h3>
                    <p className="text-gray-400 mb-4">
                      Discover local workouts, races, and fitness meetups
                    </p>
                    <Button>Explore Events</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          {/* Leaderboard */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-white">
                <div className="flex items-center">
                  <Award className="mr-2 h-5 w-5 text-yellow-500" />
                  Community Leaders
                </div>
              </CardTitle>
              <CardDescription>Top contributors this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeUsers.map((user, index) => (
                  <div key={user.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-6">
                        {index < 3 ? (
                          <span className={`text-sm font-bold ${
                            index === 0 ? "text-yellow-500" :
                            index === 1 ? "text-gray-300" :
                            "text-amber-700"
                          }`}>
                            #{index + 1}
                          </span>
                        ) : (
                          <span className="text-sm text-gray-500">#{index + 1}</span>
                        )}
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        <AvatarImage src={user.avatar} />
                      </Avatar>
                      <span className="font-medium text-gray-200">{user.name}</span>
                    </div>
                    <span className="text-sm text-primary">{user.points} pts</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Trending */}
          <Card className="bg-gray-800/50 border-gray-700">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                Trending
              </CardTitle>
              <CardDescription>Popular topics and hashtags</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <div className="font-medium text-white">#SummerShred</div>
                  <p className="text-sm text-gray-400">2.5k posts this week</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <div className="font-medium text-white">#MorningWorkout</div>
                  <p className="text-sm text-gray-400">1.8k posts this week</p>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-3">
                  <div className="font-medium text-white">#MealPrep</div>
                  <p className="text-sm text-gray-400">1.2k posts this week</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
