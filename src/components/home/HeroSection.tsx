import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Code2, Users } from 'lucide-react';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-background py-24">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Master Programming with Expert-Led Courses
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn from industry experts and advance your career with our comprehensive programming courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => navigate('/courses')}>
                Browse Courses
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/about')}>
                Learn More
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Courses</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">10,000+</div>
                  <div className="text-sm text-muted-foreground">Active Students</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">95%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:h-[600px]">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format"
              alt="Students learning"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}