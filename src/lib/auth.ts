import { create } from 'zustand';
import { AuthState } from '@/types';
import { toast } from 'sonner';

interface AuthStore extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      set({
        user: {
          id: '1',
          email,
          name: 'John Doe',
          role: 'user',
          purchasedCourses: [],
        },
        isLoading: false,
      });
      toast.success('Successfully logged in!');
    } catch (error) {
      set({ error: 'Invalid credentials', isLoading: false });
      toast.error('Failed to login. Please try again.');
    }
  },
  register: async (email: string, password: string, name: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      set({
        user: {
          id: '1',
          email,
          name,
          role: 'user',
          purchasedCourses: [],
        },
        isLoading: false,
      });
      toast.success('Successfully registered!');
    } catch (error) {
      set({ error: 'Registration failed', isLoading: false });
      toast.error('Failed to register. Please try again.');
    }
  },
  logout: () => {
    set({ user: null, error: null });
    toast.success('Successfully logged out!');
  },
}));