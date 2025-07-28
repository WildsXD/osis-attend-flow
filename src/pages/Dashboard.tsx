import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Calendar, 
  ClipboardCheck, 
  TrendingUp, 
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus
} from "lucide-react";

const Dashboard = () => {
  const [timeOfDay, setTimeOfDay] = useState(() => {
    const hour = new Date().getHours();
    if (hour < 12) return "morning";
    if (hour < 18) return "afternoon";
    return "evening";
  });

  // Mock data - replace with real data
  const stats = [
    {
      title: "Total Members",
      value: "487",
      change: "+12 this month",
      icon: Users,
      color: "bg-primary",
    },
    {
      title: "Today's Attendance",
      value: "89%",
      change: "+2% from yesterday",
      icon: ClipboardCheck,
      color: "bg-success",
    },
    {
      title: "Upcoming Events",
      value: "3",
      change: "This week",
      icon: Calendar,
      color: "bg-warning",
    },
    {
      title: "Participation Rate",
      value: "94%",
      change: "+5% this month",
      icon: TrendingUp,
      color: "bg-accent",
    },
  ];

  const recentEvents = [
    {
      id: 1,
      title: "Weekly Meeting",
      date: "Today, 2:00 PM",
      status: "ongoing",
      attendees: 45,
    },
    {
      id: 2,
      title: "Student Council Elections",
      date: "Tomorrow, 10:00 AM",
      status: "upcoming",
      attendees: 0,
    },
    {
      id: 3,
      title: "Fundraising Workshop",
      date: "Dec 15, 3:00 PM",
      status: "upcoming",
      attendees: 0,
    },
  ];

  const quickActions = [
    {
      title: "Take Attendance",
      description: "Record attendance for today's session",
      icon: ClipboardCheck,
      action: "attendance",
      variant: "default" as const,
    },
    {
      title: "Add Event",
      description: "Schedule a new OSIS event",
      icon: Plus,
      action: "event",
      variant: "success" as const,
    },
    {
      title: "View Reports",
      description: "Check attendance analytics",
      icon: TrendingUp,
      action: "reports",
      variant: "outline" as const,
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ongoing":
        return <Clock className="w-4 h-4" />;
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "cancelled":
        return <XCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ongoing":
        return "bg-warning text-warning-foreground";
      case "completed":
        return "bg-success text-success-foreground";
      case "cancelled":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">
            Good {timeOfDay}, Admin! 👋
          </h1>
          <p className="text-muted-foreground mt-2">
            Here's what's happening with OSIS today
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-foreground mt-2">
                      {stat.value}
                    </p>
                    <p className="text-sm text-success mt-1">{stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common tasks you can do right now
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickActions.map((action, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-smooth cursor-pointer">
                    <div className={`w-10 h-10 bg-${action.variant === 'default' ? 'primary' : action.variant === 'success' ? 'success' : 'secondary'} rounded-lg flex items-center justify-center`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground">{action.title}</p>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Recent Events */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Events</CardTitle>
                <CardDescription>
                  Upcoming and ongoing OSIS activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentEvents.map((event) => (
                    <div key={event.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-secondary/50 transition-smooth">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(event.status)}
                          <div>
                            <p className="font-semibold text-foreground">{event.title}</p>
                            <p className="text-sm text-muted-foreground">{event.date}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        {event.attendees > 0 && (
                          <span className="text-sm text-muted-foreground">
                            {event.attendees} attendees
                          </span>
                        )}
                        <Badge className={getStatusColor(event.status)}>
                          {event.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;