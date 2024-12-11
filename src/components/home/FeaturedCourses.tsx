import { useEffect } from 'react';
import { useCourseStore } from '@/lib/courses';
import { CourseCard } from '@/components/courses/CourseCard';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

export function FeaturedCourses() {
  const { featuredCourses, isLoading, fetchFeaturedCourses } = useCourseStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFeaturedCourses();
  }, [fetchFeaturedCourses]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Courses</h2>
          <p className="text-lg text-muted-foreground">
            Start your journey with our most popular courses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" onClick={() => navigate('/courses')}>
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}