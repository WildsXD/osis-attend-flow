import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Calendar, ClipboardCheck, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Smart{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Attendance
                </span>{" "}
                for Modern Students
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
                Streamline your OSIS attendance tracking with our intuitive digital platform. 
                Easy check-ins, real-time analytics, and seamless event management.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild className="hover-lift">
                <Link to="/register">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover-lift">
                <Link to="/login">
                  Sign In
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-2 mx-auto">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-xl mb-2 mx-auto">
                  <Calendar className="w-6 h-6 text-success" />
                </div>
                <p className="text-2xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Events Tracked</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-warning/10 rounded-xl mb-2 mx-auto">
                  <ClipboardCheck className="w-6 h-6 text-warning" />
                </div>
                <p className="text-2xl font-bold text-foreground">98%</p>
                <p className="text-sm text-muted-foreground">Attendance Rate</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:block">
            <div className="relative">
              <img
                src={heroImage}
                alt="Students collaborating with technology"
                className="w-full h-auto rounded-2xl shadow-large hover-lift"
              />
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-card shadow-medium rounded-xl p-4 border border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-success rounded-lg flex items-center justify-center">
                    <ClipboardCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Quick Check-in</p>
                    <p className="text-xs text-muted-foreground">In 2 seconds</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card shadow-medium rounded-xl p-4 border border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Real-time Stats</p>
                    <p className="text-xs text-muted-foreground">Live updates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;