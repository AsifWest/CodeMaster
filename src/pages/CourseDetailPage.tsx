import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCourseStore } from '@/lib/courses';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock, Users, Star } from 'lucide-react';
import { Course } from '@/types';

export function CourseDetailPage() {
  const { id } = useParams();
  const { courses, fetchCourses } = useCourseStore();
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    fetchCourses().then(() => {
      const foundCourse = courses.find((c) => c.id === id);
      if (foundCourse) {
        setCourse(foundCourse);
      }
    });
  }, [id, courses, fetchCourses]);

  if (!course) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Course not found</h2>
          <p className="text-muted-foreground">
            The course you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-muted-foreground">
              {course.description}
            </p>
          </div>

          <Tabs defaultValue="syllabus">
            <TabsList>
              <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="syllabus" className="space-y-4">
              {course.syllabus.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="instructor">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={course.instructor.avatar} />
                    <AvatarFallback>
                      {course.instructor.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{course.instructor.name}</CardTitle>
                    <CardDescription>{course.instructor.bio}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </TabsContent>
            <TabsContent value="reviews" className="space-y-4">
              {course.reviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{review.userName}</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="ml-1">{review.rating}</span>
                      </div>
                    </div>
                    <CardDescription>{review.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                ${course.price}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-muted-foreground" />
                <span>{course.enrolledStudents} enrolled</span>
              </div>
              <Button className="w-full" size="lg">
                Enroll Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}