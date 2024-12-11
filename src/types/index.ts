export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
  purchasedCourses: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  instructor: {
    name: string;
    bio: string;
    avatar: string;
  };
  syllabus: {
    title: string;
    description: string;
  }[];
  reviews: {
    id: string;
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  thumbnail: string;
  featured: boolean;
  enrolledStudents: number;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}