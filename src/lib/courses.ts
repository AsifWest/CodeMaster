import { create } from 'zustand';
import { Course } from '@/types';

interface CourseStore {
  courses: Course[];
  featuredCourses: Course[];
  isLoading: boolean;
  error: string | null;
  fetchCourses: () => Promise<void>;
  fetchFeaturedCourses: () => Promise<void>;
}

// Sample course data
const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced React Development',
    description: 'Master React with advanced patterns, hooks, and modern best practices.',
    price: 199.99,
    duration: '12 weeks',
    instructor: {
      name: 'Sarah Johnson',
      bio: 'Senior Frontend Developer with 10+ years of experience',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format',
    },
    syllabus: [
      {
        title: 'React Fundamentals',
        description: 'Core concepts and modern React features',
      },
      {
        title: 'Advanced State Management',
        description: 'Redux, Context API, and Zustand',
      },
    ],
    reviews: [
      {
        id: '1',
        userId: '1',
        userName: 'Mike Smith',
        rating: 5,
        comment: 'Excellent course! The content is well-structured and comprehensive.',
        date: '2024-03-15',
      },
    ],
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format',
    featured: true,
    enrolledStudents: 1250,
  },
  {
    id: '2',
    title: 'Full-Stack JavaScript',
    description: 'Build modern web applications with Node.js, Express, and MongoDB.',
    price: 249.99,
    duration: '16 weeks',
    instructor: {
      name: 'David Chen',
      bio: 'Full-Stack Developer and Tech Lead',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format',
    },
    syllabus: [
      {
        title: 'Node.js Fundamentals',
        description: 'Server-side JavaScript and async programming',
      },
      {
        title: 'Database Design',
        description: 'MongoDB schema design and best practices',
      },
    ],
    reviews: [
      {
        id: '2',
        userId: '2',
        userName: 'Emily Brown',
        rating: 4,
        comment: 'Great course for full-stack development!',
        date: '2024-03-10',
      },
    ],
    thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=800&auto=format',
    featured: true,
    enrolledStudents: 980,
  },
];

export const useCourseStore = create<CourseStore>((set) => ({
  courses: [],
  featuredCourses: [],
  isLoading: false,
  error: null,
  fetchCourses: async () => {
    set({ isLoading: true });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      set({ courses: sampleCourses, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch courses', isLoading: false });
    }
  },
  fetchFeaturedCourses: async () => {
    set({ isLoading: true });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const featured = sampleCourses.filter((course) => course.featured);
      set({ featuredCourses: featured, isLoading: false });
    } catch (error) {
      set({ error: 'Failed to fetch featured courses', isLoading: false });
    }
  },
}));