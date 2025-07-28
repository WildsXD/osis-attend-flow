import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  ClipboardCheck, 
  Search, 
  Filter,
  CheckCircle,
  XCircle,
  Clock,
  Users,
  Download,
  Calendar
} from "lucide-react";

const Attendance = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  // Mock data - replace with real data
  const attendanceRecords = [
    {
      id: 1,
      studentId: "2024001",
      name: "Alex Johnson",
      grade: "12",
      checkIn: "08:30",
      checkOut: "15:45",
      status: "present",
      event: "Regular Meeting"
    },
    {
      id: 2,
      studentId: "2024002", 
      name: "Sarah Williams",
      grade: "11",
      checkIn: "08:35",
      checkOut: null,
      status: "present",
      event: "Regular Meeting"
    },
    {
      id: 3,
      studentId: "2024003",
      name: "Mike Chen",
      grade: "12",
      checkIn: null,
      checkOut: null,
      status: "absent",
      event: "Regular Meeting"
    },
    {
      id: 4,
      studentId: "2024004",
      name: "Emma Davis",
      grade: "10",
      checkIn: "09:15",
      checkOut: "15:30",
      status: "late",
      event: "Regular Meeting"
    },
  ];

  const stats = [
    {
      title: "Present",
      value: attendanceRecords.filter(r => r.status === "present").length,
      icon: CheckCircle,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Absent", 
      value: attendanceRecords.filter(r => r.status === "absent").length,
      icon: XCircle,
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    },
    {
      title: "Late",
      value: attendanceRecords.filter(r => r.status === "late").length,
      icon: Clock,
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      title: "Total",
      value: attendanceRecords.length,
      icon: Users,
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "present":
        return <Badge className="bg-success text-success-foreground">Present</Badge>;
      case "absent":
        return <Badge className="bg-destructive text-destructive-foreground">Absent</Badge>;
      case "late":
        return <Badge className="bg-warning text-warning-foreground">Late</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const filteredRecords = attendanceRecords.filter(record =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.studentId.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Attendance Tracking</h1>
              <p className="text-muted-foreground mt-2">
                Monitor and manage student attendance for OSIS events
              </p>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button>
                <ClipboardCheck className="w-4 h-4 mr-2" />
                Take Attendance
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-foreground mt-2">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters and Search */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="search">Search Students</Label>
                <div className="relative mt-2">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Search by name or student ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="sm:w-48">
                <Label htmlFor="date">Date</Label>
                <div className="relative mt-2">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex items-end">
                <Button variant="outline" className="mt-2">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Attendance Table */}
        <Card>
          <CardHeader>
            <CardTitle>Attendance Records</CardTitle>
            <CardDescription>
              Today's attendance for {new Date(selectedDate).toLocaleDateString()}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Student</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Grade</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Check In</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Check Out</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Event</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map((record) => (
                    <tr key={record.id} className="border-b border-border hover:bg-secondary/50 transition-smooth">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-foreground">{record.name}</p>
                          <p className="text-sm text-muted-foreground">{record.studentId}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-foreground">{record.grade}</td>
                      <td className="py-3 px-4 text-foreground">
                        {record.checkIn || <span className="text-muted-foreground">--</span>}
                      </td>
                      <td className="py-3 px-4 text-foreground">
                        {record.checkOut || <span className="text-muted-foreground">--</span>}
                      </td>
                      <td className="py-3 px-4">
                        {getStatusBadge(record.status)}
                      </td>
                      <td className="py-3 px-4 text-muted-foreground">{record.event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Attendance;