import { useEffect } from 'react';
import { useCourseStore } from '@/lib/courses';
import { CourseCard } from '@/components/courses/CourseCard';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Loader2 } from 'lucide-react';

export function CoursesPage() {
  const { courses, isLoading, fetchCourses } = useCourseStore();

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-bold">All Courses</h1>
        <p className="text-lg text-muted-foreground">
          Browse our comprehensive collection of programming courses
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="space-y-4">
          <div>
            <Label htmlFor="search">Search</Label>
            <Input
              id="search"
              placeholder="Search courses..."
              className="mt-1"
            />
          </div>
          <div>
            <Label>Price Range</Label>
            <Select>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select price range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-50">$0 - $50</SelectItem>
                <SelectItem value="51-100">$51 - $100</SelectItem>
                <SelectItem value="101-200">$101 - $200</SelectItem>
                <SelectItem value="201+">$201+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Duration</Label>
            <Select>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Durations</SelectItem>
                <SelectItem value="0-4">0-4 weeks</SelectItem>
                <SelectItem value="5-8">5-8 weeks</SelectItem>
                <SelectItem value="9-12">9-12 weeks</SelectItem>
                <SelectItem value="13+">13+ weeks</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}