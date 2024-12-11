import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/lib/auth';
import { BookOpen, Menu, X, LogIn, UserPlus, User, LogOut } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo Section */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <BookOpen className="h-6 w-6" />
          <span className="text-xl font-bold">CodeMaster</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {['Home', 'Courses', 'About', 'Contact'].map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              onClick={() => navigate(`/${item.toLowerCase()}`)}
              className="text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 hover:shadow transition-all"
            >
              {item}
            </Button>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/dashboard')}
                className="flex items-center gap-2 text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 hover:shadow transition-all"
              >
                <User className="h-4 w-4" />
                Dashboard
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="flex items-center gap-2 text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 hover:shadow transition-all"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/login')}
                className="flex items-center gap-2 text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 hover:shadow transition-all"
              >
                <LogIn className="h-4 w-4" />
                Login
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => navigate('/register')}
                className="flex items-center gap-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 hover:shadow-lg transition-all"
              >
                <UserPlus className="h-4 w-4" />
                Sign Up
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t p-4">
          <nav className="flex flex-col space-y-4">
            {['Home', 'Courses', 'About', 'Contact'].map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="justify-start text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 hover:shadow transition-all"
                onClick={() => {
                  navigate(`/${item.toLowerCase()}`);
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </Button>
            ))}
            {user ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 hover:shadow transition-all"
                  onClick={() => {
                    navigate('/dashboard');
                    setIsMenuOpen(false);
                  }}
                >
                  <User className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 hover:shadow transition-all"
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start text-sm font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 hover:shadow transition-all"
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="justify-start text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 hover:shadow-lg transition-all"
                  onClick={() => {
                    navigate('/register');
                    setIsMenuOpen(false);
                  }}
                >
                  <UserPlus className="mr-2 h-4 w-4" />
                  Sign Up
                </Button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
